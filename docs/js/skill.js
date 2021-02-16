'use strict';

/**
 * スキルセットのグラフをアニメーション化
 */
export const skillFunction = () => {
    const datas = document.querySelectorAll('[data-skill]');
    for (const data of datas) {
        const val = data.getAttribute('data-skillval');
        let i = 0;
        const ccc = setInterval(() => {
            data.style.width = `${i}%`;
            data.innerHTML = `${i}%`;
            i < val ? i++ : clearInterval(ccc);
        },20);
    }
}