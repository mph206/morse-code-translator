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

// Click button to capture text input
document.querySelector('#to-morse-button').addEventListener('click', () => {
    let textInput = document.querySelector('#text-box').value.toUpperCase();
    translateToMorse(textInput);
})

// Convert text to morse
const translateToMorse = (input) => {
    let morseSentence = '';
    for (let i = 0; i < input.length; i++) {
        if (input[i] === " ") morseSentence += `${morseLetters[" "]}`;
        else if (input[i] in morseLetters) {morseSentence += `${morseLetters[input[i]]}\xa0`}
        else {morseSentence += input[i]};
    }
    document.querySelector('#return-morse').innerHTML = morseSentence;
}

// Click button to capture morse input
document.querySelector('#to-text-button').addEventListener('click', () => {
    let morseInput = document.querySelector('#morse-box').value;
    splitToLetters(morseInput);
})

// Expect a space between letters, and more than one space between words 
const splitToLetters = (input) => {
    return input.split(' ');
}


// Convert morse to English
const translateToText = (input) => {
    


    
    document.querySelector('#return-text').innerHTML = textSentence;
}


// TODO: wrap text