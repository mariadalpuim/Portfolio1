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

// store data from the submitted form
// variable to hold the data
let storedData;

// function to first create an object with the values of each person
// then if consoles the storeddata
// transform the object into a string (because local storage stores eveyrthing as a string)

// not working - error Uncaught TypeError: Cannot read properties of null (reading 'value')
// keep comparing with project 22 and google the issue

formStore = (e) => {
  storedData = {
    name: document.querySelector("#name").value,
    email: document.querySelector("#email").value,
    phone: document.querySelector("#phone").value,
    message: document.querySelector("#message").value,
  };

  console.log(storedData);

  storedData = JSON.stringify(storedData);

  console.log(storedData);

  // then we move to the sessionStoreage bit of code, where we put it in the local sotrage
  sessionStorage.setItem("SessionFormData", storedData);
  console.log(sessionStorage.getItem("SessionFormData"));
  e.preventDefault();
}

document.querySelector("form").addEventListener("submit", formStore);