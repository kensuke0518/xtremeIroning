var API_KEY = 'AIzaSyD8ETI4HMaR5X1YvR2BMkPTgHjePpL9uHs';
//var url = 'https://www.googleapis.com/youtube/v3/videos?id=bHQqvYy5KYo&part=snippet,contentDetails,statistics,status&key=' + API_KEY;

//ヒカキンの動画を検索する
//const url = 'https://www.googleapis.com/youtube/v3/search?type=video&part=snippet&q=HIKAKIN&key=' + API_KEY;

//はなおでんがんの登録者数を取得する
const url = 'https://www.googleapis.com/youtube/v3/channels?part=snippet,statistics&id=UCPyNsNSTUtywkekbDdCA_8Q&key=' + API_KEY;


fetch(url)
    .then(res => res.json())
    .then(json => {
        const root = document.querySelector('#root');
        const p = document.createElement('p');
        const jsonStr = JSON.stringify(json, null, ' ');
        const oneJson = json['items'][0]['statistics']['subscriberCount'];
        console.log(jsonStr);
        p.innerHTML = oneJson;
        root.appendChild(p);
    });