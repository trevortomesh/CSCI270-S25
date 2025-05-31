// Define a class

class Pokemon{
    constructor(name, type, hp){
        this.name = name;
        this.type = type;
        this.hp = hp;
    }

    // A method that lets the Pokemon cry
    cry(){
        console.log(`${this.name}: ${this.generateCry()}`);
    }

    // Simulated cry based on type
    generateCry(){
        return this.type === "Normal" ? "Beep-boop!" : "Rawr!"
    }

    // a method to display stats
    stats(){
        console.log(`${this.name} -- Type: ${this.type}, HP: ${this.hp}`);
    }

    attack(target){
        const damage = 10;
        target.hp -= damage;
        console.log(`${this.name} attacks ${target.name} for ${damage} damage!`);
    }

    heal() {
        if (this.hp < 100) {
            this.hp += 15;
        }
        if (this.hp > 100) {
            this.hp = 100;
        }

        console.log(`${this.name} heals and now has ${this.hp} HP!`);
    }

}

const porygon = new Pokemon("Porygon", "Normal", 65);
porygon.stats();
porygon.cry();

const pikachu = new Pokemon("Pikachu", "Electric", 55);

porygon.attack(pikachu);
pikachu.stats();
pikachu.heal();