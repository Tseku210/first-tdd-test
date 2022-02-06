const alph = 'abcdefghijklmnopqrstuvwxyz';

export function caesarCipher(str, shift) {

    let newStr = '';

    for(let i = 0; i < str.length; i++) {
        if (str[i] === ' ') {
            newStr += str[i]
        } else if (isPunctuation(str[i])) {
            newStr += str[i]
        } else {
            const index = alph.indexOf(str[i].toLowerCase())
            let shifted = alph[(index + shift) % alph.length];
            if (isUpperCase(str[i])) shifted = shifted.toUpperCase();
            newStr += shifted; 
        }
    }
    return newStr;
}

function isUpperCase(letter) {
    return letter === letter.toUpperCase() ? true : false;
}

function isPunctuation(letter) {
    return !!letter.match(/[,.?!:]/)
}