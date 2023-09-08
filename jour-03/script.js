import Player from './class/Player.js';
import Board from './class/Board.js';

console.log(Player);
console.log(Board);

let Milena = new Player("X", true);
console.log(Milena);

let newGame = new Board("grid", false);
newGame.displayBoard();
newGame.initializeBoard();

const buttons = document.getElementsByTagName("button");

const buttonPressed = e => {
  console.log(e.target.id);  
  let numbId=e.target.id
  newGame.placeMove(numbId, "X");
}

for (let button of buttons) {
  button.addEventListener("click", buttonPressed);
}