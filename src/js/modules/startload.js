'use strict';
/**
 * サイトを開くとローディングが開始される。
 */
export const startloadFunction = () => {
    const loader = document.querySelector('[data-loader="loader"]');
    addEventListener('load', e => {
        const loadFn = () => {
            loader.classList.add('is-out');
            loader.classList.remove('is-show');
        }
        setTimeout(loadFn, 2000);
    });
}