document.addEventListener('DOMContentLoaded', () => {
	const svgPaths = document.querySelectorAll('#wrapper svg path');

	document.addEventListener('scroll', () => {
		const element = document.getElementById('wrapper');
		if (isInViewPort(element)) svgPaths.forEach(path => path.classList.add('animationName'));
	});

	let isInViewPort = element => {
		const bounding = element.getBoundingClientRect();

		if (element.clientHeight > document.documentElement.clientHeight) {
			return bounding.top < 125;
		}

		return bounding.top >= 0
            && bounding.left >= 0
            && bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight)
            && bounding.right <= (window.innerWidth || document.documentElement.clientWidth);
	};
});
