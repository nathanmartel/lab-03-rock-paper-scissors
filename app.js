// Imports
import checkResult from './check-result.js';
import getRandomThrow from './get-random-throw.js';

// Get DOM
const playButton = document.getElementById('play-button');
const resetButton = document.getElementById('reset-button');
let userThrow = document.querySelector('input:checked');
const computerThrowText = document.getElementById('computer-throw-text');
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
    const computerThrow = getRandomThrow();
    // console.log('Computer throw: ', computerThrow);
    // console.log('User throw: ', userThrow.value);
    computerThrowText.textContent = computerThrow;
    const result = checkResult(userThrow.value, computerThrow);
    if (result === 'win') { 
        wins++;
        totalWins.textContent = wins;
    } else if (result === 'lose') { 
        losses++;
        totalLosses.textContent = losses;
    } else {
        draws++;
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
    computerThrowText.textContent = '—';
}



// Run onLoad 
initializeGame();