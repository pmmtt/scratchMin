const masthead = document.querySelector("#masthead");
const menuBtn = document.querySelector(".menu-toggle");
const nav = document.querySelector(".main-navigation");
const subParent = document.querySelectorAll(".menu-item-has-children");

menuBtn.addEventListener("click", () => {
	masthead.classList.toggle("active");
});

subParent.forEach((hasChldrn) => {
	let chldrnLnk = hasChldrn.querySelector("a");

	chldrnLnk.addEventListener("click", (event) => {
		event.preventDefault();
	});

	chldrnLnk.addEventListener("focus", () => {
		hasChldrn.setAttribute("aria-expanded", "true");
	});

	chldrnLnk.addEventListener("blur", () => {
		hasChldrn.setAttribute("aria-expanded", "false");
	});
});

const tabAccrdWrap = document.querySelectorAll(".single-tab-wrap");

tabAccrdWrap.forEach((tbWrap) => {
	let tbBtn = tbWrap.querySelector("button");

	tbBtn.addEventListener("click", () => {
		const tbBtnParent = tbBtn.closest('.single-tab-wrap');
		const siblings = Array.from(tbBtnParent.parentNode.children).filter((child) => child !== tbBtnParent);
		const tabGrandParent = tbBtnParent.parentElement;

		// Only apply height adjustment if viewport width is over 1024px
		if (window.innerWidth > 1024) {
			const tabContent = tbBtnParent.querySelector(".tab-content");
			const tabContentHeight = tabContent ? tabContent.offsetHeight : 0;

			if (tabGrandParent.classList.contains("tabWrap")) {
				tabGrandParent.style.height = `${tabContentHeight + 95}px`;
			}
		}

		// Toggle active class on the clicked tab
		if (tbBtnParent.classList.contains("active") && !tabGrandParent.classList.contains("tabWrap")) {
			tbBtnParent.classList.remove("active");
		} else {
			tbBtnParent.classList.add("active");
		}

		// Remove 'active' class from sibling tabs
		siblings.forEach((sibling) => {
			sibling.classList.remove("active");
		});
	});
});
