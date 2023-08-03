const form = document.getElementById("myForm");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const phoneInput = document.getElementById("phone");
const messageInput = document.getElementById("message");
const nameError = document.getElementById("nameError");
const emailError = document.getElementById("emailError");
const phoneError = document.getElementById("phoneError");
const messageError = document.getElementById("messageError");

form.addEventListener("submit", function (event) {
  event.preventDefault();
  clearErrors();
  if (validateForm()) {
    // If form is valid, redirect to the success page
    window.location.href = "success.html";
  }
});

function validateForm() {
  let valid = true;

  // Name validation
  if (nameInput.value.length < 3) {
    nameError.textContent = "Name must be at least 3 characters.";
    valid = false;
  }

  // Email validation
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(emailInput.value)) {
    emailError.textContent = "Please enter a valid email address.";
    valid = false;
  }

  // Phone validation
  const phonePattern = /^\d{10}$/;
  if (!phonePattern.test(phoneInput.value)) {
    phoneError.textContent = "Please enter a valid 10-digit phone number.";
    valid = false;
  }

  // Message validation
  if (messageInput.value.length > 500) {
    messageError.textContent = "Message should not exceed 500 characters.";
    valid = false;
  }

  return valid;
}

function clearErrors() {
  nameError.textContent = "";
  emailError.textContent = "";
  phoneError.textContent = "";
  messageError.textContent = "";
}
