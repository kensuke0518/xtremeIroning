'use strict';

export const scrollsectionFunction = () => {
    const secHeight = () => {
        const sec = document.querySelectorAll('[data-scrlsec]');
        sec.forEach(data => {
            data.style.minHeight = window.innerHeight + 'px';
        });
    }
    const options = {
        root: null,
        rootMargin: '10% 0px',
        threshold: 0
    }
    const intersect = elms => {
        elms.forEach(elm => {
            if (elm.isIntersecting) {
                window.scroll({ top: elm.target.offsetTop, behavior: 'smooth' });
            }
        })
    }
    const observer = new IntersectionObserver(intersect, options);
    const boxes = document.querySelectorAll('[data-scrlsec]');
    boxes.forEach(box => {
        observer.observe(box); //引数boxと関数intersectのコールバック引数elmsは同じもの
    })

    window.addEventListener('load', secHeight);
    window.addEventListener('resize', secHeight);
}