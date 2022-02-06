function initCarousel() {
  const slideWidth = document.querySelector(".carousel__slide").offsetWidth;
  const carousel = document.querySelector(".carousel__inner");
  const rightArrow = document.querySelector(".carousel__arrow_right");
  const leftArrow = document.querySelector(".carousel__arrow_left");
  let position = 0;

  leftArrow.style.display = "none";

  rightArrow.onclick = function () {
    position -= slideWidth;
    carousel.style.transform = `translateX(${position}px)`;

    rightArrow.style.display = position == -slideWidth * 3 ? "none" : "";
    leftArrow.style.display = position == 0 ? "none" : "";
  };

  leftArrow.onclick = function () {
    position += slideWidth;
    carousel.style.transform = `translateX(${position}px)`;

    rightArrow.style.display = position == -slideWidth * 3 ? "none" : "";
    leftArrow.style.display = position == 0 ? "none" : "";
  };
}
