function shelfBook(book, shelf) {
  if (shelf.length <= 2) {
  return shelf.unshift(book);
}
};

function unshelfBook(bookTitle, shelf) {
  for (var i = 0; i < shelf.length; i++) {
  if (shelf[i].title === bookTitle) {
    return shelf.splice(i, 1)
   }
}
}

// function listTitles(shelf) {
// for (var i = 0; i < shelf.length; i++) {

// }
// };










module.exports = {
  shelfBook,
  unshelfBook,
  listTitles,
  // searchShelf
};