let toggleDialogue = document.getElementById("toggleDialogue");
let Dialogue = document.getElementById("Dialogue")
let closeDialogue = document.getElementById("closeDialogue")
let body = document.querySelector("body");
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
let cardContainer= document.querySelector(".card");
let titleValue = document.querySelector(".titleValue");
let authorValue = document.querySelector(".authorValue");
let pagesValue = document.querySelector(".pagesValue");
let readValue = document.querySelector(".readValue");


submit.addEventListener("click", function(){
    //Constructor function for Libary
    function Book(title, author, pages, read) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.read = (read == "1") ? "Read" : "Not Read";
    }
    Book();
    
    let card = new Book(titleField.value, authorField.value, pagesField.value, readField.value)
    // console.log(card)

    // titleValue.innerText = card.title;
    // authorValue.innerText = card.author;
    // pagesValue.innerText = card.pages;
    // readValue.innerText = card.read;
    
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
            
            titleValue1.innerText = card.title;
            authorValue1.innerText = card.author;
            pagesValue1.innerText = card.pages;
            readValue1.innerText = card.read;
            
            body.appendChild(cardContainer1);
            cardContainer1.appendChild(titleValue1);
            cardContainer1.appendChild(authorValue1);
            cardContainer1.appendChild(pagesValue1);
            cardContainer1.appendChild(readValue1);
            
            
            break
        }
        
    }
    loopOver();


    console.log(myLibrary[0])
    // titleField.value = "";
    // authorField.value = "";
    // pagesField.value = ""
    // readField.value = ""
});
const myLibrary = [];
