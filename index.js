const dodger = document.getElementById("dodger");

// Move Left
function moveDodgerLeft() {
    const leftNumbers = dodger.style.left.replace("px", "");
    const left = parseInt(leftNumbers, 10);
  
    if (left > 0) {
      dodger.style.left = `${left - 10}px`;
    }
  }

  document.addEventListener("keydown", function (e) {
    if (e.key === "ArrowLeft") {
      moveDodgerLeft();
    }
  });

// Move Right
function moveDodgerRight() {
    const rightNumbers = dodger.style.left.replace("px", "");
    const left = parseInt(rightNumbers, 10);

    if(left < 360) {
        dodger.style.left = `${left + 1}px`
    }
}

document.addEventListener("keydown", function (r) {
    if (r.key === "RightArrow") {
        moveDodgerRight
    }
})