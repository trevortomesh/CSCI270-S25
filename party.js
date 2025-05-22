let party = [
    {name: "Pikachu", type: "Electric", level:18},
    {name: "Squirtle", type: "Water", level: 16},
    {name: "Charmander", type: "Fire", level: 17}
];

function displayParty(){
    let list = document.getElementById("party-list");
    list.innerHTML = "";

    party.forEach(pokemon => {
        let li = document.createElement("li");
        li.textContent = `${pokemon.name} (Lv.${pokemon.level}) - ${pokemon.type}`;
        list.appendChild(li);
    });
}

displayParty();