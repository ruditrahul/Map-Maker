const tileImages = document.querySelectorAll(".tile-image");
const titles = document.querySelectorAll(".tile");
const btn = document.querySelector("button");

var currentElement = tileImages[0].firstElementChild;
var previousElement = tileImages[0].firstElementChild;

for (var i = 0; i < 4; i++) {
  tileImages[i].addEventListener("click", (e) => {
    previousElement.classList.remove("selected");
    e.target.classList.add("selected");
    currentElement = e.target;
    previousElement = e.target;
  });
}

function createImage() {
  var img = new Image();
  img.src = "./asse";
}

for (var i = 0; i < titles.length; i++) {
  titles[i].addEventListener("click", (e) => {
    if (currentElement.getAttribute("alt") === "remove") {
      var parentElement = e.target.parentNode;
      if (parentElement.innerHTML) {
        parentElement.innerHTML = "";
      }
    } else {
      const clone = currentElement.cloneNode(true);
      clone.classList.remove("selected");
      e.target.appendChild(clone);
    }
  });
}

btn.addEventListener("click", () => {
  window.location.reload();
});
