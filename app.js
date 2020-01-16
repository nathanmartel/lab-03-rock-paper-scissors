// Imports
import checkResult from './checkResult.js';
import getRandomThrow from './get-random-throw.js';

// Get DOM
const playButton = document.getElementById('play-button');
const resetButton = document.getElementById('reset-button');
let userThrow = document.querySelector('input:checked');
const computerThrowText = document.getElementById('computer-throw-text');
const totalWins = document.getElementById('total-results-wins');
const totalLosses = document.getElementById('total-results-losses');
const totalDraws = document.getElementById('total-results-draws');

// Initialize State
let wins = 0;
let losses = 0;
let draws = 0;
// DRY this up
totalWins.textContent = wins;
totalLosses.textContent = losses;
totalDraws.textContent = draws;

