const save = document.getElementById("save");

function saveThought(){

const title = document.getElementById("newThoughtTitle").value;
const thought = document.getElementById("newThought").value;

console.log(`${title}: ${thought}`);
};

save.addEventListener("click", saveThought);