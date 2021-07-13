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

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
