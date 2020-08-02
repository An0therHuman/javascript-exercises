const getTheTitles = function(arrayBooks) {
    let books = [];
    for (i = 0; i < arrayBooks.length; i++){
        books.push(arrayBooks[i].title)
    }
    return books;
}

module.exports = getTheTitles;
