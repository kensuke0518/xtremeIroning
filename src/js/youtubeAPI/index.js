/**
 * APIキーを隠したい
 * https://qiita.com/oblivion/items/8cb30923648b6226b961
 */
/*
require('dotenv').config();
const { MY_API_KEY } = process.env;

const API_KEY = MY_API_KEY;
*/
const API_KEY = 'AIzaSyD8ETI4HMaR5X1YvR2BMkPTgHjePpL9uHs';
//var url = 'https://www.googleapis.com/youtube/v3/videos?id=bHQqvYy5KYo&part=snippet,contentDetails,statistics,status&key=' + API_KEY;

//ヒカキンの動画を検索する
//const url = 'https://www.googleapis.com/youtube/v3/search?type=video&part=snippet&q=HIKAKIN&key=' + API_KEY;

//はなおでんがんの登録者数を取得する
//const url = 'https://www.googleapis.com/youtube/v3/channels?part=snippet,statistics&id=UCPyNsNSTUtywkekbDdCA_8Q&key=' + API_KEY;

//急上昇の動画を50件取得する
const url = 'https://www.googleapis.com/youtube/v3/videos?part=snippet,statistics&maxResults=50&chart=mostPopular&regionCode=JP&key=' + API_KEY;

    fetch(url)
        .then(res => res.json())
        .then(json => {
            const root = document.querySelector('#root');
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

            const items = json['items'];
            for (item in items) {
                const data = ['id', 'snippet', 'statistics'];
                const dataArr = [];
                for (d of data) {
                    dataArr.push(items[item][d]);
                }
                const youtubeBox = new YoutubeBox(...dataArr);
                const wrapItem = [
                    youtubeBox.idMethod(),
                    youtubeBox.idThumb()
                ]
                root.appendChild(youtubeBox.idWrap(wrapItem))
            }
        });