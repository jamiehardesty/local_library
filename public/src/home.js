// Note: Please do not change the name of the functions. The tests use those names to validate your code.

function getTotalBooksCount(books) {
  return books.length;
}

function getTotalAccountsCount(accounts) {
  return accounts.length;
}

function getBooksBorrowedCount(books) {
  return borrowed = books
    .filter(
      ({ borrows }) => !borrows[0].returned
    )
    .length; // [0] is necessary !!
}

function getMostCommonGenres(books) { // try using .reduce() for a smaller f(x) 
  let arr = []; // this establishes the shape
  for (let book in books) {
    let firstRun = false;
    for (let idx in arr){
      if (books[book].genre === arr[idx].name) {
        firstRun = true;
        arr[idx].count++;
      }
    } 
    // below line pushes the appropriate shape
    if (firstRun === false) {
      arr.push(
        { name: books[book].genre, count: 1 }
      );
    }
    
  }
  return arr
    .sort(
      (a, b) => (a.count > b.count ? -1 : 1)
    )
    .slice(0, 5); 
}

function getMostPopularBooks(books) {
  let arr = []; 
  // for (let i = 0; i < books.length; i++) {
  for (let book in books) {
    arr.push(
      { name: books[book].title, count: books[book].borrows.length }
    );
  }
  return arr
    .sort(
      (a, b) => (a.count > b.count ? -1 : 1)
    )
    .slice(0, 5); 
}

function getMostPopularAuthors(books, authors) {
  let arr = []; // this establishes the shape
  // for (let i = 0; i < books.length; i++) {
  for (let book in books){
    let authBook = books[book].authorId;
    let authMatch = authors.find(
      (auth) => auth.id === authBook
    );
    let authName = authMatch.name.first + " " + authMatch.name.last;
    arr.push(
      { name: authName, count: books[book].borrows.length }
    );
  }
  return arr
    .sort(
      (a, b) => (a.count > b.count ? -1 : 1)
    )
    .slice(0, 5);
}

module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
