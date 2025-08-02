// Display an alert when a button is clicked
document.querySelector("button").addEventListener("click", function () {
  alert("Button clicked!");
});

// Validate form inputs
document
  .getElementById("contact-form")
  .addEventListener("submit", function (event) {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;

    if (name === "" || email === "") {
      alert("Please fill out all fields.");
      event.preventDefault();
    }
  });

// Add "back-to-top" button functionality
var backToTopButton = document.createElement("button");
backToTopButton.textContent = "Back to Top";
backToTopButton.style.position = "fixed";
backToTopButton.style.bottom = "20px";
backToTopButton.style.right = "20px";
backToTopButton.style.display = "none";
document.body.appendChild(backToTopButton);

window.addEventListener("scroll", function () {
  if (window.scrollY > 200) {
    backToTopButton.style.display = "block";
  } else {
    backToTopButton.style.display = "none";
  }
});

backToTopButton.addEventListener("click", function () {
  window.scrollTo({ top: 0, behavior: "smooth" });
});
