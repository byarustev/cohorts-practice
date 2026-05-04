const dolist = [
    { name: "Swimming", status: "pending" },
    { name: "diving", status: "pending" },
    { name: "Playing", status: "pending" },
    { name: "Singing", status: "pending" },
    { name: "Praying", status: "pending" }
]
displayList()

const input = document.getElementById("to-input");
const button = document.getElementById("save");
button.addEventListener("click", function () {
    const value = input.value
    if (value !== "") {
        // add a new item to our object 
        dolist.push({ name: value, status: "pending" })
        // re-display the changed list
        displayList()
    }

})

/***
 * Function to iterate through the list and create li items to 
 * be added to the ul - list 
 * 
 */
function displayList() {
    const container = document.getElementsByClassName('List')[0];
    container.innerHTML = "" // reset the list

    for (i = 0; i < dolist.length; i++) {
        const list = dolist[i];
        const display = `${list.name} ${list.status}`;
        const newItem = document.createElement('li');
        const button1 = document.createElement('button');
        const button2 = document.createElement('button');
        container.appendChild(newItem);

        newItem.innerHTML = display;
        button1.innerHTML = "Edit";
        button2.innerHTML = "Delete";
        newItem.appendChild(button1);
        newItem.appendChild(button2);
        button2.addEventListener('click', function () {
            newItem.remove() // remove the current item from dom
        })
        newItem.style.justifyContent = "space-between";

    }
}

