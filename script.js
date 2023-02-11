// Assignment Code
var generateBtn = document.querySelector("#generate");




// Write password to the #password input
function writePassword() {
  // var password = generatePassword();
  // var passwordText = document.querySelector("#password");
  
  // passwordText.value = password;

  // var lowercase = "abcdefghijklmnopqrstuvwxyz";
  // var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  // var numbers = "1234567890";
  // var special = " !#$%&'()*+,-./:;<=>?@[]^_`{|}~";

  // function generatePassword()





  var lowercaseChoice = window.prompt("Do you want your password to contain [LOWERCASE] letters? Please enter 'yes' or 'no'.")
  if (!lowercaseChoice) {
    return;
  } 
  lowercaseChoice = lowercaseChoice.toLowerCase();
  if (lowercaseChoice !== "yes" && lowercaseChoice !== "no") {
    window.alert("You need to enter 'yes' or 'no'. Please try again!");
    return writePassword();
  } else {
    window.alert("For [LOWERCASE] letters, you chose: " + lowercaseChoice);
  }
  console.log("Lowercase? " + lowercaseChoice);

  var uppercaseChoice = window.prompt("Do you want your password to contain [UPPERCASE] letters? Please enter 'yes' or 'no'.")
  if (!uppercaseChoice) {
    return;
  } 
  uppercaseChoice = uppercaseChoice.toLowerCase();
  if (uppercaseChoice !== "yes" && uppercaseChoice !== "no") {
    window.alert("You need to enter 'yes' or 'no'. Please try again!");
    return writePassword();
  } else {
    window.alert("For [UPPERCASE] letters, you chose: " + uppercaseChoice);
  }
  console.log("Uppercase? " + uppercaseChoice);

  var numberChoice = window.prompt("Do you want your password to contain [NUMBERS]? Please enter 'yes' or 'no'.")
  if (!numberChoice) {
    return;
  } 
  numberChoice = numberChoice.toLowerCase();
  if (numberChoice !== "yes" && numberChoice !== "no") {
    window.alert("You need to enter 'yes' or 'no'. Please try again!");
    return writePassword();
  } else {
    window.alert("For [NUMBERS], you chose: " + numberChoice);
  }
  console.log("Numbers? " + numberChoice);
  
  var specialChoice = window.prompt("Do you want your password to contain [SPECIAL CHARACTERS]? Please enter 'yes' or 'no'.")
  if (!specialChoice) {
    return;
  } 
  specialChoice = specialChoice.toLowerCase();
  if (specialChoice !== "yes" && specialChoice !== "no") {
    window.alert("You need to enter 'yes' or 'no'. Please try again!");
    return writePassword();
  } else {
    window.alert("For [SPECIAL CHARACTERS], you chose: " + specialChoice);
  }
  console.log("Special Characters? " + specialChoice);

  var lengthChoice = window.prompt("How many characters should your password be? Please choose a number between 8 and 128.")
  if (!lengthChoice) {
    return;
  }
  if (lengthChoice < 8 || lengthChoice > 128) {
    window.alert("You need to choose a number between 8 and 128. Please try again!");
    return writePassword();
  } else {
    window.alert("For character length, you chose: " + lengthChoice);
  }
  console.log("Character Length? " + lengthChoice);

  if (lowercaseChoice === "no" && uppercaseChoice === "no" && numberChoice === "no" && specialChoice === "no") {
    window.alert("You need to say yes at least once. Please try again!");
    return;
  } else {
    generatePassword();
  }
}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
