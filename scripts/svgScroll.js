document.addEventListener('DOMContentLoaded', () => {
    let svgPaths = document.querySelectorAll('#wrapper svg path');

    document.addEventListener('scroll', () => {
        let element = document.getElementById('wrapper');
        if (isInViewPort(element)) svgPaths.forEach(path => path.classList.add('animationName'));
    });

    let isInViewPort = element => {
        let bounding = element.getBoundingClientRect();
        return bounding.top >= 0 &&
            bounding.left >= 0 &&
            bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            bounding.right <= (window.innerWidth || document.documentElement.clientWidth);
    }
});