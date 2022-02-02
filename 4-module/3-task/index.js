function highlight(table) {
  for (let elem of table.lastElementChild.children) {
    //
    if (elem.lastElementChild.hasAttribute("data-available")) {
      elem.classList.add(
        elem.lastElementChild.getAttribute("data-available") === "true"
          ? "available"
          : "unavailable"
      );
    } else {
      elem.setAttribute("hidden", "");
    }
    //
    if (elem.children[2].textContent === "m") {
      elem.classList.add("male");
    } else {
      elem.classList.add("female");
    }
    //
    if (parseInt(elem.children[1].textContent) < 18) {
      elem.style.textDecoration = "line-through";
    }
  }
}
