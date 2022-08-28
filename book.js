// initialisation
let addButton = document.querySelector(".button");
let popUp = document.querySelector(".addModal");
let closeX = document.querySelector(".close");
let form = document.querySelector(".addForm");

let myLibrary = JSON.parse(localStorage.getItem("myLibrary")) || [];
let cardsOfBooks = document.querySelector(".cardsOfBooks");
renderLocalStorage();

//Book Constructor
function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

//open popUp
addButton.addEventListener("click", function (e) {
  popUp.classList.add("active");
});

//close popUP
closeX.addEventListener("click", function (e) {
  popUp.classList.remove("active");
});

//close popUp and add the card
form.addEventListener("submit", function (e) {
  e.preventDefault();
  popUp.classList.remove("active");
  
  const book = createBook();
  myLibrary.push(book);
  localStorage.setItem("myLibrary", JSON.stringify(myLibrary));
  renderBook(book);
  form.reset();
});

//create the Library
function createBook() {
  let title = document.getElementById("title");
  let author = document.getElementById("author");
  let pages = document.getElementById("pages");
  let read = document.getElementById("isRead");

  return new Book(title.value, author.value, pages.value, read.checked);
}

function renderBook(book) {
  //create a book
  let bookCard = document.createElement("div");
  bookCard.classList.add("bookCard");
  let titleElem = document.createElement("div");
  let authorElem = document.createElement("div");
  let pageElem = document.createElement("div");

  //title
  titleElem.textContent = book.title;
  titleElem.classList.add("title");
  bookCard.appendChild(titleElem);

  //author
  authorElem.textContent = book.author;
  authorElem.classList.add("author");
  bookCard.appendChild(authorElem);

  //page
  pageElem.textContent = book.pages;
  pageElem.classList.add("pages");
  bookCard.appendChild(pageElem);

  //buttons
  let readBtn = document.createElement("button");
  readBtn.textContent = "Read";
  readBtn.classList.add("readBtn");
  bookCard.appendChild(readBtn);

  let removeBtn = document.createElement("button");
  removeBtn.textContent = "Remove";
  removeBtn.classList.add("removeBtn");
  bookCard.appendChild(removeBtn);

  if (book.read === false) {
    readBtn.textContent = "Not Read";
    readBtn.classList.add("notRead");
  } else {
    readBtn.classList.remove("notRead");
  }
  cardsOfBooks.appendChild(bookCard);
  bookCard.classList.add("active");

  readBtn.addEventListener("click", function (e) {
    if (readBtn.classList.contains("notRead")) {
      readBtn.classList.remove("notRead");
      readBtn.textContent = "Read";
    } else {
      readBtn.textContent = "Not Read";
      readBtn.classList.add("notRead");
    }
  });

  removeBtn.addEventListener("click", function (e) {
    bookCard.remove();

    let index = myLibrary.indexOf(book);
    if (index !== -1) {
      myLibrary.splice(index, 1);
    };

    localStorage.setItem("myLibrary", JSON.stringify(myLibrary));
  });
}

function renderLocalStorage() {
  for (const book of myLibrary) {
    renderBook(book);
  }
};
