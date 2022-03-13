const MAX_NUMBER = 16;
// divの取得
let main = document.getElementById('main');
let video = document.getElementById('video-area');
let img = document.getElementById('problem-area');
let pv = document.getElementById('problem-v-area');

// コンテンツの生成
let video_content = document.createElement('video');
let problem_content = document.createElement('img');
let problem_video = document.createElement('video');

let st_button = document.getElementById('start_button');
let an_button = document.getElementById('answer_button');
let hi_button = document.getElementById('history_button');
let history = document.getElementById('history');

let historyArray = [];
const targetNumber = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16]
const answerNumber = [61,9,1610,8,3,25,44,47,5,1404,87,6,1,20,21,"無限"]

const video_visibility_show = video.style.visibility;
const img_visibility_show = img.style.visibility;
const pv_visibility_show = pv.style.visibility;
const history_visibility_show = history.style.visibility;

// video 設定
video_content.width = 700;
video_content.controls = true;

// pv 設定
problem_video.width = 700;
problem_video.controls = true;


// img 設定
problem_content.width = 650;

let i = 0;
an_button.onclick = () => {
  i +=1;
  if (i % 3 === 2) {
    an_button.textContent = '答え';
    img.style.visibility = "hidden";
    video.style.visibility = "hidden";
    pv.style.visibility = pv_visibility_show;   
  } else if (i % 3 === 1) {
    an_button.textContent = '動画';
    video.style.visibility = "hidden";
    pv.style.visibility = "hidden";
    img.style.visibility = img_visibility_show;
  } else {
    an_button.textContent = '答え';
    img.style.visibility = "hidden";
    pv.style.visibility = "hidden";
    video.style.visibility = video_visibility_show;
  }
  console.log(i)
}

let j = 0;
history.style.visibility = "hidden";
hi_button.onclick = () => {
  j +=1;
  if (j % 2 === 1) {
    hi_button.textContent = '非表示';
    history.style.visibility = history_visibility_show;
  } else {
    hi_button.textContent = '表示';
    history.style.visibility = "hidden";
  }
  console.log(j)
}

let timerId;

st_button.onclick = () => {
  if(targetNumber.length === 0){
    alert('すべての番号の発表が終わりました') ;
    clearInterval(timerId);
    return;
  }
  
  if (st_button.textContent === 'スタート'){
    st_button.textContent = 'ストップ';
    pv.style.visibility = 'hidden';
    video.style.visibility = 'hidden';
    img.style.visibility = 'hidden';

    timerId = setInterval( () => {
      let targetIndex = Math.floor(Math.random() * targetNumber.length);  
      main.textContent = targetNumber[targetIndex];
    }, 100)
  } else {
    st_button.textContent = 'スタート';
    img.style.visibility = img_visibility_show;
    clearInterval(timerId);
    // targetIndexを取得
    let targetIndex = targetNumber.indexOf(Number(main.textContent));
    
    console.log(targetNumber[targetIndex]);
    // ソースの指定
    problem_content.src = `./problem_img/${targetNumber[targetIndex]}.png`;
    video_content.src = `./answer_video/${targetNumber[targetIndex]}.mp4`;
    problem_video.src = `./problem_img/${targetNumber[targetIndex]}.mp4`;
    
    // divに要素を追加
    img.appendChild(problem_content);
    video.appendChild(video_content);
    pv.appendChild(problem_video);
    
    targetNumber.splice(targetIndex, 1);

    historyArray.push(answerNumber[(main.textContent)-1]);
    history.textContent = historyArray;
 
  }
}