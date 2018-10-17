    // each element in the array is to be printed in a new line

    var text = new Array(
        '<h3>Java, Javascript, Node, MySQL, HTML & CSS </h3> <br>',
        'Principalmente vainilla',
        'Experimenté un poco con frameworks frontend, como Bootstrap 4 y Bulma',
        '<br><h3>¿En qué estoy ahora ?</h3><br>',
        'Terminando el año de la UBA y la carrera intensiva de desarrollo web full stack de Acámica',
        'Soy mentor en un <a href="https://www.coursera.org/learn/object-oriented-java" target="_blank">curso de OOP en Coursera </a>',
        'Apoyo mis estudios de ECMAScript 6 con los <a href="https://es6.io/" target="_blank">cursos de Wes Bos </a>',
        'Estoy por empezar React y React Native',
        'En Java me interesa aprender Spring, pero por el momento mi experiencia es implementar algoritmos y estructuras de datos avanzadas en Java vainilla');

    var speed = 5; // time delay of print out
    var index = 0; // start printing array at this posision
    var arrLength = text[0].length; // the length of the text array
    var scrollAt = 20; // start scrolling up at this many lines
    var textPos = 0; // initialise text position
    var contents = ''; // initialise contents variable
    var row; // initialise current row

    function typewriter() {
        contents = ' ';
        row = Math.max(0, index - scrollAt);
        var destination = document.getElementById('introductionText');

        while (row < index) {
            contents += text[row++] + '<br />';
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