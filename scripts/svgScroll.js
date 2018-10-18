document.addEventListener('DOMContentLoaded', () => {
    let svgPaths = document.querySelectorAll('#wrapper svg path');
    console.log(svgPaths);

    document.addEventListener('scroll', () => {
        let bounding = document.getElementById('wrapper').getBoundingClientRect();
        if (bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight)) {
            for (var path of svgPaths) {
                path.classList.add('animationName');
            }
        }
    });
});