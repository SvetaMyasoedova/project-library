let addButton = document.querySelector(".button");
let popUp = document.querySelector(".addModal");
let closeX = document.querySelector(".close");

addButton.addEventListener("click", function (e) {
  popUp.classList.add("active");
});

closeX.addEventListener("click", function (e) {
  popUp.classList.remove("active");
});

let myLibrary = [];

function Book(title, autor, pages, read) {
  this.title = title;
  this.autor = autor;
  this.pages = pages;
  this.read = read;
  this.info = function () {
    return `${title} by ${autor}, ${pages} pages, ${read}`;
  };
}

let form = document.getElementById("form");

let cardsOfBooks = document.querySelector(".cardsOfBooks");

function addBookToLibrary(event) {
  event.preventDefault();
  let title = document.getElementById("title");
  let autor = document.getElementById("author");
  let pages = document.getElementById("pages");
  let isRead = document.getElementById("isRead");
  myLibrary = [title.value, autor.value, pages.value, isRead.checked];

  let [addTitle, addAuthor, addPages, addRead] = myLibrary;

  if (addRead === false) {
    document.querySelector(".readButton").classList.add("notRead");
  }
}
document.querySelector(".readButton").addEventListener("click", function (e) {
  document.querySelector(".readButton").classList.remove("notRead");
});

form.addEventListener("submit", addBookToLibrary);

let btnSubmit = document.querySelector(".btn");
btnSubmit.addEventListener("click", function (e) {
  popUp.classList.remove("active");
  cardsOfBooks.classList.add("active");
});
