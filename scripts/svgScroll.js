document.addEventListener('DOMContentLoaded', () => {
    let svgPaths = document.querySelectorAll('svg path');

    document.addEventListener('scroll', () => {
        let bounding = document.getElementById('wrapper').getBoundingClientRect();
        if (bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight)) {
            for (var path of svgPaths) {
                path.classList.add('animationName');
            }
        }
    });
});