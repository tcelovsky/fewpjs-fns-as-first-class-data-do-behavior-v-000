/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
function greet(timeString) {
  let hours = timeString.split(":").first
  if parseInt(hours) < 12
  console.log("Good Morning");
  else parseInt(hours) > 17
  console.log("Good Evening");
}
/* Write your implementation of displayMessage() */
function displayMessage(greeting) {
  
}
