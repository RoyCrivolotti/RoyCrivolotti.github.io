/* eslint-disable */

document.addEventListener('DOMContentLoaded', () => {
    let previousOpenHero = document.querySelector('#hero-wrapper .superheros #batman');
    let isEventAlreadyOn = false;

    document.querySelector('.box').addEventListener('click', toggleOpen);
    document.querySelectorAll('.superheros img').forEach(img => img.addEventListener('click', loadSuperHero));

    function toggleOpen(event) {
        event.preventDefault();
        event.stopPropagation();

        if (isEventAlreadyOn) return;
        else isEventAlreadyOn = true;

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

                return true;
            })
            .then(() => isEventAlreadyOn = false);
    }

    function loadSuperHero(event) {
        event.preventDefault();
        event.stopPropagation();

        if (isEventAlreadyOn) return;
        else isEventAlreadyOn = true;

        const superheros = {
            batman: 'I\'m<br><br>Batman',
            flash: 'The<br><br>Flash',
            wonder: 'Wonder<br><br><span style="margin-left: 60px";>Woman</span>',
        };

        if (previousOpenHero === this) {
            isEventAlreadyOn = false;
            document.querySelector('.box').click();
            return;
        }
        else previousOpenHero = this;

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
                }, 580);


                return true;
            })
            .then(() => isEventAlreadyOn = false);
    }
});