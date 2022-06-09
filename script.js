'use strict';

const winingScore = 100;
let playerOneScore = 0;
let playerTwoScore = 0;
let isPlayerOneActive = true;
let diceNumber = 0;

resetContent();

// Hold button Action

document.querySelector('.btn--hold').addEventListener('click', function() {
    console.log("Hold button tapped")
    showPlayerOneActiveted(isPlayerOneActive)
    isPlayerOneActive = isPlayerOneActive ? false : true
})

document.querySelector('.btn--roll').addEventListener('click', function() {
    console.log("Roll dice button clicked")
    generateDiceNumber()
    checkScoreForActivePlayer()
})

document.querySelector('.btn--new').addEventListener('click', function() {
    resetContent()
})

function resetContent() {
    playerOneScore = 0;
    playerTwoScore = 0;
    diceNumber = 0;
    isPlayerOneActive = true;
    updateScoreForPlayerOne();
    updateScoreForPlayerTwo();
    showPlayerOneActiveted();
}

function showPlayerOneActiveted(isPlayerOneActive) {
    let playerOneContainer = document.querySelector('.player--0');
    let playerTwoContainer = document.querySelector('.player--1');

    if (isPlayerOneActive) {
        playerOneContainer.classList.remove('player--active');
        playerTwoContainer.classList.add('player--active');
    } else {
        playerOneContainer.classList.add('player--active');
        playerTwoContainer.classList.remove('player--active');
    }
}

function generateDiceNumber() {
    diceNumber = Math.floor(Math.random() * 6) + 1
    let diceImageName = `dice-${diceNumber}.png`
    let diceImage = document.querySelector('.dice')
    diceImage.src = diceImageName
}

function checkScoreForActivePlayer() {
    if (isPlayerOneActive) {
        if (diceNumber == 1) {
            diceNumber = 0;
            playerOneScore = 0
        } else {
            playerOneScore += diceNumber
        }
        updateScoreForPlayerOne()
    } else {
        if (diceNumber == 1) {
            diceNumber = 0;
            playerTwoScore = 0
        } else {
            playerTwoScore += diceNumber
        }
        updateScoreForPlayerTwo()
    }
    checkIfPlayerWins()
}

function checkIfPlayerWins() {
    if (isPlayerOneActive && (playerOneScore >= 100)) {
        window.alert("Player 1 wins the game")      
    } else if (playerTwoScore >= 100) {
        window.alert("Player 2 wins the game")      
    }
}

function updateScoreForPlayerOne() {
    document.querySelector("#current--0").textContent = diceNumber
    document.querySelector("#score--0").textContent = playerOneScore
}

function updateScoreForPlayerTwo() {
    document.querySelector("#current--1").textContent = diceNumber
    document.querySelector("#score--1").textContent = playerTwoScore
}



