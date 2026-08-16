//For new-entry.html

const save = document.getElementById("save");

class ObjectEntry {
    constructor(title, thought, date) {
        this.title = title,
            this.thought = thought,
            this.date = date
    }
};
let newEntries = [];

function saveThought() {


    const title = document.getElementById("newThoughtTitle").value;
    const thought = document.getElementById("newThought").value;

    if (title == "" || thought == "") {
        alert("Please enter thought and title");
    } else {
        function formatDate(date) {
            const year = date.getFullYear();
            const month = date.getMonth() + 1;
            const day = date.getDate();

            return `${day} / ${month} / ${year}`;

        };

        const today = new Date();
        const formattedDate = formatDate(today);
        //Create object
        const newEntry = new ObjectEntry(title, thought, formattedDate);

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
