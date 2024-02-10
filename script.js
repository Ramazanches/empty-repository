document.addEventListener("DOMContentLoaded", () => {
	const sections = document.querySelectorAll('section');
	if (sections.length > 0) {
		sections.map(section => {
			if (section !== null) {
				section.style.background = 'lightblue'
			}
		})
	}
});