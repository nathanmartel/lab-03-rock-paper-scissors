// Returns 'win' || 'lose' || 'draw'
export default function checkResult(player, computer) {
    if (player === computer) return 'draw';
    if (player === 'rock') {
        if (computer === 'scissors') { return 'win'; }
        else return 'lose';
    }
    if (player === 'paper') {
        if (computer === 'rock') { return 'win'; }
        else return 'lose';
    }
    if (player === 'scissors') {
        if (computer === 'paper') { return 'win'; }
        else return 'lose';
    }
}