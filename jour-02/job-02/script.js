let buttonIncrement=document.getElementById("add-count-displayer");
let displayScore=document.getElementById("count-displayer");
let score=0;

function newScore(){
    displayScore.innerHTML=score;
}

function myAddCount(){
    score+=1;
    newScore();
}

buttonIncrement.addEventListener('click',myAddCount)



