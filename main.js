import dictionary from './dictionary.js'

// Handle english input
document.querySelector('#text-box').addEventListener('input', () => {
    let textInput = '';
    textInput += document.querySelector('#text-box').value.toUpperCase();
    translateToMorse(textInput);
})

const translateToMorse = (input) => {
    let morseSentence = '';
    for (let i = 0; i < input.length; i++) {
        if (input[i] === " ") morseSentence += `${dictionary[" "]}`;
        else if (input[i] in dictionary) {morseSentence += `${dictionary[input[i]]}\xa0`}
        else {morseSentence += input[i]};
    }
    document.querySelector('#return-morse').innerHTML = morseSentence;
}

// Handle morse input
document.querySelector('#morse-box').addEventListener('input', () => {
    let morseInput = '';
    morseInput += document.querySelector('#morse-box').value;
    splitToWords(morseInput);
})

const splitToWords = (sentence) => {
    let newSentence = sentence.split('  ');
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
            output += getLetterFromMorse(dictionary, sentence[i][j]);
        }
    }
    document.querySelector('#return-text').innerHTML = output;
}

const getLetterFromMorse = (object, value) => {
    if (value === '/') {
        return ' '
    }
    else if (Object.values(dictionary).indexOf(value) > -1) {
        return Object.keys(dictionary).find(key => dictionary[key] === value);
    } else return value || ' ';
}