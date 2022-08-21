let addButton = document.querySelector(".button");
let popUp = document.querySelector(".addModal");
let closeX = document.querySelector(".close");

//open popUp
addButton.addEventListener("click", function (e) {
  popUp.classList.add("active");
});

//close popUP
closeX.addEventListener("click", function (e) {
  popUp.classList.remove("active");
});

let myLibrary = [];

//Book Constructor
function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

let cardsOfBooks = document.querySelector(".cardsOfBooks");
let newBook;

//create the Library
function addBookToLibrary() {
  let title = document.getElementById("title");
  let author = document.getElementById("author");
  let pages = document.getElementById("pages");
  let read = document.getElementById("isRead");

  newBook = new Book(title.value, author.value, pages.value, read.checked);
  myLibrary.push(newBook);
  updateLocalStorage(); //saves updated array in local storage

  //create a book
  
    let bookCard = document.createElement("div");
    bookCard.classList.add("bookCard");
    let titleElem = document.createElement("div");
    let authorElem = document.createElement("div");
    let pageElem = document.createElement("div");

    //title
    titleElem.textContent = title.value;
    titleElem.classList.add("title");
    bookCard.appendChild(titleElem);

    //author
    authorElem.textContent = author.value;
    authorElem.classList.add("author");
    bookCard.appendChild(authorElem);

    //page
    pageElem.textContent = pages.value;
    pageElem.classList.add("pages");
    bookCard.appendChild(pageElem);

    //buttons
    let readBtn = document.createElement("button");
    readBtn.classList.add("readBtn");
    bookCard.appendChild(readBtn);

    let removeBtn = document.createElement("button");
    removeBtn.textContent = "Remove";
    removeBtn.classList.add("removeBtn");
    bookCard.appendChild(removeBtn);

    if (read.checked === false) {
      readBtn.textContent = "Not Read";
      readBtn.classList.add("notRead");
    } else {
      readBtn.textContent = "Read";
      readBtn.classList.remove("notRead");
    }
    cardsOfBooks.appendChild(bookCard);
    bookCard.classList.add("active");
  
    readBtn.addEventListener("click", function (e) {
      readBtn.classList.toggle("notRead")
    });

    removeBtn.addEventListener("click", function (e) {
      bookCard.remove()
    });
}

let form = document.querySelector(".addForm");

//close popUp and add the card
form.addEventListener("submit", function (e) {
  e.preventDefault();
  popUp.classList.remove("active");
  addBookToLibrary();
  form.reset();
});




//localStorage
function updateLocalStorage() {
  localStorage.setItem(`myLibrary`, JSON.stringify(myLibrary));
}
