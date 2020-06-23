import morseLetters from './dictionary.js'

// Handle english input
document.querySelector('#to-morse-button').addEventListener('click', () => {
    let textInput = document.querySelector('#text-box').value.toUpperCase();
    translateToMorse(textInput);
})

const translateToMorse = (input) => {
    let morseSentence = '';
    for (let i = 0; i < input.length; i++) {
        if (input[i] === " ") morseSentence += `${morseLetters[" "]}`;
        else if (input[i] in morseLetters) {morseSentence += `${morseLetters[input[i]]}\xa0`}
        else {morseSentence += input[i]};
    }
    document.querySelector('#return-morse').innerHTML = morseSentence;
}

// Handle morse input
document.querySelector('#to-text-button').addEventListener('click', () => {
    let morseInput = document.querySelector('#morse-box').value;
    splitToWords(morseInput);
})

const splitToWords = (sentence) => {
    let newSentence = sentence.split('  ');
    console.log(newSentence)
    splitToLetters(newSentence);
}

const splitToLetters = (array) => {
    let letters = array.map((element) => {
        return element.split(' ');
    })
    morseToEnglish(letters);
}

const morseToEnglish = (sentence) => {
    let output = '';
    for (let i = 0; i < sentence.length; i++) {
        output += ' ';
        for (let j = 0; j < sentence[i].length; j++) {
            output += getLetterFromMorse(morseLetters, sentence[i][j]);
        }
    }
    document.querySelector('#return-text').innerHTML = output;
}

const getLetterFromMorse = (object, value) => {
    if (Object.values(morseLetters).indexOf(value) > -1) {
        return Object.keys(morseLetters).find(key => morseLetters[key] === value);
    } else return value || ' ';
}