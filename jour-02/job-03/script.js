    let inputText = document.getElementById("input-text");
    const displaySpace=document.getElementById("text-displayer");
    const displayBoldButton=document.getElementById("turn-text-bold");
    const displayItalicButton=document.getElementById("turn-text-italic");
    const clearTextButton=document.getElementById("clear-text");

    const myDisplayText=()=>{
        inputText.addEventListener("input", (event) => {
            let text=inputText.value;
            console.log(text);
            displaySpace.textContent = inputText.value;
        });
    }

    function myTurnBold(){
        displaySpace.style.fontWeight = "900";
    }

    function myTurnItalic(){
        displaySpace.style.fontStyle = "italic";
    }

    function clearText(){
        displaySpace.style.fontStyle = "normal";
        displaySpace.style.fontWeight = "400";

    }




    myDisplayText();

    displayBoldButton.addEventListener("click", (event) => {
        myTurnBold();
    });

    displayItalicButton.addEventListener("click", (event) => {
        myTurnItalic();
    });

    clearTextButton.addEventListener("click", (event) => {
        clearText();
    });







