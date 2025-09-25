// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = "♡";
const FULL_HEART = "♥";

// Your JavaScript code goes here!

// Step 1: Hide the modal when the page loads
document.addEventListener("DOMContentLoaded", () => {
  const errorModal = document.getElementById("modal");
  errorModal.classList.add("hidden"); // ensures modal is hidden at start

  // Step 2: Select all the hearts
  const hearts = document.querySelectorAll(".like-glyph");

  // Step 3: Add event listeners to each heart
  hearts.forEach((heart) => {
    heart.addEventListener("click", () => {
      mimicServerCall()
        .then(() => {
          // Success: toggle the heart
          if (heart.innerText === EMPTY_HEART) {
            heart.innerText = FULL_HEART;
            heart.classList.add("activated-heart");
          } else {
            heart.innerText = EMPTY_HEART;
            heart.classList.remove("activated-heart");
          }
        })
        .catch((error) => {
          // Failure: show error modal
          errorModal.classList.remove("hidden");
          errorModal.querySelector("p").textContent = error;

          // Hide modal again after 3 seconds
          setTimeout(() => {
            errorModal.classList.add("hidden");
          }, 3000);
        });
    });
  });
});

// Provided "mock server" function
function mimicServerCall(url = "http://mimicServer.example.com", config = {}) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      let isRandomFailure = Math.random() < 0.2;
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}

//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url = "http://mimicServer.example.com", config = {}) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      let isRandomFailure = Math.random() < 0.2;
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
