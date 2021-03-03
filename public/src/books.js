// Note: Please do not change the name of the functions. The tests use those names to validate your code.

function findAuthorById(authors, id) {
  return authors.find((auth) => auth.id == id);
}

function findBookById(books, id) {
  return books.find((book) => book.id == id);
}

function partitionBooksByBorrowedStatus(books) {
  let partition = [];
  partition.push(
    books.filter( // can't use books.borrows
      ({borrows}) => !borrows[0].returned)
      );
      partition.push(
    books.filter(
      ({borrows}) => borrows[0].returned)
      );
  return partition;
}

function getBorrowersForBook(book, accounts) {
  return book.borrows
    .map((transaction) => {
      const acctPair = accounts.find((acct) => acct.id === transaction.id);
      return { ...transaction, ...acctPair };
    })
    .slice(0, 10);
}

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};