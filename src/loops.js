let div = document.getElementById("output");
let team = ["Porygon", "Mew", "Mewtwo", "Mimikyu", "Pikachu", "Celebi"];


let loop = "foreach";

if (loop === "for") {
    for (let i = 1; i <= 10; i++) {
        let p = document.createElement("p");
        p.textContent = `Number ${i}`;
        div.appendChild(p);
    }
}

if(loop === "while") {
    let count = 10;
    while(count > 0){
        let p = document.createElement("p");
        p.textContent = `T-minus ${count}`;
        div.appendChild(p);
        count--;
    }
}

if (loop === "foreach") {
    let ul = document.getElementById("team-list");

    team.forEach(pokemon => {
        let li = document.createElement("li");
        li.textContent = pokemon;
        ul.appendChild(li);
    });
}

function addPokemon(){
    team.push("Bulbasaur");

}

