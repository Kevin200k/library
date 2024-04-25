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
let searchBar = document.getElementById("searchbar");
let searchButton = document.getElementById("searchButton");
let searchResult = document.getElementById("searchResult");
let cancelSearch = document.getElementById("cancelSearch");
let sort = document.getElementById("sort");

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
submitButton1.addEventListener("click", () => {
    console.log(sort.selectedIndex)
    if(titleField.value && authorField.value && pagesField.value) addBookToLibrary()
});

//Event listener for the searchbutton
searchButton.addEventListener("click", search);

//Event listener for the cancelSearch Button
cancelSearch.addEventListener("click", clearSearch);

//Event listener for the sort functionality
sort.addEventListener("change", sortCards);
//Array to store books
const myLibrary = [];

// Array to store search values
let searchArray = [];

// Arrays to store all ids present
let idArray = [];

// Arrays to store non corresponding ids
let nonCorrespondingValues = []
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
    let book = new Book(i, titleField.value, authorField.value, readField, pagesField.value);
    myLibrary.push(book);
    console.log(book)
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

            if(titleField.value && authorField.value && pagesField.value){
                let titleValue = document.getElementById(`title_field_${index}`);
                titleValue.textContent = titleField.value;
                let authorValue = document.getElementById(`author_field_${index}`);
                authorValue.textContent = authorField.value;
                let readValue = document.getElementById(`read_field_${index}`);
                readValue.textContent = readField.checked ? "Read" : "Not Read";
                let pagesValue = document.getElementById(`pages_field_${index}`);
                pagesValue.textContent = pagesField.value;
            }
    })
})
}

function checkCard(){
    if(!titleField.value || !authorField.value || !pagesField.value){
        submitButton1.disabled = true;
        submitButton2.disabled = true;
    }
    else{
        submitButton1.disabled = false;
        submitButton2.disabled = false;
    }
}

function search(){
    idArray = []
    searchArray = []
    let searchItem = searchBar.value;
    for(let book of myLibrary){
        let found = false;
        idArray.push(book.id)
        for(let key in book){
            let regEx = new RegExp(`([a-z]|[0-9])*${searchItem}([a-z]|[0-9])*`, 'i');
            if(regEx.test(book[key])){
                found = true;
                break
            }           
        }
        if(found){
            searchArray.push(book.id)
        }
    }
    nonCorrespondingValues = idArray.filter(value => !searchArray.includes(value));
    for(let val of nonCorrespondingValues){
        console.log(val)
        let card = document.getElementById(`bookContainer${val}`);
        card.style.display = "none";
    }
    if(searchArray.length === 0) searchResult.innerText = "No search result found";
    cancelSearch.style.display ="block";
    searchButton.disabled = true;
}
function clearSearch(){
    searchResult.style.display = "none";
    for(let id of nonCorrespondingValues){
        let card = document.getElementById(`bookContainer${id}`);
        card.style.display = "block";
    }
    searchButton.disabled = false;
    searchBar.value = "";
    cancelSearch.style.display ="none";
}

function sortCards(){
    let selectedOption = sort.options[sort.selectedIndex];
    let selectedOptionValue = selectedOption.value;
    let titleArray = [];
    let pagesArray = [];
    
    // Step 1: Populate titleArray and pagesArray
    myLibrary.forEach(book => {
        titleArray.push({ title: book.title.toLowerCase(), id: book.id });
        pagesArray.push({ pages: book.pages, id: book.id });
    });
    
    // Step 2: Sort arrays
    let ascendingTitleArray = titleArray.slice().sort((a, b) => a.title.localeCompare(b.title));
    let descendingTitleArray = titleArray.slice().sort((a, b) => b.title.localeCompare(a.title));
    let ascendingPagesArray = pagesArray.slice().sort((a, b) => a.pages - b.pages);
    let descendingPagesArray = pagesArray.slice().sort((a, b) => b.pages - a.pages);

    // Step 3: Extract IDs from sorted arrays
    let ascendingTitleId = ascendingTitleArray.map(book => book.id);
    let descendingTitleId = descendingTitleArray.map(book => book.id);
    let ascendingPagesId = ascendingPagesArray.map(book => book.id);
    let descendingPagesId = descendingPagesArray.map(book => book.id);

    // if(selectedOptionValue === "Ascending"){
    //     titleArray.reverse()
    }