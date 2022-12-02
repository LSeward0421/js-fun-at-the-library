const { assert } = require("chai");

function createTitle(title) {
  return `The ${title}`;
};

function buildMainCharacter(name, age, pronouns) {
  var character = {
    name: `${name}`,
    age: `${age}`,
    pronouns: `${pronouns}`
  };
  return character;
  };

function saveReview(newComment, reviewsArray) {
  if (reviewsArray.includes(newComment) === false) {
    return reviewsArray.push(newComment);
  }
};

function calculatePageCount(title) {
  title = title.length * 20;
  return title;
};

function writeBook(title, mainCharacter, genre) {
  return book = {
  title: title, 
  mainCharacter: mainCharacter,
  pageCount: calculatePageCount(title),
  genre: genre
}
};

function editBook(title) {
  return title.pageCount *= .75
};








module.exports = {
  createTitle,
  buildMainCharacter,
  saveReview,
  calculatePageCount,
  writeBook,
  editBook
}
