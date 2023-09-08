export default class Board {

    constructor(grid, hasWinner) {
        this.grid=grid;
        this.hasWinner=hasWinner;
    }

    initializeBoard(){
        this.hasWinner=false;

        document.getElementById("btn-0-0").innerHTML="-";
        document.getElementById("btn-0-1").innerHTML="-";
        document.getElementById("btn-0-2").innerHTML="-";
        document.getElementById("btn-1-0").innerHTML="-";
        document.getElementById("btn-1-1").innerHTML="-";
        document.getElementById("btn-1-2").innerHTML="-";
        document.getElementById("btn-2-0").innerHTML="-";
        document.getElementById("btn-2-1").innerHTML="-";
        document.getElementById("btn-2-2").innerHTML="-";

    }

    displayBoard(){
        document.getElementById("board").innerHTML=
        "<div class='row'><button id='btn-0-0'></button><button id='btn-0-1'></button><button id='btn-0-2'></button></div> <div class='row'><button id='btn-1-0'></button><button id='btn-1-1'></button><button id='btn-1-2'></button></div> <div class='row'><button id='btn-2-0'></button><button id='btn-2-1'></button><button id='btn-2-2'></button><div>"
    }

    placeMove(id, symbol){
        document.getElementById(id).innerHTML=symbol;

    }

}