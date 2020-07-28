const repeatString = function(aString, numTimes) {
    let repeatedString = '';
    if (numTimes < 0){
        repeatedString = 'ERROR';
    }else{
        for(i = 0; i < numTimes; i++){
            repeatedString += aString;
        }
    }
    return repeatedString;
}

module.exports = repeatString
