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

function listTitles(shelf) {
  var total = ""
  for (var i = 0; i < shelf.length; i++) {
    if (i < shelf.length - 1) {
      total += shelf[i].title + ", "
    } else {
      total += shelf[i].title
    }
  }
  return total
}

function searchShelf(shelf, title) {
 for (var i = 0; i < shelf.length; i++) {
  if (shelf[i].title === title) {
    return true
  }
 }
return false 
}


module.exports = {
  shelfBook,
  unshelfBook,
  listTitles,
  searchShelf
};