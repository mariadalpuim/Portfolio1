console.log('Hello');

const toHide = document.getElementById("buttonContent");
const btn = document.getElementById("collapsible");
btn.onclick = function () {
  if (toHide.style.display !== "none") {
    toHide.style.display = "none";
  } else {
    toHide.style.display = "block";
  }
};

// why do I need to click twice?

// it's working. now I want to add that it hides
// when we select one of the options. prob need
// and if or a loop/