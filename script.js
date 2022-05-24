'use strict';


function displayMessage(message) {
    document.querySelector('.message').textContent = message;
}


function displayNumber(num) {
    document.querySelector('.number').textContent = num;
}


function backgroundColor(color) {
    document.querySelector('body').style.backgroundColor = color;
}


function secretNumber() {
    const random = Math.trunc(Math.random() * 20 + 1);
    return random
}


function displayScore(score) {
    document.querySelector('.score').textContent = score;
}


let ranNum = secretNumber();
let score = 20;
let highscore = 0;

document.querySelector('.check').addEventListener('click', function () {
    const guess = Number(document.querySelector('.guess').value);

    if (ranNum === guess) {
        displayMessage('Currect Number!');
        displayNumber(ranNum);

        backgroundColor('#60b347');
        document.querySelector('.number').style.width = '30rem';
        if (score > highscore) {
            highscore = score;
            document.querySelector('.highscore').textContent = highscore;
        }

    } else if (!guess) {
        displayMessage('No number!');

    } else {
        if (score > 1) {
            displayMessage(guess < ranNum ? 'Too Low!' : 'Too High!');

            score--;
            displayScore(score);
        } else {
            displayMessage('You loose the game');
            displayScore(0);
        }

    }

});


document.querySelector('.again').addEventListener('click', function () {
    displayScore(20);
    score = 20;
    ranNum = secretNumber();
    displayMessage('Start guessing...');
    displayNumber('?');
    document.querySelector('.guess').value = '';

    backgroundColor('#222');
    document.querySelector('.number').style.width = '15rem';

});