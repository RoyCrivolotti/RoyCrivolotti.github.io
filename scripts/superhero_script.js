/* eslint-disable */

document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('.box').addEventListener('click', toggleOpen);
    document.querySelectorAll('.superheros img').forEach(img => img.addEventListener('click', loadSuperHero));

    function toggleOpen() {
        let first = 'display';
        const second = 'opening';
        let third = 'open';

        const element = this.querySelector('#clickMe');

        if (this.classList.contains(first))[first, third] = [third, first];
        else {
            element.classList.toggle('hide');
            setTimeout(() => { element.style.display = 'none'; }, 450);
        }

        this.classList.toggle(first);

        new Promise((resolve, reject) => {
                setTimeout(() => {
                    this.classList.toggle(second);
                    resolve(true);
                }, 500);
            }).then(result => setTimeout(() => this.classList.toggle(third), 500))
            .then(result => {
                if (!this.classList.contains(first)) {
                    element.style.display = 'inline';
                    setTimeout(() => {
                        element.classList.toggle('hide');
                    }, 500);
                }
            });
    }

    function loadSuperHero() {
        const superheros = {
            batman: 'I\'m<br><br>Batman',
            flash: 'The<br><br>Flash',
            wonder: 'Wonder<br><br><span style="margin-left: 60px";>Woman</span>',
        };

        const box = document.querySelector('#hero-wrapper .box');

        new Promise((resolve, reject) => {
                setTimeout(() => {
                    box.classList.toggle('hide');
                    resolve(true);
                });
            })
            .then(result => {
                setTimeout(() => {
                    box.querySelector('h2').innerHTML = superheros[this.id];

                    Object.keys(superheros).map(e => document.querySelector('.box').classList.remove(e));

                    box.classList.toggle('hide');
                    box.classList.toggle(this.id);
                }, 580)
            });
    }
});