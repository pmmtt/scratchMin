document.addEventListener('DOMContentLoaded', function () {
	const searchInput = document.getElementById('live-search-input');
	const resultsContainer = document.getElementById('search-results');

	if (!searchInput) return;

	searchInput.addEventListener('input', function () {
		let searchTerm = this.value.trim();

		if (searchTerm.length > 2) { // Trigger after 3 characters
			const query = `
				query SearchQuery($searchTerm: String!) {
					posts(where: { search: $searchTerm }) {
						nodes {
							title
							uri
							excerpt
							content
						}
					}
					pages(where: { search: $searchTerm }) {
						nodes {
							title
							uri
							excerpt
							content
						}
					}
					serviceAlerts: serviceAlerts(where: { search: $searchTerm }) {
						nodes {
							title
							uri
							excerpt
							content
						}
					}
					routes: routes(where: { search: $searchTerm }) {
						nodes {
							title
							uri
							excerpt
							content
						}
					}
					pageElements: pageElements(where: { search: $searchTerm }) {
						nodes {
							title
							uri
							excerpt
							content
						}
					}
				}
			`;

			const variables = { searchTerm };

			fetch('/graphql', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({
					query: query,
					variables: variables,
				}),
			})
			.then(response => response.json())
			.then(data => {
				const results = [
					...data.data.posts.nodes,
					...data.data.pages.nodes,
					...data.data.serviceAlerts.nodes,
					...data.data.routes.nodes,
					...data.data.pageElements.nodes // Include pageElements in the results
				];

				resultsContainer.innerHTML = ''; // Clear previous results

				if (results.length) {
					results.forEach(result => {
						const resultItem = document.createElement('div');
						resultItem.classList.add('result-item');

						// Search in the content first, fallback to excerpt if not found
						let highlightedContent = highlightTextWithHTML(result.content || '', searchTerm, 75);
						if (!highlightedContent.includes('<span class="highlight">')) {
							highlightedContent = highlightTextWithHTML(result.excerpt || '', searchTerm, 75);
						}

						resultItem.innerHTML = `
							<h3><a href="${result.uri}">${result.title}</a></h3>
							<p>${highlightedContent}</p>
						`;

						resultsContainer.appendChild(resultItem);
					});
				} else {
					resultsContainer.innerHTML = '<p>No results found</p>';
				}
			})
			.catch(error => {
				console.error('Error:', error);
			});
		} else {
			resultsContainer.innerHTML = ''; // Clear results if input is too short
		}
	});
});

// Function to highlight the search term and show the following 125 characters, preserving HTML
function highlightTextWithHTML(htmlContent, searchTerm, contextLength) {
	const regex = new RegExp(`(${searchTerm})`, 'gi');
	const match = htmlContent.match(regex);

	if (match) {
		// Find the first occurrence of the search term
		const index = htmlContent.toLowerCase().indexOf(searchTerm.toLowerCase());

		// Create a range that shows the term and a context of 125 characters around it
		const start = Math.max(0, index);
		const end = Math.min(htmlContent.length, start + searchTerm.length + contextLength);

		// Extract the snippet from the content, keeping HTML intact
		const snippet = htmlContent.substring(start, end);

		// Replace the search term with a highlighted version
		const highlightedSnippet = snippet.replace(regex, '<span class="highlight">$1</span>');

		return highlightedSnippet + '...'; // Append ellipsis to indicate there's more content
	} else {
		// If no match found, return the first part of the content as a fallback
		return htmlContent.substring(0, contextLength) + '...';
	}
}
