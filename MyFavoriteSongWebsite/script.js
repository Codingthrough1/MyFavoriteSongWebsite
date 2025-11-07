let box = document.getElementById("box");
let pos = 0;
let direction = 1;

function animateBox() {
  pos += direction * 2;
  box.style.left = pos + "px";

  if (pos > 200 || pos < 0) {
    direction *= -1;
  }

  requestAnimationFrame(animateBox);
}

animateBox();
