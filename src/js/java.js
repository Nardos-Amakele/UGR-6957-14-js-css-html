var noBoxes = document.querySelectorAll('.wrap');
var currentIndex = 0;

function prev() {
  if (currentIndex > 0) {
    currentIndex--;
  }
  updateDisplay();
}

function next() {
  if (currentIndex < noBoxes.length - 1) {
    currentIndex++;
  }
  updateDisplay();
}

function updateDisplay() {
  noBoxes.forEach(function (box, index) {
    if (index === currentIndex) {
      box.style.display = 'block';
    } else {
      box.style.display = 'none';
    }
  });
}
function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}
function scrollDivs(direction) {
  const currDiv = document.querySelector('.scrollable-container div:not([style*="display: none"])');
  let nextDivIndex = parseInt(currDiv.dataset.index);

  if (direction === 'next') {
    nextDivIndex++;
  } else if (direction === 'prev') {
    nextDivIndex--;
  }

  if (nextDivIndex < 1 || nextDivIndex > 3) {
    return; // prevent out-of-bounds access
  }

  const nextDiv = document.querySelector(`.scrollable-container div[data-index="${nextDivIndex}"]`);
  currDiv.style.display = 'none';
  nextDiv.style.display = 'block';
}