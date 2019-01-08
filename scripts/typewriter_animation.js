    // each element in the array is to be printed in a new line
    var text = new Array(
        '<h3>Java, Javascript (vanilla), Node, MySQL, HTML & CSS </h3> <br>',
        '<p>Si bien probé frameworks de frontend como Bootstrap 4 y Bulma, hasta el momento programé mayoritariamente sin frameworks</p>',
        '<br><h3>¿En qué estoy ahora?</h3><br>',
        '<p>Terminando el primer año de la UBA y la carrera intensiva de desarrollo web full stack de Acámica</p>',
        '<p>Soy mentor en un <a href="https://www.coursera.org/learn/object-oriented-java" target="_blank">curso de OOP en Coursera </a></p>',
        '<p>Apoyo mis estudios de ECMAScript 6 con los <a href="https://wesbos.com/courses/" target="_blank">cursos de Wes Bos</a>, con los cuales estoy por empezar a estudiar React y a profundizar lo que se de Node</p>',
        '<p>En Java me interesa aprender Spring, pero por el momento mi experiencia es implementar algoritmos y estructuras de datos avanzadas</p>');

    var speed = 10; // time delay of print out
    var index = 0; // start printing array at this posision
    var arrLength = text[0].length; // the length of the text array
    var scrollAt = 20; // start scrolling up at this many lines
    var textPos = 0; // initialise text position
    var contents = ''; // initialise contents variable
    var row; // initialise current row

    function typewriter() {
        contents = ' ';
        row = Math.max(0, index - scrollAt);
        var destination = document.getElementById('animated_intro');

        while (row < index) {
            contents += text[row++];
        }

        destination.innerHTML = contents + text[index].substring(0, textPos) + '_';
        if (textPos++ == arrLength) {
            textPos = 0;
            index++;
            if (index != text.length) {
                arrLength = text[index].length;
                setTimeout('typewriter()', 500);
            }
        } else {
            setTimeout('typewriter()', speed);
        }
    }


    document.addEventListener('DOMContentLoaded', () => {
        typewriter();
    }, false);