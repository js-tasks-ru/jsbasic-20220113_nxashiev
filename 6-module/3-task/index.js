import createElement from "../../assets/lib/create-element.js";

export default class Carousel {
  position = 0;
  slideNumber = 0;

  constructor(slides) {
    this.slides = slides;
    this.elem = this.template();

    this.elem.addEventListener("click", (event) => this.onClick(event));
    this.elem.addEventListener("click", this.onBtnClick);
  }

  template() {
    return createElement(`
    <div class="carousel">
    <div class="carousel__arrow carousel__arrow_right">
      <img src="/assets/images/icons/angle-icon.svg" alt="icon">
    </div>
    <div class="carousel__arrow carousel__arrow_left" style="display: none;">
      <img src="/assets/images/icons/angle-left-icon.svg" alt="icon">
    </div>
    <div class="carousel__inner">
      ${this.slides
        .map((slide) => {
          return `
            <div class="carousel__slide" data-id="${slide.id}">
            <img src="/assets/images/carousel/${slide.image}"
            class="carousel__img" alt="slide">
            <div class="carousel__caption">
              <span class="carousel__price">€${slide.price.toFixed(2)}</span>
              <div class="carousel__title">${slide.name}</div>
              <button type="button" class="carousel__button">
                <img src="/assets/images/icons/plus-icon.svg" alt="icon">
              </button>
            </div>
            </div>`;
        })
        .join("")}
    </div>
  </div>
  `);
  }

  onClick(event) {
    if (!event.target.className.includes("carousel__arrow")) {
      return;
    }

    const slideWidth = this.elem.querySelector(".carousel__slide").offsetWidth;
    const carousel = this.elem.querySelector(".carousel__inner");
    const rightArrow = this.elem.querySelector(".carousel__arrow_right");
    const leftArrow = this.elem.querySelector(".carousel__arrow_left");

    if (event.target.className.includes("right")) {
      this.position -= slideWidth;
      this.slideNumber++;
    }

    if (event.target.className.includes("left")) {
      this.position += slideWidth;
      this.slideNumber--;
    }

    carousel.style.transform = `translateX(${this.position}px)`;

    rightArrow.style.display =
      this.slideNumber == this.slides.length - 1 ? "none" : "";
    leftArrow.style.display = this.slideNumber == 0 ? "none" : "";
  }

  onBtnClick = (event) => {
    const btnClickEvent = new CustomEvent("product-add", {
      bubbles: true,
      detail: this.slides[this.slideNumber].id,
    });

    this.elem.dispatchEvent(btnClickEvent);
  };
}
