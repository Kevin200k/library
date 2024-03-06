let toggleDialogue = document.getElementById("toggleDialogue");
let Dialogue = document.getElementById("Dialogue")
let closeDialogue = document.getElementById("openDialogue")

//Show Dialogue
toggleDialogue.addEventListener("click", function(){
    Dialogue.showModal();
})
// Close Dialogue
closeDialogue.addEventListener("click", function(){
    Dialogue.close();
})

//Defining form fields
let title = document.getElementById("title");
let author = document.getElementById("author");
let pages = document.getElementById("pages");
let read = document.getElementById("read");

