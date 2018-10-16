document.addEventListener('DOMContentLoaded', () => {
    let container = document.getElementById('iconBlock');
    let rightArr = document.getElementById('rightArr');
    let leftArr = document.getElementById('leftArr');

    rightArr.addEventListener('click', () => container.scrollLeft += 500);
    leftArr.addEventListener('click', () => container.scrollLeft -= 500);

}, false);