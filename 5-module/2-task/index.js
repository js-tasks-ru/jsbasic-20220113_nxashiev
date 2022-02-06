function toggleText() {
  const button = document.querySelector(".toggle-text-button");
  const text = document.querySelector("#text");

  button.onclick = function () {
    text.hidden = !text.hidden;
  };
}
