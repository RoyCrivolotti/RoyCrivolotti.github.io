document.addEventListener('DOMContentLoaded', () => {
    // Disable the context menu for the nav menu --> it annoyed me on mobile...
    [...document.querySelectorAll('nav ul li a')].forEach(el => {
        el.addEventListener('contextmenu', event => event.preventDefault(), false);
    });

    const list = document.querySelector('nav ul'),
        main = document.querySelector('main'),
        indexes = [...document.querySelectorAll('nav ul li')];

    let first = () => list.classList.toggle('hide');
    let second = () => main.classList.toggle('navactive');
    let hidden_flag = true;

    // Toggle the fade in/out
    function togglenav() {
        new Promise((resolve, reject) => {
                first();
                resolve(true);
            })
            .then(() => second());

        hidden_flag = !hidden_flag;

        document.querySelector('#topbar').classList.toggle('navactive');
        document.querySelector('#topbar h1').classList.toggle('navactive');

        if (!hidden_flag) document.querySelector('#topbar img').src = 'images/black-menu.svg'
        else document.querySelector('#topbar img').src = 'images/white-menu.svg';
    }

    document.querySelector('#topbar img').addEventListener('click', togglenav);
    indexes.forEach(index => index.addEventListener('click', togglenav));
}, false);