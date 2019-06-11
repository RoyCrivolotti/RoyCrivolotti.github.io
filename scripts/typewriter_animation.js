// each element in the array is to be printed in a new line
const text = [
	'<h3>Java, C# .NET, Javascript (vanilla), Node, MySQL, HTML & CSS </h3> <br>',
	'<p>Estoy disfrutando de mi primera experiencia laboral como desarrollador en Globant, aprendiendo C#.NET</p>',
	'<br><h3>¿Qué más me mantiene ocupado ahora?</h3><br>',
	'<p>Terminé el primer año de la UBA y la carrera intensiva de desarrollo web full stack de Acámica</p>',
	'<p>Soy mentor en un <a href="https://www.coursera.org/learn/object-oriented-java" target="_blank">curso de OOP en Coursera </a></p>',
	'<p>Los últimos temas me llamaron la atención fueron Docker y Azure Functions</p>',
	'<p>Siempre estoy interesado en aprender tecnologías nuevas y pulir lo que ya se</p>',
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
	if (textPos++ == arrLength) {
		textPos = 0;
		index++;
		if (index != text.length) {
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
