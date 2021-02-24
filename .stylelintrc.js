module.exports = {
    plugins: [
        "stylelint-order",
    ],
    extends: [
        'stylelint-config-recommended',
        'stylelint-config-recommended-scss',
    ],
    rules: {
        'color-hex-case': 'lower',
        'color-hex-length': 'short',
        "order/properties-alphabetical-order": true
    },
}

//stylelintに関する設定
/**
 * プラグインに「stylelint-order」を用いている
 * https://github.com/hudochenkov/stylelint-order
 */
/**
 * cssのプロパティの順序に関すること
 * https://www.aizulab.com/blog/order-of-css-properties/
 * https://www.i-ryo.com/entry/2020/02/25/073942
 */
