//For index.html

const myEntries = JSON.parse(localStorage.getItem('entries'));
myEntries.splice(4);

myEntries.forEach((value, index) => {
    document.getElementById(`card-${index}`).innerHTML =
    `<h6>Date</h6>
    <h1>${myEntries[index].title}</h1>
    <p>${myEntries[index].thought}</p>`;
});

