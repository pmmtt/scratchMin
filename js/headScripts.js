document.addEventListener("DOMContentLoaded", function () {
	const cardGrids = document.querySelectorAll(".card_grid");
	const tabWrap = document.querySelectorAll(".tabWrap");
	function addActive() {
		tabWrap.forEach((elements) => {
			const firstChild = elements.querySelector(".single-tab-wrap");
			const singleTabContent = elements.querySelector(".tab-content");
			const singleTabHeight = singleTabContent ? singleTabContent.offsetHeight : 0;

               if(elements.classList.contains('toggle-tab-wrap')){
                    if (firstChild) {
                         firstChild.classList.add("active");
                         elements.style.height = `${singleTabHeight + 600}px`;
                    }
               }else{
                    if (firstChild) {
                         firstChild.classList.add("active");
     
                         if (window.innerWidth > 1024) {
                              firstChild.style.height = `${singleTabHeight + 150}px`;
                         } else {
                              firstChild.style.height = ""; // Reset height for smaller viewports
                         }
                    }
               }
		});
	}

	// Initial call to set active class and height on page load
	addActive();

	// Listen for window resize and call addActive to adjust heights based on viewport size
	window.addEventListener("resize", addActive);

	if (tabWrap) {
		addActive();
	}

	cardGrids.forEach((cardGrid) => {
		const grids = cardGrid.querySelectorAll(".grid_card");
		const arrowContainer = document.createElement("div");

		// Insert the carousel arrows HTML
		const carouselArrows = `
			<button class="left-arrow"><svg width="26" height="25" viewBox="0 0 26 25" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M2.64287 12.532C2.64287 12.0108 3.0654 11.5882 3.58662 11.5882L23.9282 11.5882C24.4494 11.5882 24.8719 12.0108 24.8719 12.532C24.8719 13.0532 24.4494 13.4757 23.9282 13.4757L3.58662 13.4757C3.0654 13.4757 2.64287 13.0532 2.64287 12.532Z" fill="#313133" /><path d="M11.6412 22.4525L13.2795 20.6777L4.51941 12.532L13.2909 4.3749L11.6299 2.60013L0.958496 12.5206L11.6412 22.4525Z" fill="#313133" /></svg></button>
			<button class="right-arrow"><svg width="26" height="25" viewBox="0 0 26 25" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M2.64287 12.532C2.64287 12.0108 3.0654 11.5882 3.58662 11.5882L23.9282 11.5882C24.4494 11.5882 24.8719 12.0108 24.8719 12.532C24.8719 13.0532 24.4494 13.4757 23.9282 13.4757L3.58662 13.4757C3.0654 13.4757 2.64287 13.0532 2.64287 12.532Z" fill="#313133" /><path d="M11.6412 22.4525L13.2795 20.6777L4.51941 12.532L13.2909 4.3749L11.6299 2.60013L0.958496 12.5206L11.6412 22.4525Z" fill="#313133" /></svg></button>
		`;

          if(cardGrid.classList.contains('carousel-card')){
               arrowContainer.classList.add("carousel-arrows");
               arrowContainer.innerHTML = carouselArrows;
               cardGrid.append(arrowContainer);
          }

		// Initialize the active, prev, and next classes
		let currentIndex = 0;
		let lastIndex = grids.length - 1;
		let nextIndex = (currentIndex + 1) % grids.length;

		// Set initial classes
		if (grids.length > 0) {
			grids[currentIndex].classList.add("active");
			grids[lastIndex].classList.add("prev");
			grids[nextIndex].classList.add("next");
		}

		// Function to update active, prev, and next classes
		function updateClasses(newIndex) {
			grids[currentIndex].classList.remove("active");
			grids[lastIndex].classList.remove("prev");
			grids[nextIndex].classList.remove("next");

			// Update indices
			currentIndex = newIndex;
			lastIndex = currentIndex === 0 ? grids.length - 1 : currentIndex - 1;
			nextIndex = (currentIndex + 1) % grids.length;

			// Add updated classes
			grids[currentIndex].classList.add("active");
			grids[lastIndex].classList.add("prev");
			grids[nextIndex].classList.add("next");
		}

		// Add event listeners to arrows
		const rightArrow = cardGrid.querySelector(".right-arrow");
		const leftArrow = cardGrid.querySelector(".left-arrow");

		rightArrow.addEventListener("click", () => {
			const newIndex = (currentIndex + 1) % grids.length;
			updateClasses(newIndex);
		});

		leftArrow.addEventListener("click", () => {
			const newIndex = (currentIndex - 1 + grids.length) % grids.length;
			updateClasses(newIndex);
		});
	});

	// Reset forms on page load
	window.addEventListener("load", function () {
		const forms = document.querySelectorAll("form");
		forms.forEach((form) => form.reset());
	});
});
