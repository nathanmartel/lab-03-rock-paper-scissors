export default getRandomThrow;

// Returns 'rock' || 'paper' || 'scissors'
function getRandomThrow() {
    const randomThrow = Math.floor(Math.random() * 3);
    if (randomThrow === 0) return 'rock';
    if (randomThrow === 1) return 'paper';
    if (randomThrow === 2) return 'scissors';
}

