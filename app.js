const PasswordDisplay = document.querySelector('.box input[type="text"]');
const PasswordLengthDisplay = document.querySelector(
  ".password-length-display"
);
const PasswordLength = document.querySelector('.box input[type="range"]');
const uppercaseCheckbox = document.querySelectorAll(
  '.checkBox input[type="checkbox"]'
)[0];
const numbersCheckbox = document.querySelectorAll(
  '.checkBox input[type="checkbox"]'
)[1];
const symbolsCheckbox = document.querySelectorAll(
  '.checkBox input[type="checkbox"]'
)[2];
const generateButton = document.querySelector(".box button");

const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numberChars = "0123456789";
const symbolChars = "~!@#$%^&*()_";

PasswordLength.addEventListener("input", () => {
  PasswordLengthDisplay.textContent = `Password length ${PasswordLength.value}`;
});

function generatePassword() {
  let characters = lowercaseChars;
  if (uppercaseCheckbox.checked) characters += uppercaseChars;
  if (numbersCheckbox.checked) characters += numberChars;
  if (symbolsCheckbox.checked) characters += symbolChars;

  let password = "";

  for (let i = 0; i < PasswordLength.value; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    password += characters[randomIndex];
  }
  PasswordDisplay.value = password;
}

PasswordDisplay.addEventListener("click", () => {
  if (PasswordDisplay.value) {
    navigator.clipboard
      .writeText(PasswordDisplay.value)
      .then(() => {
        console.log("Successfully copied!");
        document.querySelector(".copy").textContent = `Copied!`;
        setTimeout(() => {
          document.querySelector(".copy").textContent = "";
        }, 1000);
      })
      .catch((err) => {
        console.log("Failed to copy the password: " + err);
      });
  }
});

generateButton.addEventListener("click", generatePassword);
