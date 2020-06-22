const morseLetters = {
    A : '.-',
    B : '-...',
    C : '-.-.',
    D : '-..',
    E : '.',
    F : '..-.',
    G : '--.',
    H : '....',
    I : '..',
    J : '.---',
    K : '-.-',
    L : '.-..',
    M : '--',
    N : '-.',
    O : '---',
    P : '.--.',
    Q : '--.-',
    R : '.-.',
    S : '...',
    T : '-',
    U : '..-',
    V : '...-',
    W : '.--',
    X : '-..-',
    Y : '-.--',
    Z : '--..',
    1: '.----',
    2: '..---',
    3: '...--',
    4: '....-',
    5: '.....',
    6: '-....',
    7: '--...',
    8: '---..',
    9: '----.',
    0: '-----',
    " " : '\xa0\xa0'
}

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
    splitToLetters(morseInput);
})

const splitToLetters = (sentence) => {
    let newSentence = sentence.split(' ');
    console.log(newSentence)
    morseToEnglish(newSentence);
}

const morseToEnglish = (sentence) => {
    let output = sentence.map(value => {
        return getLetterFromMorse(morseLetters, value);
    })
    document.querySelector('#return-text').innerHTML = output.join('');
}

const getLetterFromMorse = (object, value) => {
    // if (property in morseLetters) Object.keys(morseLetters).find(key => morseLetters[key] === value);
    // else return value;
    return Object.keys(morseLetters).find(key => morseLetters[key] === value);
}