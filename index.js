// Your code goes here
// Add an event listener for DOMContentLoaded
document.addEventListener("DOMContentLoaded", function() {
    // Target the paragraph element with id="text" and change its content
    const textElement = document.getElementById("text");
    if (textElement) {
      textElement.textContent = "This is really cool!";
    }
  });
  
  // The code outside the event listener will run immediately when index.js is loaded
  console.log(
    "This console.log() fires when index.js loads - before DOMContentLoaded is triggered"
  );
  