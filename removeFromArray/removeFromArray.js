const removeFromArray = function(aArray, ...valueToRemove) {
    for (i = 0; i < aArray.length; i++){
        for (k = 0; k < valueToRemove.length; k++){
            if (aArray[i] === valueToRemove[k]){
                // console.log(aArray[i], valueToRemove[k]);
                aArray.splice(i,1);
                i = 0;
            }else{
                // console.log('Else statement', aArray[i], valueToRemove[k]);
                continue;
            }
        }
    }
    return aArray;
}

module.exports = removeFromArray
