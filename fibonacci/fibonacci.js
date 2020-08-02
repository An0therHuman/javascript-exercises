const fibonacci = function(number) {
    let previousValue = 1;
    let previousValue2 = 1;
    let currentValue;
    if (number > 2){
        for(i =2; i < number; i ++){
            currentValue = previousValue + previousValue2;
            previousValue2 = previousValue;
            previousValue = currentValue;
            
        }
    }else if (number > 0){
        currentValue = 1;
    }else{
        currentValue = 'OOPS'
    }
    return currentValue;
}

console.log(fibonacci(6))

module.exports = fibonacci
