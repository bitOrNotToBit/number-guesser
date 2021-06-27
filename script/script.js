let round = 1;
let userScore = 0;
let computerScore = 0;
let guess_flag = false;

let decreaseNumberBtn = document.getElementById('decrease_number');
let increaseNumberBtn = document.getElementById('increase_number');
let guessBtn = document.getElementById('guess_btn');
let nextRoundBtn = document.getElementById('next_round');

decreaseNumberBtn.addEventListener('click', decreaseUserNumber);
increaseNumberBtn.addEventListener('click', increaseUserNumber);
guessBtn.addEventListener('click',playGame);
nextRoundBtn.addEventListener('click',nextRound);

function decreaseUserNumber(){
    let userGuess = document.getElementById('user_guess');
    if(parseInt(userGuess.textContent, 10)<=0){
        alert('Number can be only between 0 to 9');
        return;
    }
    userGuess.textContent = parseInt(userGuess.textContent, 10) - 1;
}

function increaseUserNumber(){
    let userGuess = document.getElementById('user_guess');
    if(parseInt(userGuess.textContent, 10)>=9){
        alert('Number can be only between 0 to 9');
        return;
    }
    userGuess.textContent = parseInt(userGuess.textContent, 10) + 1;
}

function getTargetNumber(){
    return Math.floor(Math.random()*10);
}

function getComputerGuess(){
    return Math.floor(Math.random()*10);
}

function compareNumbers(computerGuess, userGuess, targetNumber){
    let userDiff = Math.abs(targetNumber - userGuess);
    let computerDiff = Math.abs(targetNumber - computerGuess);
    console.log(userDiff, computerDiff);
    return (userDiff <= computerDiff)?true:false;
}

function renderGuesses(target, computerNumber){
    let targetNumber = document.getElementById('target_number');
    let computerGuess = document.getElementById('computer_guess');
    targetNumber.textContent = target;
    computerGuess.textContent = computerNumber;
}

function playGame(){
    if(!guess_flag){
        guess_flag = true;
    }
    else{
        alert('Go to next round!');
        return;
    }
    let targetNumber = getTargetNumber();
    let computerNumber = getComputerGuess();
    renderGuesses(targetNumber, computerNumber);
    let userNumber = document.getElementById('user_guess');
    userNumber = parseInt(userNumber.textContent,10);
    let result = compareNumbers(computerNumber, userNumber, targetNumber);
    let msg = document.getElementById('msg');
    console.log(result);
    if(result){
        userScore += 1;
        msg.textContent = 'User Won!';
    }
    else{
        computerScore += 1;
        msg.textContent = 'Computer Won!';
    }

    let userScoreElement = document.getElementById('user_score');
    let computerScoreElement= document.getElementById('computer_score');
    userScoreElement.textContent = userScore;
    computerScoreElement.textContent = computerScore;
}

function nextRound(){
    
    if(!guess_flag){
        alert('Finish this round first!');
        return;
    }
    round += 1;
    let roundNumber = document.getElementById('round_number');
    roundNumber.textContent = round;

    let msg = document.getElementById('msg');
    msg.textContent = 'Good Luck!';

    let targetNumber = document.getElementById('target_number');
    let computerGuess = document.getElementById('computer_guess');
    let userNumber = document.getElementById('user_guess');
    targetNumber.textContent = '-';
    computerGuess.textContent = '-';
    userNumber.textContent = 0;

    guess_flag = false;

}