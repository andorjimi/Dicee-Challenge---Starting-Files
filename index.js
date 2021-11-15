var randomNumber1 = Math.floor(Math.random() * 6) + 1;

// console.log(randomNumber1);

const player1 = document.querySelector(".img1");
const player2 = document.querySelector(".img2");

randomDice(player1);
randomDice(player2);

function randomDice(element) {
    var randomNumber1 = Math.floor(Math.random() * 6) + 1;
    element.src = "images/dice" + randomNumber1 + ".png";
};