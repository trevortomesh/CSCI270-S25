let fruit = ["Apple", "Banana", "Cherry"];

function displayFruit() {
    let list = document.getElementById("fruit-list");
    list.innerHTML = ""; // clear out the list
    fruit.forEach(fruit =>{
        let li = document.createElement("li");
        li.textContent = fruit;
        list.appendChild(li);
    });
}

function addFruit(){
    fruit.push("Draonfruit");
    displayFruit();
}

displayFruit(); // show initial ist