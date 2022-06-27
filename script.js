'use strict';

let number = Math.trunc(Math.random()*20)+1;
let score= 20;
let highScore=0;

document.querySelector('.check').addEventListener('click', function(){
const guess=Number(document.querySelector('.guess').value);
console.log(guess, typeof guess);

if (!guess) {
  document.querySelector('.message').textContent ='❌ No Number';
}else if(guess === number){
   document.querySelector('.message').textContent ='💃🏼 Correct Number';
   document.querySelector('.number').textContent=number;

   document.querySelector('body').style.backgroundColor='green';
   document.querySelector('.number').style.width='30rem';

   if(score>highScore){
    highScore=score;
    document.querySelector('.highscore').textContent=highScore;
   }

   
}else if(guess > number){
  if(score>0){
  document.querySelector('.message').textContent ='this is too high';
  score--;
  document.querySelector('.score').textContent= score; 
}else{
  document.querySelector('.message').textContent ='You Loose';
}
}else if(guess < number){
  if(score>0){
  document.querySelector('.message').textContent ='this is too low';
  score--;
  document.querySelector('.score').textContent= score;
  }else{
  document.querySelector('.message').textContent ='You Loose';}}
});

document.querySelector('.again').addEventListener('click',function(){
  score = 20
  number = Math.trunc(Math.random()*20)+1;
  document.querySelector('.message').textContent ='Start guessing...';
  document.querySelector('.score').textContent=score;
  document.querySelector('.number').textContent='?';
  document.querySelector('.guess').textContent='';
  document.querySelector('body').style.backgroundColor='black';
  document.querySelector('.number').style.width='15rem';
  document.querySelector('.guess').textContent='';
});

