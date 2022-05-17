
//genrates a random number from 1 to 6
const firstDiceNum=Math.floor(Math.random()*6)+1

//it gets the img of the dice which firstDiceNum genrates a number
const firstDiceimg='assets/dice'+firstDiceNum + '.png';

document.querySelectorAll
('img')[0].setAttribute('src',firstDiceimg);

const SecondDiceNum=Math.floor(Math.random()*6)+1

//it gets the img of the dice which firstDiceNum genrates a number
const SecondDiceimg='assets/dice'+SecondDiceNum + '.png';

document.querySelectorAll
('img')[1].setAttribute('src',SecondDiceimg);

//Logic for the winner

if(firstDiceNum>SecondDiceNum){
    document.querySelector('h1').innerHTML='The Winner is User 1';
}
else if(firstDiceNum<SecondDiceNum){
    document.querySelector('h1').innerHTML='The Winner is User 2';
}
else{
    document.querySelector('h1').innerHTML="It's a Draw";
}

// function to reload the page
function reloadPg(){
    document.location.reload();
}