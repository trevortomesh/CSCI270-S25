let color = "lightblue";
const userName = 'John';
let greeting = "Welcome to the site, ";
greeting += userName;
document.getElementById("welcome-message").textContent = greeting + "!";

function changeBackgroundColor() {
    color = (color === "lightblue") ? "lightcoral" : "lightblue";
    document.body.style.backgroundColor = color;
}