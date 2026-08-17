//For vault.html

let myEntries = JSON.parse(localStorage.getItem('entries'));

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

    //Create remove button
        const removeBin = document.createElement("p");
        removeBin.innerHTML = '<i class="fa-solid fa-trash-can"></i>';
        removeBin.classList.add("removeBin");
        removeBin.onclick = () => {
            myEntries.splice(index, 1);
            //Reset local storage
            localStorage.setItem('entries', JSON.stringify(myEntries));   
            //Remove current div
            vaultEntries.removeChild(div);     
        };

        //Append bin
        div.appendChild(removeBin);
});
