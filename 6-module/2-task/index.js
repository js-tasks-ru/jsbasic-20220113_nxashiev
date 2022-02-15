import createElement from "../../assets/lib/create-element.js";

export default class ProductCard {
  elem = null;
  #product = null;

  constructor(product) {
    this.#product = product;

    this.elem = this.#template();

    this.#getButton().addEventListener("click", this.#onBtnClick);
  }

  #template() {
    return createElement(`
      <div class="card">
      <div class="card__top">
          <img src="/assets/images/products/${this.#product.image}"
          class="card__image" alt="product">
          <span class="card__price">€${this.#product.price.toFixed(2)}</span>
      </div>
      <div class="card__body">
          <div class="card__title">${this.#product.name}</div>
          <button type="button" class="card__button">
              <img src="/assets/images/icons/plus-icon.svg" alt="icon">
          </button>
      </div>
      </div>
      `);
  }

  #onBtnClick = (event) => {
    const btnClickEvent = new CustomEvent("product-add", {
      bubbles: true,
      detail: this.#product.id,
    });

    this.elem.dispatchEvent(btnClickEvent);

    console.log(event.detail);
  };

  #getButton() {
    return this.elem.querySelector(".card__button");
  }
}
