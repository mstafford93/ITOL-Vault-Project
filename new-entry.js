//For new-entry.html

const save = document.getElementById("save");

class ObjectEntry {
    constructor (title, thought){
    this.title = title,
    this.thought = thought
    }
};
let newEntries = [];

function saveThought(){


const title = document.getElementById("newThoughtTitle").value;
const thought = document.getElementById("newThought").value;

if (title == "" ||  thought == ""){
    alert("Please enter thought and title");
} else {
//Create object
const newEntry = new ObjectEntry(title, thought);

//unshift to array
newEntries.unshift(newEntry);

//console.log(`${title}: ${thought}`);
localStorage.setItem('entries', JSON.stringify(newEntries));

//Resets inputs
document.getElementById("newThoughtTitle").value = "";
document.getElementById("newThought").value = "";

}

};

save.addEventListener("click", saveThought); //Remove the parentheses stops being accidently called before
