// var randomNumber1 = Math.floor(Math.random() * 6) + 1;

// const player1 = document.querySelector('.img1');
// const player2 = document.querySelector('.img2');

// let player1Dice = randomDice(player1);
// let player2Dice = randomDice(player2);

// console.log(player1Dice);
// console.log(player2Dice);

// function randomDice(element) {
// 	var randomNumber1 = Math.floor(Math.random() * 6) + 1;
// 	element.src = 'images/dice' + randomNumber1 + '.png';
// }

let player1Dice = randomDice();
let player2Dice = randomDice();

function randomDice() {
	var randomNumber1 = Math.floor(Math.random() * 6) + 1;
	return randomNumber1;
}

// This Function doesn't work!!
function updateScreen(playerDiceNumber, img) {
	document.querySelector(img);
	element.src = 'images/dice' + playerDiceNumber + '.png';
}
updateScreen(player1Dice, '.img1');

console.log(player1Dice);
console.log(player2Dice);
