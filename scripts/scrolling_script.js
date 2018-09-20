document.body.addEventListener('wheel', scrollOnce);

function scrollOnce(event) {
    var tags = ['HEADER', 'SECTION', 'FOOTER'];

    if (tags.includes(event.target.nodeName)) {
        var next = event.target.nextElementSibling,
            prev = event.target.previousElementSibling;
    } else {
        var next = event.target.closest(tags).nextElementSibling,
            prev = event.target.closest(tags).previousElementSibling;
    }

    if (event.deltaY < 0) { // Wheel scrolled up
        if (prev == null) return;
        event.preventDefault; // Block native scroll:
        if (tags.includes(prev.nodeName)) {
            // Use a nice smooth scroll:
            scrollIt(
                prev, // Use the stored .previousElementSibling as target.
                80, // Animation duration
                'easeInOutQuad' // Easing
            );
            // Toggle class for nice transitions
            event.target.closest(tags).classList.remove('show');
            prev.classList.add('show');
        }
    } else if (event.deltaY > 0) { // Wheel scrolled down
        if (next == null) return;
        event.preventDefault;
        if (tags.includes(next.nodeName)) {
            scrollIt(
                next,
                80,
                'easeInOutQuad'
            );
            event.target.closest(tags).classList.remove('show');
            next.classList.add('show');
        }
    } else return false;
}

/*
Pawel Grzybek's scrollIt() function (all credits to this awesome person for this nice and smooth functionality): https://codepen.io/pawelgrzybek/pen/ZeomJB?editors=1010
*/
function scrollIt(destination, duration = 200, easing = 'linear', callback) {

    const easings = {
        linear(t) {
            return t;
        },
        easeInQuad(t) {
            return t * t;
        },
        easeOutQuad(t) {
            return t * (2 - t);
        },
        easeInOutQuad(t) {
            return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
        },
        easeInCubic(t) {
            return t * t * t;
        },
        easeOutCubic(t) {
            return (--t) * t * t + 1;
        },
        easeInOutCubic(t) {
            return t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;
        },
        easeInQuart(t) {
            return t * t * t * t;
        },
        easeOutQuart(t) {
            return 1 - (--t) * t * t * t;
        },
        easeInOutQuart(t) {
            return t < 0.5 ? 8 * t * t * t * t : 1 - 8 * (--t) * t * t * t;
        },
        easeInQuint(t) {
            return t * t * t * t * t;
        },
        easeOutQuint(t) {
            return 1 + (--t) * t * t * t * t;
        },
        easeInOutQuint(t) {
            return t < 0.5 ? 16 * t * t * t * t * t : 1 + 16 * (--t) * t * t * t * t;
        }
    };

    const start = window.pageYOffset;
    const startTime = 'now' in window.performance ? performance.now() : new Date().getTime();

    const documentHeight = Math.max(document.body.scrollHeight, document.body.offsetHeight, document.documentElement.clientHeight, document.documentElement.scrollHeight, document.documentElement.offsetHeight);
    const windowHeight = window.innerHeight || document.documentElement.clientHeight || document.getElementsByTagName('body')[0].clientHeight;
    const destinationOffset = typeof destination === 'number' ? destination : destination.offsetTop;
    const destinationOffsetToScroll = Math.round(documentHeight - destinationOffset < windowHeight ? documentHeight - windowHeight : destinationOffset);

    if ('requestAnimationFrame' in window === false) {
        window.scroll(0, destinationOffsetToScroll);
        if (callback) {
            callback();
        }
        return;
    }

    function scroll() {
        const now = 'now' in window.performance ? performance.now() : new Date().getTime();
        const time = Math.min(1, ((now - startTime) / duration));
        const timeFunction = easings[easing](time);
        window.scroll(0, Math.ceil(timeFunction * (destinationOffsetToScroll - start)) + start);

        // Stop requesting animation when window reached its destination
        // And run a callback function
        if (window.pageYOffset === destinationOffsetToScroll) {
            if (callback) {
                callback();
            }
            return;
        }

        requestAnimationFrame(scroll);
    }

    scroll();
}