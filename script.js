let toggleDialogue = document.getElementById("toggleDialogue");
let Dialogue = document.getElementById("Dialogue")
let closeDialogue = document.getElementById("closeDialogue")
let body = document.querySelector("body");
let main = document.querySelector("main");
//Show Dialogue
toggleDialogue.addEventListener("click", function(){
    Dialogue.showModal();
})
// Close Dialogue
closeDialogue.addEventListener("click", hideDialogue)

//Defining form fields
let bookForm = document.getElementById("bookForm")
let titleField = document.getElementById("title");
let authorField = document.getElementById("author");
let pagesField = document.getElementById("pages");
let readField = document.getElementById("read");
let submit = document.getElementById("submit");

//Defining card and its contents
// let cardContainer= document.querySelector(".card");
// let titleValue = document.querySelector(".titleValue");
// let authorValue = document.querySelector(".authorValue");
// let pagesValue = document.querySelector(".pagesValue");
// let readValue = document.querySelector(".readValue");


submit.addEventListener("click", function(){
    //Constructor function for Libary
    function Book(title, author, pages, read) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.read = (read == "1") ? "Read" : "Not Read";
    }
    
    let card = new Book(titleField.value, authorField.value, pagesField.value, readField.value);

    function addBookToLibrary(){
        if(card.title === "" ||
           card.author === "" ||
           card.pages === ""){
                return null
           }else{
                myLibrary.push(card)
           }
        
    }
    addBookToLibrary();
    function loopOver() {
        for (let i = 0; i < myLibrary.length; i++) {
            let j = myLibrary.lastIndexOf(card)
            console.log(i);
            console.log(myLibrary);
            console.log(j) 

            let cardContainer1 = document.createElement("div");
            cardContainer1.setAttribute("class", "cardContainer");
            let titleValue1 = document.createElement("h2");
            titleValue1.setAttribute("class", "titleValue");
            let authorValue1 = document.createElement("p");
            authorValue1.setAttribute("class", "authorValue");
            let pagesValue1 = document.createElement("p");
            pagesValue1.setAttribute("class", "pagesValue");
            let readValue1 = document.createElement("p");
            readValue1.setAttribute("class", "readValue");
            let renameButton = document.createElement("button");
            renameButton.setAttribute("class", "renameValue");
            let deleteButton = document.createElement("button");
            deleteButton.setAttribute("class", "deleteValue");
            
            renameButton.innerText = "Rename";
            renameButton.addEventListener("click", function (){
                console.log(titleValue1.innerText);
                card.title = titleValue1.innerText;
                card.author = authorValue1.innerText;
                card.pages = pagesValue1.innerText;
                card.read =  readValue1.innerText;

                titleField.value = card.title;
                authorField.value = card.author;
                pagesField.value = card.pages;
                readField.value = card.read;

                
                Dialogue.showModal();

                
            })
            titleValue1.innerText = card.title;
            authorValue1.innerText = card.author;
            pagesValue1.innerText = card.pages;
            readValue1.innerText = card.read;
            deleteButton.innerText = "Delete";
            
            main.appendChild(cardContainer1);
            cardContainer1.appendChild(titleValue1);
            cardContainer1.appendChild(authorValue1);
            cardContainer1.appendChild(pagesValue1);
            cardContainer1.appendChild(readValue1);
            cardContainer1.appendChild(renameButton);
            cardContainer1.appendChild(deleteButton);

            hideDialogue();
            break
        }
        
    }
    loopOver();
    
    console.log(myLibrary[0])
});

function hideDialogue(){
    Dialogue.close();
    titleField.value = "";
    authorField.value = "";
    pagesField.value = "";
    readField.value = "";
}
const myLibrary = [];

