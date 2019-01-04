document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('.box').addEventListener('click', toggleOpen);
    document.querySelectorAll('.superheros img').forEach(img => img.addEventListener('click', loadSuperHero));

    function toggleOpen() {
        let first = 'display',
            second = 'opening',
            third = 'open';

        if (this.classList.contains(first))[first, third] = [third, first];

        this.classList.toggle(first);

        new Promise((resolve, reject) => {
            setTimeout(() => {
                this.classList.toggle(second)
                resolve(true);
            }, 500);
        }).then(result => setTimeout(() => this.classList.toggle(third), 500));
    }

    function loadSuperHero() {
        const superheros = {
            'batman': 'I\'m<br><br>Batman',
            'flash': 'The<br><br>Flash',
            'wonder': 'Wonder<br><br><span style="margin-left: 60px";>Woman</span>',
        };

        Object.keys(superheros).map(e => document.querySelector('.box').classList.remove(e));
        document.querySelector('.box').classList.toggle(this.id);

        document.querySelector('.box h2').innerHTML = superheros[this.id];
    }
});