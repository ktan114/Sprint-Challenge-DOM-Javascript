class Button {
    constructor(element) {
        this.element = element;
        this.element.addEventListener('click', () => 
            this.select()
    )}

    select() {
        // this.element.classList.toggle('Button--disappear');
        if (this.element.style.display === "none")
            this.element.style.display = "inline-block";
        else {
            this.element.style.display = "none";
        }
    }

}

let buttons = document.querySelectorAll(".Button");
buttons = Array.from(buttons).map(buttons => new Button(buttons));

console.log(buttons);