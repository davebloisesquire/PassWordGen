// Assignment Code
var generateBtn = document.querySelector("#generate");
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;

}

function generatePassword() {
  var reqs = getRequirements();
  var passwordString = passwordGenString(reqs.passLength, reqs.uppercase, reqs.lowercase, reqs.numbers, reqs.specialChar);
  console.log("generate password");
  console.log(passwordString);
  return passwordString;
}

// this sets up the requirements for the generated password
function getRequirements() {
  //Sets up an object to hold the requirements
  var passwordRequirements = {
    uppercase: false,
    lowercase: false,
    numbers: false,
    specialChar: false,
    passLength: 0
  }


  // // grabbing specific requirements from user
  // var requirementsPrompt = prompt("State your requirements, please separate with commas. (uppercase, lowercase, numbers, special)");
  // // grabbing password length from user
  // var passLengthPrompt = prompt("How long should your password be? (Needs to be between 8 and 128 characters)");
  //
  // //length input validation (make sure that it's a number between 8-128)
  // passLengthPrompt = parseInt(passLengthPrompt);
  // if (typeof passLengthPrompt === "number" && passLengthPrompt >= 8 && passLengthPrompt <= 128) {
  //   passwordRequirements.passLength = passLengthPrompt;
  // } else {
  //   alert("Password length needs to be a number length needs to be between 8-128");
  // }
  //
  // //This formats the requirements into an array
  // requirementsPrompt = requirementsPrompt.replace(/\s/g, '');
  // requirementsPrompt = requirementsPrompt.toLowerCase();
  // console.log(requirementsPrompt);
  // var requirementsArray = requirementsPrompt.split(",");
  // passwordRequirements.uppercase = requirementsArray.includes("uppercase");
  // console.log(passwordRequirements.uppercase);
  // passwordRequirements.lowercase = requirementsArray.includes("lowercase");
  // console.log(passwordRequirements.lowercase);
  // passwordRequirements.numbers = requirementsArray.includes("numbers");
  // console.log(passwordRequirements.numbers);
  // passwordRequirements.specialChar = requirementsArray.includes("special");
  // console.log(passwordRequirements.special);


  passwordRequirements.passLength = document.getElementById("passlength").value

  passwordRequirements.uppercase = document.getElementById("uppercase").checked;
  console.log(passwordRequirements.uppercase);
  passwordRequirements.lowercase = document.getElementById("lowercase").checked;
  console.log(passwordRequirements.lowercase);
  passwordRequirements.numbers = document.getElementById("numbers").checked;
  console.log(passwordRequirements.numbers);
  passwordRequirements.specialChar = document.getElementById("special").checked;
  console.log(passwordRequirements.special);

  return passwordRequirements;
}

//This function generates the actual string
function passwordGenString(passLength, uppercase, lowercase, numbers, special) {
  //sets up the character sets for the various types of requirements
  var usableChar = "";
  var generatedPasswordString = "";
  var uppercaseChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var lowercaseChar = "abcdefghijklmnopqrstuvwxyz";
  var numberChar = "1234567890";
  var specialChar = " !\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~";

  //Adds character sets, if the requirements are there
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

  // assigns random characters from the character set based on required password length
  for (var i = 0; i < passLength; i++) {
    generatedPasswordString = generatedPasswordString + usableChar.charAt(Math.floor(Math.random() * (usableChar.length)));
  }
  console.log(usableChar);
  return generatedPasswordString;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
