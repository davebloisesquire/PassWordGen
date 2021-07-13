// Assignment Code
var generateBtn = document.querySelector("#generate");

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
  passLengthPrompt = parseInt(passLengthPrompt);
  if (passLengthPrompt >= 8 && passLengthPrompt <= 128) {
    passwordRequirements.passLength = passLengthPrompt;
    requirementsPrompt = requirementsPrompt.replace(" ", "");
    requirementsPrompt = requirementsPrompt.toLowerCase();
  } else {
    alert("Password length needs to be a number length needs to be between 8-128");
  }


  var requirementsArray = requirementsPrompt.split(",");
  passwordRequirements.uppercase = requirementsArray.includes("uppercase");
  passwordRequirements.lowercase = requirementsArray.includes("lowercase");
  passwordRequirements.numbers = requirementsArray.includes("numbers");
  passwordRequirements.specialChar = requirementsArray.includes("special");

  return passwordRequirements;
}

function passwordGenString(passLength, uppercase, lowercase, numbers, special) {
  var usableChar = "";
  var generatedPasswordString = "";
  var uppercaseChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var lowercaseChar = "abcdefghijklmnopqrstuvwxyz";
  var numberChar = "1234567890";
  var specialChar = "!@#$%^&*_+-=:;<>?/";

  if (uppercase === true) {
    usableChar = usableChar + uppercaseChar;
  } else {}
  if (lowercase === true) {
    usableChar = usableChar + lowercaseChar;
  } else {}
  if (numbers === true) {
    usableChar = usableChar + numberChar;
  } else {}
  if (special === true) {
    usableChar = usableChar + specialChar;
  } else {}

  for (var i = 0; i < passLength; i++) {
    generatedPasswordString = generatedPasswordString + usableChar.charAt(Math.floor(Math.random() * (usableChar.length)));
  }
  console.log(usableChar);
  return generatedPasswordString;
}

function generatePassword() {
  var reqs = getRequirements();
  var passwordString = passwordGenString(reqs.passLength, reqs.uppercase, reqs.lowercase, reqs.numbers, reqs.specialChar);
  console.log("generate password");
  console.log(passwordString);
  return passwordString;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;

}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
