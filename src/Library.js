function createLibrary(libraryName) {
return library = {
  name: libraryName,
  shelves: {fiction:[], fantasy:[], nonFiction:[]}
};
}

// function addBook(currentLibrary, bookTitle) {

// }





module.exports = {
  createLibrary,
  addBook,
  // checkoutBook
};