const getTheTitles = function(arrayBooks) {
    // let books = [];
    // for (i = 0; i < arrayBooks.length; i++){
    //     books.push(arrayBooks[i].title)
    // }
    // return books;

    //Does everything above, but looks nicer
    return arrayBooks.map(book => book.title)
}

module.exports = getTheTitles;
