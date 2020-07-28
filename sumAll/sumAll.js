const sumAll = function(startValue, endValue) {
    let finalSum = 0;
    if (startValue < 0 || endValue <0){
        finalSum = 'ERROR';
    }else if ((typeof startValue != "number")|| (typeof endValue != "number")){
        finalSum = 'ERROR';
    }else if (startValue > endValue){
        let newStartValue = endValue;
        let newEndValue = startValue;
        for (i = newStartValue; i <= newEndValue; i++){
            finalSum += i;
        }
    }else{
        for (i = startValue; i <= endValue; i++){
            finalSum += i;
        }
    }
    return finalSum;
}

module.exports = sumAll
