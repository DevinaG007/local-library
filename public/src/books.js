const findAuthorById = (authors, id) => 
authors.find((author) => author.id == id);

const findBookById = (books, id) =>
books.find((book) => book.id == id);

const partitionBooksByBorrowedStatus = (books) => {
  const borrowed = [];
  const returned = [];
   books.some((book) => {
    if (book.borrows[0].returned == false) {borrowed.push(book)} 
    else {returned.push(book)};
    })
   const booksByStatus = [borrowed, returned];
   return booksByStatus;
}

const getBorrowersForBook = (book, accounts) => {
  const borrowed = book.borrows;
  const accountsThatBorrowed = accounts.filter((account) => {
    for (let i = 0; i < borrowed.length; i++){
      if (borrowed[i].id == account.id){
        account.returned = borrowed[i].returned;
         return account
        } 
    }
  })
 return accountsThatBorrowed;
}

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
