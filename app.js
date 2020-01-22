// Imports
import checkResult from './check-result.js';
import getRandomThrow from './get-random-throw.js';

// Get DOM
const playButton = document.getElementById('play-button');
const resetButton = document.getElementById('reset-button');
const computerThrowText = document.getElementById('computer-throw-text');
const computerThrowImage = document.getElementById('computer-throw-image');
const totalWins = document.getElementById('total-results-wins');
const totalLosses = document.getElementById('total-results-losses');
const totalDraws = document.getElementById('total-results-draws');



// Initialize Global vars
let wins;
let losses;
let draws;

// Set Event Handlers
playButton.addEventListener('click', playGame);
resetButton.addEventListener('click', initializeGame);



// Change state and Update DOM
function playGame() {
    let userThrow = document.querySelector('input:checked');
    const computerThrow = getRandomThrow();
    console.log('Computer throw: ', computerThrow);
    console.log('User throw: ', userThrow.value);
    computerThrowText.textContent = computerThrow;
    if (computerThrow === 'rock') { 
        computerThrowImage.src = './images/rock.png';
    } else if (computerThrow === 'paper') { 
        computerThrowImage.src = './images/paper.png';
    } else {
        computerThrowImage.src = './images/scissors.png';
    }
    
    const result = checkResult(userThrow.value, computerThrow);
    //console.log(computerThrow);
    //console.log(userThrow)
    totalWins.style.color = 'white';
    totalLosses.style.color = 'white';
    totalDraws.style.color = 'white';

    if (result === 'win') { 
        wins++;
        totalWins.style.color = 'green';
        totalWins.textContent = wins;
    } else if (result === 'lose') { 
        losses++;
        totalLosses.style.color = 'red'; 
        totalLosses.textContent = losses;
    } else {
        draws++;
        totalDraws.style.color = 'grey';
        totalDraws.textContent = draws;
    }
}

// Initialize state
function initializeGame() {
    // forLater: DRY this up
    wins = 0;
    losses = 0;
    draws = 0;
    totalWins.textContent = wins;
    totalLosses.textContent = losses;
    totalDraws.textContent = draws;
    totalWins.style.color = 'white';
    totalLosses.style.color = 'white';
    totalDraws.style.color = 'white';
    computerThrowText.textContent = '—';
    computerThrowImage.src = './images/mario-blocks.png';
}



// Run onLoad 
initializeGame();