let codedString = '';
const lowers = "abcdefghijklmnopqrstuvwxyz";
const uppers = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const punctuation = ['.',',','!',' '];

function upperLower (charcArray, index, shift){
    if ((index + shift) > 25){
        codedString += charcArray.charAt((index + shift) - 26)
    }else if((index + shift) < 0){
        codedString += charcArray.charAt(index + shift + 26);
    }else{
        codedString += charcArray.charAt(index + shift)
    }
}

const caesar = function(aString, shift) {
    if ((shift > 26) || (shift < -26)){
        shift = shift % 26;
    }
    codedString = '';
    for(i = 0; i < aString.length; i++){
        let letter = aString.charAt(i);
        if (punctuation.includes(letter)){
            codedString += letter;
        }else if(/[a-z]/.test(letter)){
            let index = lowers.indexOf(letter);
            upperLower(lowers, index, shift)
        }else if(/[A-Z]/.test(letter)){
            let index = uppers.indexOf(letter);
            upperLower(uppers, index, shift)
        }
    }
    return codedString;
}

module.exports = caesar
