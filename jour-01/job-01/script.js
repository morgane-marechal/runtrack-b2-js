
// let alphabet={
//     "a" : "A",
//     "b" : "B",
//     "c" : "C",
//     "d" : "D", "e" : "E", "f" : "F", "g" : "G", "h" : "H", "i" : "I", "j" : "J", "k" : "K", "l" : "L", "m" : "M", "n" : "N", "o" :"O", "p" : "P", "q" : "Q", "r" : "R", "s" : "S", "t" : "T", "u" : "U", "v" : "V", "w" : "W", "y" : "Y", "z" : "Z"};

// let keys = Object.keys(alphabet);
// let values = Object.values(alphabet);
//     console.log(alphabet[0]);
//     console.log("keys "+keys[0]);
//     console.log("values "+values[0]);

let alphabet = "abcdefghijklmnopqrstuvwxyz";
let Alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let newString="";

    function myUpperCase(string){
        let number_letter=0;
    
        for (const letter in string) {
            number_letter++;
        }
    
        
        for (let i = 0; i < number_letter; i++) {
            if((string[i]===".")||(string[i]===" ")||(string[i]==="!")||(string[i]==="?")){
                newString+=string[i];
            }else{
                for (let j = 0; j < 26; j++) {
                    /*
                 if(string[i]===keys[j]){
                    console.log(string[i]+values[j]);
                     string[i]=values[j];
                 }else{
                    string[i]=string[i];
                 }
                 */
    
                    if (string[i]===alphabet[j]){
                       newString+=Alphabet[j];
                    }else if(string[i]===Alphabet[j]){
                        newString+=string[i];
                    }
                }
            }            
        }
    
        return newString;
    
    }
    
    let upperCase = myUpperCase("Bonjour les Gent.es");
    console.log(upperCase);