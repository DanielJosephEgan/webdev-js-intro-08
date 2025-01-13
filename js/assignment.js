"use strict";

const submissionBtn = document.getElementById("submission-btn");

const smallestNumberElement = document.getElementById("smallest-number");
const largestNumberElement = document.getElementById("largest-number");
const averageNumberElement = document.getElementById("average-number");

const myNumbers = [35, 130, 354, 100, 25, 134, 99, 200, 35];
let smallest = myNumbers[0]; 

function findSmallestNumber() {
  // remainderElement.innerHTML = remainder;

  for (let i = 1; i < myNumbers.length; i++) {
    if (myNumbers[i] < smallest) {
        smallest = myNumbers[i];
        }
        smallestNumberElement.innerText = smallest;
    }
}

 
function findLargestNumber() {
const largest = Math.max(...myNumbers);
  largestNumberElement.innerText = largest;
}



function findAverage(){
  // const average = myNumbers.reduce((sum, num) => sum + num, 0)

  let sum = 0;
  let average = 0;

  for (let i = 0; i < myNumbers.length; i++) {
    sum += myNumbers[i];
    average = sum / myNumbers.length;
    averageNumberElement.innerText = average;

  }

}


function render() {
  findSmallestNumber()
  findLargestNumber()
  findAverage()
}

submissionBtn.addEventListener("click", function () {
  render();
});

