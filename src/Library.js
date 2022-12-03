function createLibrary(libraryName) {
return library = {
  name: libraryName,
  shelves: {fiction:[], fantasy:[], nonFiction:[]}
};
}

function addBook(library, bookTitle) {
  library.shelves[bookTitle.genre].push(bookTitle)
};


function checkoutBook(library, title, genre) {
  var chosenBook = library.length.shelves[title.genre]
 for (var i = 0; i < library.length.shelves[title.genre]; i++) {
  if (library.shelves[title.genre] === title)
  return library.length.shelves
 }
}
// function unshelfBook(bookTitle, shelf) {
//   for (var i = 0; i < shelf.length; i++) {
//   if (shelf[i].title === bookTitle) {
//     return shelf.splice(i, 1)
//    }
// }
// }

module.exports = {
  createLibrary,
  addBook,
  checkoutBook
};