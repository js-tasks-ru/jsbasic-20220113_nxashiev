import createElement from "../../assets/lib/create-element.js";

export default class RibbonMenu {
  position = 0;

  constructor(categories) {
    this.categories = categories;

    this.elem = this.template();

    this.elem.addEventListener("click", (event) => {
      this.onClick(event);
      this.onBtnClick(event);
    });
  }

  template() {
    return createElement(`
    <div class="ribbon">
    <button class="ribbon__arrow ribbon__arrow_left">
      <img src="/assets/images/icons/angle-icon.svg" alt="icon">
    </button>

    <nav class="ribbon__inner">
    ${this.categories
      .map((category, index) => {
        return index == 0
          ? `<a href="#" class="ribbon__item ribbon__item_active" data-id="${category.id}">${category.name}</a>`
          : `<a href="#" class="ribbon__item" data-id="${category.id}">${category.name}</a>`;
      })
      .join("")}
    </nav>

    <button class="ribbon__arrow ribbon__arrow_right ribbon__arrow_visible">
      <img src="/assets/images/icons/angle-icon.svg" alt="icon">
    </button>
  </div>
    `);
  }

  onClick(event) {
    if (!event.target.className.includes("ribbon__arrow")) {
      return;
    }

    const ribbonInner = this.elem.querySelector(".ribbon__inner");
    const rightArrow = this.elem.querySelector(".ribbon__arrow_right");
    const leftArrow = this.elem.querySelector(".ribbon__arrow_left");

    if (event.target.className.includes("right")) {
      ribbonInner.scrollBy(350, 0);
      this.position += 350;
    }

    if (event.target.className.includes("left")) {
      ribbonInner.scrollBy(-350, 0);
      this.position -= 350;
    }

    if (this.position == 0) {
      leftArrow.classList.remove("ribbon__arrow_visible");
    }

    if (this.position > 0) {
      leftArrow.classList.add("ribbon__arrow_visible");
      rightArrow.classList.add("ribbon__arrow_visible");
    }

    if (this.position == 700) {
      rightArrow.classList.remove("ribbon__arrow_visible");
    }
  }

  onBtnClick = (event) => {
    if (event.target.tagName != "A") {
      return;
    }

    event.preventDefault();

    const ribbons = this.elem.querySelectorAll(".ribbon__item");
    for (let ribbon of ribbons) {
      ribbon.classList.remove("ribbon__item_active");
      event.target.classList.add("ribbon__item_active");
    }

    const btnClickEvent = new CustomEvent("ribbon-select", {
      bubbles: true,
      detail: event.target.dataset.id,
    });

    this.elem.dispatchEvent(btnClickEvent);
  };
}
