const items = document.querySelectorAll(".tab-item");

const contentItems = document.querySelectorAll(".tab-content-item");

function select(e) {
  removeClass();
  remove();
  this.classList.add("tab-border");

  const contentItem = document.querySelector(`#${this.id}-content`);

  contentItem.classList.add("show");
}

function remove() {
  items.forEach((item) => item.classList.remove("tab-border"));
}

function removeClass() {
  contentItems.forEach((item) => item.classList.remove("show"));
}

items.forEach((item) => item.addEventListener("click", select));
