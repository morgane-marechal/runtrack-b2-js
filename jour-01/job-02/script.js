function myCountChar(haystack, needle){
    numberLetter=0;
    numberNeedle=0;
    for (const letter in haystack) {
        numberLetter++;
    }
    //console.log(numberLetter);

    for (let i = 0; i < numberLetter; i++) {
        if(haystack[i]===needle){
            numberNeedle++;
        }
    }
    return numberNeedle;
}

test1=myCountChar("hello", "a");
console.log(test1);

test2=myCountChar("a cat in a tree", "a");
console.log(test2);

test3=myCountChar("no one know where is nono", "n");
console.log(test3);