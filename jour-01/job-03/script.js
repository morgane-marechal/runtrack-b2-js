function myIsInString(haystack, needle){
    numberLetter=0;
    needleSize=0
    for (const letter in haystack) {
        numberLetter++;
    }

    for (const letter in needle) {
        needleSize++;
    }

    
    for (let i = 0; i < numberLetter; i++) {

        if(haystack[i]===needle[0]){

            //console.log(haystack[0]);
            
            for(let j=0; j < needleSize; j++){
                n=i+j;
                console.log(haystack[n]);
                
                if(needle[needleSize]=haystack[n]){
                    return true;
                }else if(needle[j]===haystack[n]){
                    console.log(haystack[n]);
                }else if(needle[j]!=haystack[n]){
                    break;
                }
            }
        }

        
    }

    return false;
}

test1=myIsInString("hello", "i");
console.log(test1);

test2=myIsInString("i cat in a tree", "cat");
console.log(test2);

 test3=myIsInString("no one know where is nono", "know");
 console.log(test3);

 test4=myIsInString("no one know where is nono", " know");
 console.log(test4);

 test5=myIsInString("no one know where is nono", "wnaow");
 console.log(test5);