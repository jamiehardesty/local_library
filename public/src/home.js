// Note: Please do not change the name of the functions. The tests use those names to validate your code.

function getTotalBooksCount(books) {
  return books.length;
}

function getTotalAccountsCount(accounts) {
  return accounts.length;
}

function getBooksBorrowedCount(books) {
  const borrowed = books.filter(({ borrows }) => !borrows[0].returned);
  return borrowed.length;
}

function getMostCommonGenres(books) {
  let arr = []; // this establishes the shape
  for (let i = 0; i < books.length; i++) {
    let firstRun = false;
    for (let j = 0; j < arr.length; j++) {
      if (books[i].genre === arr[j].name) {
        firstRun = true;
        arr[j].count++;
      }
    } // below line pushes the appropriate shape
    if (firstRun === false) {
      arr.push({ name: books[i].genre, count: 1 });
    }
  }
  return arr.sort((a, b) => (a.count > b.count ? -1 : 1)).slice(0, 5); // we gucci on this
}

function getMostPopularBooks(books) {
  let arr = []; 
  for (let i = 0; i < books.length; i++) {
    arr.push({ name: books[i].title, count: books[i].borrows.length });
  }
  return arr.sort((a, b) => (a.count > b.count ? -1 : 1)).slice(0, 5); 
}

function getMostPopularAuthors(books, authors) {
  let arr = []; // this establishes the shape
  for (let i = 0; i < books.length; i++) {
    let authBook = books[i].authorId;
    let authMatch = authors.find((auth) => auth.id === authBook);
    let authName = authMatch.name.first + " " + authMatch.name.last;
    arr.push({ name: authName, count: books[i].borrows.length });
  }
  console.log(arr);
  return arr.sort((a, b) => (a.count > b.count ? -1 : 1)).slice(0, 5);

}

module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
