'use strict';
/**
 * APIについて
 * https://developers.google.com/youtube/v3/docs?hl=ja
 */

/**
 * Githubの環境変数を利用してAPIキーを隠したい
 * https://qiita.com/sayama0402/items/f019cac4bcb7d420505a
 * https://qiita.com/inouet/items/c7d39ac4641c05eec4a0
 * https://knowledge.sakura.ad.jp/23478/
 * https://qiita.com/HeRo/items/e2d5e3bc3dbe810f0482
 * https://rcmdnk.com/blog/2020/04/23/computer-git-github/
 * .env関係
 * https://h-piiice16.hatenablog.com/entry/2018/09/08/131055
 * https://qiita.com/HorikawaTokiya/items/c1a476ceeab0bf644311
 */

//require('dotenv').config();
//const { MY_API_KEY } = process.env;
const API_KEY = process.env.MY_API_KEY;
//console.log(API_KEY);

//ヒカキンの動画を検索する
//const url = 'https://www.googleapis.com/youtube/v3/search?type=video&part=snippet&q=HIKAKIN&key=' + API_KEY;

//はなおでんがんの登録者数を取得する
//const url = 'https://www.googleapis.com/youtube/v3/channels?part=snippet,statistics&id=UCPyNsNSTUtywkekbDdCA_8Q&key=' + API_KEY;

//急上昇の動画を50件取得する
//const url = 'https://www.googleapis.com/youtube/v3/videos?part=snippet,statistics&maxResults=50&chart=mostPopular&regionCode=JP&key=' + API_KEY;
const url = 'http://kwordpress.php.xdomain.jp/youtubedata/ranking/test.json';

export const youtubeAPIFunction = () => {
    fetch(url, {
        mode: 'cors'
    })
        .then(res => res.json())
        .then(json => {
            const youtube_api = document.querySelector('#youtube_api');
            const jsonStr = JSON.stringify(json, null, ' ');
            //console.log(jsonStr);

            class YoutubeBox {
                constructor(id, snippet, statistics) {
                    this.id = id;
                    this.title = snippet.title;
                    this.thumb = snippet.thumbnails;
                    this.channnelTitle = snippet.channelTitle;
                    this.url = 'https://www.youtube.com/watch?v=';
                }
                doCreate() {
                    const elmArr = ['p', 'a', 'img'];
                    const arr = [];
                    elmArr.forEach((cv, i) => {
                        arr.push(document.createElement(elmArr[i]));
                    });
                    return arr;
                }
                idMethod() {
                    const [p, a] = [...this.doCreate()];
                    a.setAttribute('href', this.url + this.id);
                    a.innerHTML = this.title;
                    p.appendChild(a);
                    return p;
                }
                idThumb() {
                    const [p, a, img] = [...this.doCreate()];
                    img.setAttribute('src', this.thumb.high.url);
                    a.appendChild(img);
                    a.setAttribute('href', this.url + this.id);
                    p.appendChild(a);
                    return p;
                }
                idWrap(arrs) {
                    const div = document.createElement('div');
                    arrs.forEach(arr => div.appendChild(arr));
                    return div;
                }
            }

            for (let i in json){
                const items = json[i];
                const sec = document.createElement('section');
                sec.style.display = 'flex';
                for (let item in items) {
                //for (let item = 0; item < items.length;item++){
                    const data = ['id', 'snippet', 'statistics'];
                    const dataArr = [];
                    //for (d of data) {
                    data.forEach(d => {
                        dataArr.push(items[item][d]);
                    });
                    const youtubeBox = new YoutubeBox(...dataArr);
                    const wrapItem = [
                        youtubeBox.idMethod(),
                        youtubeBox.idThumb()
                    ]
                    sec.appendChild(youtubeBox.idWrap(wrapItem));
                }
                youtube_api.appendChild(sec);
            }
        });
}