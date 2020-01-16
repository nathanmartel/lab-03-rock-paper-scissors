export default checkResult;

// Returns 'win' || 'lose' || 'draw'
function checkResult(player, computer) {
    if (player === computer) return 'draw';
    if (player === 'rock') {
        if (computer === 'scissors') { return 'win'; }
        else return 'loss';
    }
    if (player === 'paper') {
        if (computer === 'rock') { return 'win'; }
        else return 'loss';
    }
    if (player === 'scissors') {
        if (computer === 'paper') { return 'win'; }
        else return 'loss';
    }
}