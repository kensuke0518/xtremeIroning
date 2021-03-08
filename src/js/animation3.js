const logo = document.getElementById('logo');

function eee() {
    // timelineデフォルトのパラメーターを設定
    let timeline = anime.timeline({
        targets: '.el',
        direction: 'normal',
        loop: false
    })
    // 線画部分のアニメーションを設定
    timeline.add({
        strokeDashoffset: [anime.setDashoffset, 0],
        easing: 'easeInOutSine',
        fill: ['transparent', 'transparent'], // 塗りつぶしを透明のままにする
        duration: 3000,
        delay: function (el, i) { return i * 150 }
    })
    // 塗りつぶしのアニメーションを設定
    /*timeline.add({
        easing: 'easeInOutSine',
        fill: ['transparent', '#000000'],
        duration: 500
    }, '-=200')*/ // ひとつ前のアニメーションが終わる200ミリ秒前に開始する
};
eee();