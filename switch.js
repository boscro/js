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

function getLetter(s) {
    let letter;
    // Write your code here
    var setA = "aeiou";
    if (setA.includes(s[0])) {
        letter="A";
    }
    var setB = "bcdfg";
    if (setB.includes(s[0])) {
        letter="B";
    }
    var setC = "hjklm";
    if (setC.includes(s[0])) {
        letter = "C";
    }
    var setD = "npqrstvwxyz";
    if (setD.includes(s[0])) {
        letter = "D";
    }
    return letter;
}


function main() {
    const s = readLine();
    
    console.log(getLetter(s));
}
