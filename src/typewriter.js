/* eslint-disable max-len */

const text = [
	'<h3>Node.js, Javascript, C# .NET, Java, MySQL, HTML & CSS </h3>',
	'<p>I\'m a Software Engineer at SOUTHWORKS</p>',
	'<p>In the last project I worked with C# and a dev environment set up locally in a VM</p>',
	'<p>Now I\'m focusing more on Node, React, Azure VMs and Docker, both in my job and my free time</p>',
	'<br><h3>What else keeps me busy?</h3>',
	'<p>I\'m starting my BS in Computer Science at the University of Buenos Aires</p>',
	'<p>I\'m a mentor in an <a href="https://www.coursera.org/learn/object-oriented-java" target="_blank">OOP course offered on Coursera </a></p>',
	'<p>I\'m always looking to learn new things</p>',
	'<p><em>By the way</em>...this website was done with HTML, CSS and vanilla Javascript...no frameworks</p>',
	'<p>Although I did use Webpack to minify the code</p>',
];

const speed = 10; // time delay of print out
let index = 0; // start printing array at this posision
let arrLength = text[0].length; // the length of the text array
const scrollAt = 20; // start scrolling up at this many lines
let textPos = 0; // initialise text position
let contents = ''; // initialise contents variable
let row; // initialise current row

function typewriter() {
	contents = ' ';
	row = Math.max(0, index - scrollAt);
	const destination = document.getElementById('animated_intro');

	while (row < index) {
		contents += text[row++];
	}

	destination.innerHTML = `${contents + text[index].substring(0, textPos)}_`;
	if (textPos++ === arrLength) {
		textPos = 0;
		index++;
		if (index !== text.length) {
			arrLength = text[index].length;
			setTimeout(typewriter, 500);
		}
	} else {
		setTimeout(typewriter, speed);
	}
}


document.addEventListener('DOMContentLoaded', () => {
	typewriter();
}, false);
