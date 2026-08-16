//For index.html

const myEntries = JSON.parse(localStorage.getItem('entries'));

for(let i = 0; i < 4; i ++){
 document.getElementsByClassName(`card-${i}`).innerHTML = `
 <h6>Date</h6>
 <h1>${myEntries.title}</h1>
 <p>${myEntries.thought}</p>`
}