// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {
    getRequirements();
    alert("hi")
    alert(passwordRequirements.uppercase);
}

function getRequirements() {
    var passwordRequirements = {
        uppercase: false,
        lowercase: false,
        numbers: false,
        specialChar: false,
        passLength: 0
    }

    // grabbing specific requirements
    var requirementsPrompt = prompt("State your requirements, please separate with commas. (uppercase, lowercase, numbers, special)");
    // grabbing password length
    var passLengthPrompt = prompt("How long should your password be? (Needs to be between 8 and 128 characters)");

    //length input validation
    if (typeof passLength === number) {
      passLengthPrompt = parseInt(passLengthPrompt);
      if (passLengthPrompt >= 8 && passLengthPrompt <= 128) {
        passwordRequirements.passLength = passLengthPrompt;
        requirementsPrompt = requirementsPrompt.replace(" ", "");
        requirementsPrompt = requirementsPrompt.toLowerCase();
      } else {
        alert("Password length needs to be between 8-128")
      }

    } else {
      alert("Password length needs to be a number")
    }


    var requirementsArray = requirementsPrompt.split(",");
    passwordRequirements.uppercase = requirementsArray.includes("uppercase");
    passwordRequirements.lowercase = requirementsArray.includes("lowercase");
    passwordRequirements.numbers = requirementsArray.includes("numbers");
    passwordRequirements.specialChar = requirementsArray.includes("special");

    return passwordRequirements;
}
// Write password to the #password input
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;

}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
