let findTheOldest = function(arrayPeople) {
    const currentYear = 2020;
    let sortedPeople = arrayPeople.sort((person1, person2) => {
        if (person1.hasOwnProperty('yearOfDeath') && person2.hasOwnProperty('yearOfDeath')){
            return (person1.yearOfDeath - person1.yearOfBirth) > (person2.yearOfDeath - person2.yearOfBirth) ? -1 : 1;
        }else{
            return (currentYear - person1.yearOfBirth) > (currentYear - person2.yearOfBirth) ? -1 : 1;
        }
    })
    let oldestPerson = sortedPeople[0];
    return oldestPerson;
}

module.exports = findTheOldest
