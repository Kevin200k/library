// DOM Elements
let main = document.querySelector("main");
let dialogForm = document.getElementById("form_dialog");
let closeForm = document.getElementById("close_button");
let addBook = document.getElementById("add_book");
let titleField = document.getElementById("user_title");
let authorField = document.getElementById("user_author");
let pagesField = document.getElementById("user_pages");
let readField = document.getElementById("user_read");
let submitButton = document.getElementById("submitForm");

// Id number
let i = 0;
//Functions to show and hide dialog
let showDialog = () => {
    dialogForm.showModal()
}

let hideDialog = () => {
    dialogForm.close()
}

//Event listeners to show and hide dialog form
addBook.addEventListener("click", showDialog);
closeForm.addEventListener("click", hideDialog);

//Event listener to submit form
submitButton.addEventListener("click", addBookToLibrary);

//Array to store books
const myLibrary = [];

// Book class
class Book{
    constructor(id, title, author, read, pages){
        this.id = id;
        this.title = title;
        this.author = author;
        this.read = read.checked ? "Read" : "Not Read";
        this.pages = pages;
    }
}
//Function to add books to library array
function addBookToLibrary() {
    let book = new Book(i, titleField.value, authorField.value, readField.value, pagesField.value);
    myLibrary.push(book);
    console.log(myLibrary);
    //Creates a new card for each book in the library
    createCard(book)
    i++
}
//Function to create a new card
function createCard(books){
    let bookContainer = document.createElement("div");
    let renameButton = document.createElement("button");
    renameButton.classList.add = "rename";
    renameButton.textContent = "Rename";

    let deleteButton = document.createElement("button");
    deleteButton.classList.add = "delete";
    deleteButton.textContent = "Delete";

    let buttonFields = document.createElement("div");
    buttonFields.classList.add = "button_fields";

    buttonFields.appendChild(renameButton);
    buttonFields.appendChild(deleteButton);

    for(let key in books){
        console.log(books[key])
        let bookInfo = document.createElement("div");
        bookInfo.textContent = books[key];
        bookInfo.classList.add(`${key}_field`);
        bookContainer.appendChild(bookInfo);
    }
    bookContainer.appendChild(buttonFields)
    main.appendChild(bookContainer);
}
