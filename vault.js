//For vault.html

const myEntries = JSON.parse(localStorage.getItem('entries'));

myEntries.forEach((value, index) => {
    //Create new div and class to apply styles
    const div = document.createElement("div");
    div.classList.add("myEntries");

    //Add text
    div.innerHTML =
    `<h6>${myEntries[index].date}</h6>
    <h1>${myEntries[index].title}</h1>
    <p>${myEntries[index].thought}</p>`;

    //Append to div space
    const vaultEntries = document.getElementById("vaultEntries");
    vaultEntries.appendChild(div);
});
