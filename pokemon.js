// Step 1: Create a Pokemon as an object

let porygon = {
    name: "Porygon",
    type: "Normal",
    level: 25,
    ability: "Download"
}

// Step 2: Function to display the Pokemon on the page

function displayPokemon(){
    let container = document.getElementById("pokemon-info");
    container.innerHTML = "<h3>Porygon's Stats</h3>";

    for (let key in porygon) {
        let p = document.createElement("p");
        p.textContent = `${key}: ${porygon[key]}`;
        container.appendChild(p);
    }
}

function levelUp(){
    porygon.level++;
    displayPokemon();
}

function teachMove(moveName){
    if(moveName){
        porygon.move = moveName;
        displayPokemon();
    }
}

displayPokemon();