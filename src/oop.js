class ClickCounter{
    constructor(buttonId, displayId){
        this.count = 0;
        this.button = document.getElementById(buttonId);
        this.display = document.getElementById(displayId);

        this.button.addEventListener('click', () => this.increment());
        this.updateDisplay();
    }

    increment(){
        this.count++;
        this.updateDisplay();
    }

    updateDisplay(){
        this.display.textContent = this.count;
    }

}

const counter1 = new ClickCounter("clickBtn", "clickCount");
const counter2 = new ClickCounter("clickBtn2", "clickCount2");