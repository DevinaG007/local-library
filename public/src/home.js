const getTotalBooksCount = (books) => books.length;
  
const getTotalAccountsCount= (accounts) => {
  const totalAccounts = accounts.reduce((total, account) => total + 1, 0); 
  return totalAccounts; 
};

function getBooksBorrowedCount(books) {
const borrowedBooks = books.filter((book) => book.borrows[0].returned == false);
return borrowedBooks.length;
};

const getGenres = (books) => {
  const byGenre = books.reduce((result, book) => {
    if (result[book.genre] == undefined) {
      result[book.genre] = [];
    };
    result[book.genre].push(book); 
    return result;
   }, {});
   return byGenre;
};

const getMostCommonGenres = (books) => {
const allGenres = getGenres(books);
const byGenre = [];
 for (let genre in allGenres) {
    const name = genre;
    const count = allGenres[genre].length;
    let eachGenre = {name, count};
    if (byGenre.length < 5) {byGenre.push(eachGenre)}
 }
 const sortedGenres = byGenre.sort((a, b) => b.count - a.count);
 return sortedGenres;
}

const getMostPopularBooks = (books) => {
   books.sort((a, b) => b.borrows.length - a.borrows.length);
  const popularBooksSorted = books.map((book) => {
      const name = book.title;
      const count = book.borrows.length;
      const eachBook = {name, count};
      return eachBook;
  })
  if (popularBooksSorted.length > 5) popularBooksSorted.length = 5;
  return popularBooksSorted;
}

 const updateAuthorsNames= (authors) => {
  const updatedAuthors = authors.map((author) => {
    const name = `${author.name.first} ${author.name.last}` 
    const id = author.id;
    return {name, id}});  
    return updatedAuthors;
  };

  const booksBorrowedByAuthorId = (books) => {
    const byAuthorId = books.reduce((result, book) => {
    if (result[book.authorId] == undefined) {
      result[book.authorId] = book.borrows.length 
    }
    return result;
    }, {});
    return byAuthorId; 
  };

const getMostPopularAuthors = (books, authors) => {
  const allAuthors = updateAuthorsNames(authors);
  const byAuthorId = booksBorrowedByAuthorId(books);
  const mostPopularAuthors = allAuthors.map((author) => {
    for (let id in byAuthorId){
      if (author.id == id) { 
        let count = byAuthorId[id]
        let name = author.name;
        return {name, count}}
    }}).sort((a, b) =>  b.count - a.count);
  if (mostPopularAuthors.length > 5) mostPopularAuthors.length = 5;
  return mostPopularAuthors;
  };
  
module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
