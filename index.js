//For index.html

const myEntries = JSON.parse(localStorage.getItem('entries'));
myEntries.splice(3);



document.getElementById("card-0").innerHTML =
    `<h6>Date</h6>
    <h1>${myEntries[0].title}</h1>
    <p>${myEntries[0].thought}</p>`;