window.addEventListener('resize', myChangeBackgroundColor);
window.addEventListener("load", (event) => {
    myChangeBackgroundColor()
});

function myChangeBackgroundColor(){
    if (window.matchMedia("(min-width: 1337px)").matches) {
        console.log("resolution1");
        document.getElementById("htmlId").style.backgroundColor="#ffb703";
      }else if(window.matchMedia('screen and (min-width: 505px) and (max-width: 1336px').matches){
        console.log("resolution2");
        document.getElementById("htmlId").style.backgroundColor="#d90429";
      } else {
        console.log("resolution3");
        document.getElementById("htmlId").style.backgroundColor="#003049";
      }
}