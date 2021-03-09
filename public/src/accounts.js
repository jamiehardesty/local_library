// Note: Please do not change the name of the functions. The tests use those names to validate your code.

function findAccountById(accounts, id) {
  return accounts.find((account) => account.id == id);
}

function sortAccountsByLastName(accounts) {
  return accounts.sort((a, b) =>
    a.name.last.toLowerCase() > b.name.last.toLowerCase() ? 1 : -1
  );
}

function getTotalNumberOfBorrows(account, books) {
  const query = books.filter((book) => {
    return book.borrows.some((borrowsID) => borrowsID.id === account.id);
  });
  return query.length;
}

function getBooksPossessedByAccount(account, books, authors) {
  return books
    .filter(
      // possible to destructure variables with [] // const [example] = arr.key;
      ({ borrows }) => borrows[0].id === account.id && !borrows[0].returned
    )
    .map((book) => {
      const author = authors.find((auth) => auth.id === book.authorId);
      return { ...book, author };
    });
}

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
