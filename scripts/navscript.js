document.addEventListener('DOMContentLoaded', () => {

    // Disable the context menu for the nav menu --> it annoyed me on mobile...
    [...document.querySelectorAll('nav ul li a')].forEach(el => {
        el.addEventListener('contextmenu', event => event.preventDefault(), false);
    });

    const list = document.querySelector('nav ul'),
        main = document.querySelector('main'),
        indexes = [...document.querySelectorAll('nav ul li')];

    let first = () => list.classList.toggle('hide');
    let second = () => setTimeout(() => {
        main.classList.toggle('navactive');
    }, 50);


    // Toggle the fade in/out – I also use a display: none on the unordered list, which I toggle here in order with a promise, just in case, as a double check to make sure it's not showing the list when it's supposed to be opaque/hidden
    function togglenav() {
        new Promise((resolve, reject) => {
                first();
                resolve(true);
            })
            .then(() => second());
    }

    document.querySelector('#topbar img').addEventListener('click', togglenav);
    indexes.forEach(index => index.addEventListener('click', togglenav));
}, false);