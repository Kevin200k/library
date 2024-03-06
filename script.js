let toggleDialogue = document.getElementById("toggleDialogue");
let openDialogue = document.getElementById("openDialogue")
let closeDialogue = document.getElementById("openDialogue")

//Show Dialogue
toggleDialogue.addEventListener("click", function(){
    openDialogue.showModal();
})
// Close Dialogue
closeDialogue.addEventListener("click", function(){
    closeDialogue.close();
} )