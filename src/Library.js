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
  var chosenShelf = library['shelves'][genre]
 for (var i = 0; i < chosenShelf.length; i++) {
  if (chosenShelf[i].title === title) {
  chosenShelf.splice(i, 1)
  return `You have now checked out ${title} from the ${library.name}`
 }
}
return `Sorry, there are currently no copies of ${title} available at the ${library.name}`
}

module.exports = {
  createLibrary,
  addBook,
  checkoutBook
};