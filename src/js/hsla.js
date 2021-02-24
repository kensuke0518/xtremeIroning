'use strict';

/**
 * hslと色相の考え方
 * https://qiita.com/clockmaker/items/66cd8c88dade24c3fb8f
 * https://www.colorzilla.com/gradient-editor/
 * https://cssgradient.io/
 */

export const hslaFunction = () => {
    const header = document.querySelector('#header');
    let num = 64;
    const hsl = () => `linear-gradient(135deg, hsla(${num},100%,75%,1) 0%,hsla(${num + 164} ,83%,70%,1) 50%,hsla(${num + 239},40%,47%,1) 100%)`;
    
    //スクロールで変化
    addEventListener('scroll', e => {
        num += Math.floor(scrollY % 10);
        header.style.backgroundImage = hsl();
    });
    //時間で変化
    const timeColor = () => {
        requestAnimationFrame(timeColor);
        num += .3;
        header.style.backgroundImage = hsl();
    }
    timeColor();
}

