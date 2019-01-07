document.addEventListener('DOMContentLoaded', () => {

    const list = document.querySelector('nav ul'),
        main = document.querySelector('main'),
        indexes = [...document.querySelectorAll('nav ul li')];

    console.log(indexes);

    let first = () => list.classList.toggle('hide');
    let second = () => setTimeout(() => {
        main.classList.toggle('navactive');
    }, 50);

    function togglenav(event) {
        new Promise((resolve, reject) => {
                first();
                resolve(true);
            })
            .then(() => second());
    }

    document.querySelector('#topbar img').addEventListener('click', togglenav);
}, false);