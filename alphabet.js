'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.trim().split('\n').map(string => {
        return string.trim();
    });
    
    main();    
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the vowelsAndConsonants function.
 * Print your output using 'console.log()'.
 */
function isVowel(char) {
    return char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u' || false;
}
function isConsonant(char) { 
    return char === 'b' || char === 'c' || char === 'd' || char === 'f' || char === 'h' || char === 'j' || char === 'k' || char === 'l' || char === 'm' || char === 'n' || char === 'p' || char === 'q' || char === 'r' || char === 's' || char === 't' || char === 'v' || char === 'w' || char === 'x' || char === 'y' || char === 'z' || false;
}
function vowelsAndConsonants(s) {
    for (var i = 0; i <= s.length;i++) { 
        if (isVowel(s.charAt(i))) {
            console.log(s.charAt(i));
        }
    }
    for (var j = 0; j <= s.length; j++) { 
        if (isConsonant(s.charAt(j))){
                    console.log(s.charAt(j));
                
            
        }
    }
}


