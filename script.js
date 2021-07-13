// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {
    console.log("generatePasowrd == go");
    getRequirements();
    var reqs = getRequirements.passwordRequirements;
    var passwordString = passwordString( reqs.passLength, reqs.uppercase, reqs.lowercase, reqs.numbers, reqs.specialChar )
    alert(passwordString);
}

function passwordString(passLength, uppercase, lowercase, numbers, special) {
  console.log("passwordString == go");
  var generatedPaswordString = "";
  var uppercaseChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var lowercaseChar = "abcdefghijklmnopqrstuvwxyz";
  var numberChar = "1234567890";
  var specialChar = "!@#$%^&*()_+-={}[]:;<>,.?/";
  var usableChar = ""
  if (uppercaseChar === true) {
    usableChar = usableChar + uppercaseChar;
  }
  if (lowercaseChar === true) {
    usableChar = usableChar + lowercaseChar;
  }
  if (numberChar === true) {
    usableChar = usableChar + numberChar;
  }
  if (specialChar === true) {
    usableChar = usableChar + specialChar;
  }

  for (var i = 0; i < password; i++) {
    generatedPaswordString += usableChar.charAt(Math.floor(Math.random() * (usableChar.length) ));
  }
  return generatedPaswordString;
}

function getRequirements() {
  console.log("getRequirements");
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
  console.log("writePassword === go");
    var password = generatePassword();
    var passwordText = document.querySelector("#password");
    passwordText.value = password;

}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
