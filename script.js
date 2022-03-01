// Script.js

// Story of Gauss - David Stobbe

// HTML Elements
let calcBtn = document.getElementById("calc-btn");
let sumOut = document.getElementById("sum-out");
let nInput = document.getElementById("n-in");
let nOut = document.getElementById("n-out");

// Add event listener
calcBtn.addEventListener("click", calcSum)

// Event Function 
function calcSum() {
    let total = nInput.value/2 * (nInput.value + 1);
    // Output the total
    sumOut.innerHTML = total;
    nOut.innerHTML = nInput.value;
}