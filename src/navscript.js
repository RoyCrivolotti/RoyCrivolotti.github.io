document.addEventListener('DOMContentLoaded', () => {
	// Disable the context menu for the nav menu --> it annoyed me on mobile...
	[...document.querySelectorAll('nav ul li a')].forEach(el => {
		el.addEventListener('contextmenu', event => event.preventDefault(), false);
	});

	const list = document.querySelector('nav ul');

	const main = document.querySelector('main');

	const indexes = [...document.querySelectorAll('nav ul li')];

	const first = () => list.classList.toggle('hide');
	const second = () => main.classList.toggle('navactive');
	let hiddenFlag = true;

	// Toggle the fade in/out
	function togglenav() {
		new Promise((resolve, reject) => {
			first();
			resolve(true);
		})
			.then(() => second());

		hiddenFlag = !hiddenFlag;

		document.querySelector('#topbar').classList.toggle('navactive');
		document.querySelector('#topbar h1').classList.toggle('navactive');

		if (!hiddenFlag) document.querySelector('#topbar img').src = 'images/black-menu.svg';
		else document.querySelector('#topbar img').src = 'images/white-menu.svg';
	}

	document.querySelector('#topbar img').addEventListener('click', togglenav);
	indexes.forEach(index => index.addEventListener('click', togglenav));
}, false);
