const reverseString = function(aString) {
    let reversedString = '';
    let modifiedString = aString;
    for (i = 0; i < aString.length; i++){
        reversedString += modifiedString.slice(modifiedString.length-1);
        modifiedString = modifiedString.slice(0,modifiedString.length-1);
    }
    return reversedString;
}

module.exports = reverseString
