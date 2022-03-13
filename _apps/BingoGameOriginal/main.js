//ビンゴの縦横サイズ
const COLUMN_LENGTH = 4;
const ROW_LENGTH = 4;
//ビンゴで使う数字の個数
const MAX_NUMBER = 16;
//ビンゴで使う数字の配列
const targetNumber = [1,6,20,21,"無限",87,1610,61,44,47,25,5,9,8,3,1404]

let outer = document.getElementById('outer');

for(let i = 1; i <= COLUMN_LENGTH * ROW_LENGTH; i++){
  let divSquare = document.createElement('div');
  divSquare.classList.add('square');
  
  let div = document.createElement('div');
  divSquare.onclick = () => divSquare.classList.toggle('orange');
  let targetIndex = Math.floor(Math.random() * targetNumber.length) ;     
  div.textContent = targetNumber[targetIndex];
  targetNumber.splice(targetIndex, 1);
  divSquare.appendChild(div)
  outer.appendChild(divSquare);
}