  const prompt = require("prompt-sync")();

let word1 = prompt('Enter a word: ');
let word2 = prompt('Enter another word: ');

let word1count = 0;
let word2count = 0;

for (let i = 0; i < word1.length; i++) {
    word1count++;
}

for (let j = 0; j < word2.length; j++) {
    word2count++;
}

console.log('Your first word contains ' + word1count + ' letters.'+ '\n' + 'Your second word contains ' + word2count + ' letters.');

let samelettercount = 0;

for (let k = 0; k < word1.length; k++) {
    let letter1 = word1[k];

    for (let l = 0; l < word2.length; l++) {
        let letter2 = word2[l];
        if (letter1 == letter2) {
            samelettercount++;
        }
    }
}

console.log('Your words contain ' + samelettercount + ' same letters.');
