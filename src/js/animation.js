'use strict';

/*anime({
    targets: '.rect',
    translateX: 800,
    rotate: 360,
    duration: 3000,
    loop: true,
});*/

/*anime({
    targets: '.rect',
    translateX: [
        { value: 250, duration: 1000, delay: 500 },
        { value: 0, duration: 1000, delay: 500 }
    ],
    translateY: [
        { value: -40, duration: 500 },
        { value: 40, duration: 500, delay: 1000 },
        { value: 0, duration: 500, delay: 1000 }
    ],
    scaleX: [
        { value: 4, duration: 100, delay: 500, easing: 'easeOutExpo' },
        { value: 1, duration: 900 },
        { value: 4, duration: 100, delay: 500, easing: 'easeOutExpo' },
        { value: 1, duration: 900 }
    ],
    scaleY: [
        { value: [1.75, 1], duration: 500 },
        { value: 2, duration: 50, delay: 1000, easing: 'easeOutExpo' },
        { value: 1, duration: 450 },
        { value: 1.75, duration: 50, delay: 1000, easing: 'easeOutExpo' },
        { value: 1, duration: 450 }
    ],
    easing: 'easeOutElastic(1, .8)',
    loop: true
});*/

/*const moveXBall = document.getElementById('rect').animate([
    //{ 'transform': 'translate(0vw)', 'offset': 0, easing: 'ease-in-out' },
    //{ 'transform': 'translate(40vw)', 'offset': 0.2, easing: 'ease-out' },
    //{ 'transform': 'translate(35vw)', 'offset': 0.6, easing: 'ease-in' },
    { 'transform': 'translate(100vw)', 'offset': 1, easing: 'ease-in-out' }
], {
    duration: 3000,
    easing: 'ease',
}
);
moveXBall.play();*/

var tl = anime.timeline({
    easing: 'easeOutExpo',
    duration: 750,
    loop:true,
});

// Add children
tl
    .add({
        targets: '.rect.square',
        translateX: 250,
    })
    .add({
        targets: '.rect.circle',
        translateX: 250,
    })
    .add({
        targets: '.rect.triangle',
        translateX: 250,
    });