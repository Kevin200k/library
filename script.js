// DOM Elements
let dialogForm = document.getElementById("form_dialog");
let closeForm = document.getElementById("close_button");
let addBook = document.getElementById("add_book");
let userTitle = document.getElementById("user_title");
let userAuthor = document.getElementById("user_author");
let userPages = document.getElementById("user_pages");
let userRead = document.getElementById("user_read");
let submitButton = document.getElementById("submitForm");

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

const myLibrary = [];

class Book{
    constructor(id, title, author, read, pages){
        this.id = id;
        this.title = title;
        this.author = author;
        this.read = read;
        this.pages = pages;
    }
}
function addBookToLibrary() {
  // do stuff here
}
