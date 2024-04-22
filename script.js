// DOM Elements
let main = document.querySelector("main");
let dialogForm = document.getElementById("form_dialog");
let closeForm = document.getElementById("close_button");
let addBook = document.getElementById("add_book");
let titleField = document.getElementById("user_title");
let authorField = document.getElementById("user_author");
let pagesField = document.getElementById("user_pages");
let readField = document.getElementById("user_read");
let submitButton1 = document.getElementById("submitForm1");
let submitButton2 = document.getElementById("submitForm2");

// Id numbers
let i = 0;

//Functions to show and hide dialog
let showDialog = () => {
    dialogForm.showModal()
}

let hideDialog = () => {
    dialogForm.close()
}

//Event listeners to show and hide dialog form
addBook.addEventListener("click", () => {
    clearDialogue()
    showDialog()
    submitButton2.style.display =  "none";
    submitButton1.style.display =  "inline-block";
});
closeForm.addEventListener("click", hideDialog);

//Event listener to submit form
submitButton1.addEventListener("click", addBookToLibrary);

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
//Function to clear dialogue
function clearDialogue(){
    titleField.value = "";
    authorField.value = "";
    readField.checked = false;
    pagesField.value = "";
}
//Function to add books to library array
function addBookToLibrary(){
    let book = new Book(i, titleField.value, authorField.value, readField.value, pagesField.value);
    myLibrary.push(book);
    //Creates a new card for each book in the library
    createCard(book, i)
    i++
}
//Function to create a new card
function createCard(books, index){
    let bookContainer = document.createElement("div");
    bookContainer.id = `bookContainer${index}`
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
        let bookInfo = document.createElement("div");
        bookInfo.textContent = books[key];
        
        bookInfo.classList.add(`${key}_field`);
        bookInfo.id = (`${key}_field_${index}`);
        bookContainer.appendChild(bookInfo);
    }
    bookContainer.appendChild(buttonFields)
    main.appendChild(bookContainer);

    // Add event listener fot he delete button of each card
    deleteButton.addEventListener("click", () => {
        let currentBookContainer = document.getElementById(`bookContainer${index}`)
        main.removeChild(currentBookContainer);
        myLibrary[index] = "deleted";
    });
    // Add event listener for the rename button of each card
    renameButton.addEventListener("click", () => {
        submitButton2.style.display =  "inline-block";
        submitButton1.style.display =  "none";
        
        titleField.value = myLibrary[index].title;
        authorField.value = myLibrary[index].author;
        if(myLibrary[index].read == true){
            readField.checked = true;
        }
        else{
            readField.checked = false;
        }
        pagesField.value = myLibrary[index].pages;
        dialogForm.showModal();

        submitButton2.addEventListener("click", () => {
            myLibrary[index].title = titleField.value;
            myLibrary[index].author = authorField.value;
            myLibrary[index].read = readField.checked ? "Read" : "Not Read";
            myLibrary[index].pages = pagesField.value;

            let titleValue = document.getElementById(`title_field_${index}`);
            titleValue.textContent = titleField.value;
            let authorValue = document.getElementById(`author_field_${index}`);
            authorValue.textContent = authorField.value;
            let readValue = document.getElementById(`read_field_${index}`);
            readValue.textContent = readField.checked ? "Read" : "Not Read";
            let pagesValue = document.getElementById(`pages_field_${index}`);
            pagesValue.textContent = pagesField.value;
    })
})
}

