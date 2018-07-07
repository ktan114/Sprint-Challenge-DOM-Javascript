class Carousel {
    constructor(element) {
        this.element = element;
        this.leftArrow = element.querySelector(".Carousel__arrow-left");
        this.rightArrow = element.querySelector(".Carousel__arrow-right");
        this.leftArrow.addEventListener('click', () => {
            console.log(element);
        })
        this.rightArrow.addEventListener('click', () => {
            console.log('hi');
        })
    }
}

let carousels = document.querySelectorAll(".Carousel");
carousels = Array.from(carousels).map(carousel => new Carousel(carousel));