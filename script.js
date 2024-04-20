// DOM Elements
let dialogForm = document.getElementById("form_dialog");
let closeForm = document.getElementById("close_button");
let addBook = document.getElementById("add_book");

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
    constructor(title, author, read, pages){
        this.title = title;
        this.author = author;
        this.read = read;
        this.pages = pages;
    }
}
function addBookToLibrary() {
  // do stuff here
}
