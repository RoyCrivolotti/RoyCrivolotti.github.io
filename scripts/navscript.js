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


    // Toggle the fade in/out – I also use a display: none on the unordered list, which I toggle here in order with a promise, just in case, as a double check to make sure it's not showing the list when it's supposed to be opaque/hidden
    function togglenav() {
        new Promise((resolve, reject) => {
                first();
                resolve(true);
            })
            .then(() => second());
    }

    function topbarColor(e) {
        const topbar = document.querySelector('#topbar');
        let bounding = document.getElementById('prog-languages').getBoundingClientRect();

        if (bounding.top <= 30) {
            topbar.querySelector('img').src = '/images/black-menu.svg';
            topbar.querySelector('h1').style.color = 'black';
        } else {
            topbar.querySelector('h1').style.color = 'white';
            topbar.querySelector('img').src = '/images/white-menu.svg';
        }
    }

    document.querySelector('#topbar img').addEventListener('click', togglenav);
    indexes.forEach(index => index.addEventListener('click', togglenav));
    document.addEventListener('scroll', topbarColor);
}, false);