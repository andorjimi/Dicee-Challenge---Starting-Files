let player1Dice = randomDice();
let player2Dice = randomDice();

function randomDice() {
	var randomNumber1 = Math.floor(Math.random() * 6) + 1;
	return randomNumber1;
}

let player1 = (document.querySelector('.img1').src = 'images/dice' + player1Dice + '.png');
let player2 = (document.querySelector('.img2').src = 'images/dice' + player2Dice + '.png');

if (player1Dice === player2Dice) {
	document.getElementById('header').innerHTML = 'Draw';
} else if (player1Dice > player2Dice) {
	document.getElementById('header').innerHTML = '🚩 P1 Winner';
} else {
	document.getElementById('header').innerHTML = 'P2 Winner 🚩';
}
