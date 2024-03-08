let toggleDialogue = document.getElementById("toggleDialogue");
let Dialogue = document.getElementById("Dialogue")
let closeDialogue = document.getElementById("closeDialogue")

//Show Dialogue
toggleDialogue.addEventListener("click", function(){
    Dialogue.showModal();
})
// Close Dialogue
closeDialogue.addEventListener("click", function(){
    Dialogue.close();
})

//Defining form fields
let titleField = document.getElementById("title");
let authorField = document.getElementById("author");
let pagesField = document.getElementById("pages");
let readField = document.getElementById("read");
let submit = document.getElementById("submit");

//Defining card and its contents
let cardContainer= document.getElementById("card");
let titleValue = document.getElementById("titleValue");
let authorValue = document.getElementById("authorValue");
let pagesValue = document.getElementById("pagesValue");
let readValue = document.getElementById("readValue");


submit.addEventListener("click", function(){
   if(!(card.title) === '' && !(card.author) === '' && !(card.pages) === ''){
    function Book(title, author, pages, read) {
         this.title = title;
         this.author = author;
         this.pages = pages;
         this.read = read;
       }
       
       var card = new Book(titleField.value, authorField.value, pagesField.value, readField.value)
       
    }
    console.log(card.title === "null")

});
const myLibrary = [];

//Constructor function for the library

// //Function to add created object to array
// function addBookToLibrary() {
//     myLibrary = myLibrary.push(card)
// }
