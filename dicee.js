// This is the working code for the dice game.
// I just need to make this work with the HTML

let player1Dice = Math.floor(Math.random() * 6) + 1;
let player2Dice = Math.floor(Math.random() * 6) + 1;

console.log(player1Dice);
console.log(player2Dice);

if (player1Dice === player2Dice) {
	console.log('Draw');
} else if (player1Dice > player2Dice) {
	console.log('P1 Winner');
} else {
	console.log('P2 Winner');
}
