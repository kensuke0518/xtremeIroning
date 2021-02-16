'use strict';

//ダークモード切り替え
/**
 * https://developer.mozilla.org/ja/docs/Web/API/MediaQueryList
 * mediaQueryListを取得
 */
export const darkFunction = () => {
    const darkCheck = document.querySelector('[data-dark="dark"]');
    const darkOn = () => {
        document.body.classList.remove('light-mode');
        document.body.classList.add('dark-mode');
        darkCheck.checked = true;
    };
    const darkOff = () => {
        document.body.classList.remove('dark-mode');
        document.body.classList.add('light-mode');
        darkCheck.checked = false;
    };

    //ダークモード自動切り替え
    const darkMode = matchMedia('(prefers-color-scheme:dark)').matches;
    darkMode ? darkOn() : darkOff();

    //ダークモード手動切り替え
    darkCheck.addEventListener('change', () => darkCheck.checked ? darkOn() : darkOff());
}