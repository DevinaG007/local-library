const findAccountById = (accounts, UserId) => {
  const found = accounts.find((account) => account.id == UserId);
 return found;
};

function sortAccountsByLastName(accounts) {
  const sorted = accounts.sort((a, b) => 
    a.name.last > b.name.last ? 1 : -1 
  )
  return sorted;
};

const getTotalNumberOfBorrows = (account, books) => {
  const timesBorrowed = books.reduce((result, book) => {
    const borrowed = book.borrows;
  if (borrowed.includes(account.id));
  result = borrowed.length;
 return result;
});
return timesBorrowed;
};

const currentlyBorrowedBooks = (account, books) => {
 const borrowedBooks = books.filter((book) => {
  const borrowed = book.borrows[0];
 if (borrowed.id == account.id && borrowed.returned == false) return book
});
 return borrowedBooks[0];
}; 

function getBooksPossessedByAccount(account, books, authors) {
  const borrowedBooks = currentlyBorrowedBooks(account, books);
  const authorNumber = borrowedBooks.authorId;
  const bookAuthor = authors.find((author) => {
    if (authorNumber == author.id) return author});
  borrowedBooks.author = bookAuthor;
  let {id, title, genre, authorId, author, borrows} = borrowedBooks;
 const allBorrowedBooks = [{id, title, genre, authorId, author, borrows}];
   return allBorrowedBooks;
}

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
