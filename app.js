console.log('Hello');

// function to control expand/hide the navbar options when clicked. 
// create variables global scope to invoke them in functions and in listeners
const toHide = document.querySelector("#btnOptions");
const btn = document.querySelector('#burguerBtn');
// if currently is hidden/none - click sets to block; if block - click sets to none.
  expandNavBar = () => {
    if (toHide.style.display !== "none") {
          toHide.style.display = "none";
        } else {
          toHide.style.display = "flex";
        }
    }

// event listener for when we click the variable, it runs function
btn.addEventListener('click', expandNavBar)
// this would do the same if didn't have/called the variable btn
// document.querySelector('#burguerBtn').addEventListener('click', expandNavBar)

// this makes the bar being hidden by default.
expandNavBar();

// eventlistener in each of the buttons inside nav bar, and when one is clicked
// button disappears/sets to none
hideNavBar = () => {
  toHide.style.display = "none";
  }

document.querySelector('#btnOp1').addEventListener('click', hideNavBar)
document.querySelector('#btnOp2').addEventListener('click', hideNavBar)
document.querySelector('#btnOp3').addEventListener('click', hideNavBar)