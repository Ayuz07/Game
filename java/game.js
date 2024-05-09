let score=JSON.parse(localStorage.getItem('score_sheet'))||
{
    win:0,
    loss:0,
    tie:0
}
function pick_computer_move(){
    const randomMove=Math.random()
    let computer_move='';
    if (randomMove>=0 && randomMove< 1/3){
        let result='';
        computer_move='paper';
    }
    else if(randomMove>=1/3 && randomMove <2/3){
        computer_move='rock';
    }
    else if(randomMove>=2/3 && randomMove<1){
        computer_move='scissors';
    }
    console.log(computer_move);
    return computer_move;
};

function play(player_move){
const computer_move=pick_computer_move();
let result=" ";
if (player_move==='paper'){
    if (computer_move==='rock'){
        result="You Win";
        console.log(result);
    }
    else if(computer_move==='paper'){
        result='Tie';
        console.log(result);
    }
    else if(computer_move==='scissors'){
        result="You Loss";
        console.log(result);
    }
}



if (player_move==='rock'){
    if (computer_move==='scissors'){
        result="You Win";
        console.log(result);;
    }
    else if(computer_move==='rock'){
        result='Tie';
        console.log(result);
    }
    else if(computer_move==='paper'){
        result=" You Loss";
        console.log(result);
    }
}


if (player_move==='scissors'){
    if (computer_move==='paper'){
        result=" You Win";
        console.log(result);;
    }
    else if(computer_move==='scissors'){
        result='Tie';
        console.log(result);
    }
    else if(computer_move==='rock'){
        result="You Loss";
        console.log(result);
    }
}


if(result===' You Win'){
    score.win++;
}
else if(result===' You Loss'){
    score.loss++;
}
else if (result==='Tie'){
    score.tie++;
};
document.querySelector('.choosed').innerHTML=`You:<img src="images/${player_move}.png">   Computer:<img src="images/${computer_move}.png">`;
;
document.querySelector('.score_para').innerHTML=`Win:${score.win}  Loss:${score.loss} Tie:${score.tie}`;
localStorage.setItem("score_sheet",JSON.stringify(score));
document.querySelector('.result').innerHTML=`${result}`;
};

function Reset(){
    score={
        win:0,
        loss:0,
        tie:0
    };
    document.querySelector('.score_para').innerHTML=`Win:${score.win} Loss:${score.loss} Tie:${score.tie}`;
};