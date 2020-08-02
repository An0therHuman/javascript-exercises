const palindromes = function(aString) {
    aString = aString.toLowerCase();
    let text = aString.split("");
    const punctuation = ['.',',','!',' '];
    let initalString = ''
    for (i = 0; i < text.length; i++){
        if (!punctuation.includes(text[i])){
            initalString += text[i];
        };
    }

    let finalString = "";
    for (i = initalString.length-1; i >= 0; i--){
        finalString += initalString[i];
    }
    return initalString == finalString;
}

module.exports = palindromes
