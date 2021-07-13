// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  getRequirements();
}

function getRequirements() {
  var passwordRequirements = {
        uppercase: false,
        lowercase: false,
        numbers: false,
        specialChar: false,
        passLength: 0
    }
}

var requirementsPrompt = prompt("State your requirements, please separate with commas. (uppercase, lowercase, numbers, special)");
var passLengthPrompt = prompt("How long should your password be? (Needs to be between 8 and 128 characters)");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
