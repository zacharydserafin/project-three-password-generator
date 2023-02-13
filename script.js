// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var passwordText = document.querySelector("#password");

  function generatePassword() {
    var lowercase = "abcdefghijklmnopqrstuvwxyz";
    var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var number = "1234567890";
    var special = "!#$%&'()*+,-./:;<=>?@[]^_`{|}~";
    
    // 4/4 options selected
    if (lowercaseChoice === "yes" && uppercaseChoice === "yes" && numberChoice === "yes" && specialChoice === "yes") {
      var AllFour = lowercase.concat(uppercase, number, special);
      var password = [...window.crypto.getRandomValues(new Uint32Array(lengthChoice))]
        .map(x => AllFour[x % AllFour.length])
        .join('');
      passwordText.value = password;
    
    // 3/4 options selected
    } else if (lowercaseChoice === "yes" && uppercaseChoice === "yes" && numberChoice === "yes" && specialChoice === "no") {
      var AllButSpecial = lowercase.concat(uppercase, number);
      var password = [...window.crypto.getRandomValues(new Uint32Array(lengthChoice))]
        .map(x => AllButSpecial[x % AllButSpecial.length])
        .join('');
      passwordText.value = password;
    } else if (lowercaseChoice === "yes" && uppercaseChoice === "yes" && numberChoice === "no" && specialChoice === "yes") {
      var AllButNumber = lowercase.concat(uppercase, special);
      var password = [...window.crypto.getRandomValues(new Uint32Array(lengthChoice))]
        .map(x => AllButNumber[x % AllButNumber.length])
        .join(''); 
      passwordText.value = password;
    } else if (lowercaseChoice === "yes" && uppercaseChoice === "no" && numberChoice === "yes" && specialChoice === "yes") {
      var AllButUppercase = lowercase.concat(number, special);
      var password = [...window.crypto.getRandomValues(new Uint32Array(lengthChoice))]
        .map(x => AllButUppercase[x % AllButUppercase.length])
        .join(''); 
      passwordText.value = password;
    } else if (lowercaseChoice === "no" && uppercaseChoice === "yes" && numberChoice === "yes" && specialChoice === "yes") {
      var AllButLowercase = uppercase.concat(number, special);
      var password = [...window.crypto.getRandomValues(new Uint32Array(lengthChoice))]
        .map(x => AllButLowercase[x % AllButLowercase.length])
        .join(''); 
      passwordText.value = password;
    
    // 2/4 options selected
    } else if (lowercaseChoice === "yes" && uppercaseChoice === "yes" && numberChoice === "no" && specialChoice === "no") {
      var UpperAndLowerOnly = lowercase.concat(uppercase);
      var password = [...window.crypto.getRandomValues(new Uint32Array(lengthChoice))]
        .map(x => UpperAndLowerOnly[x % UpperAndLowerOnly.length])
        .join(''); 
      passwordText.value = password;
    } else if (lowercaseChoice === "no" && uppercaseChoice === "yes" && numberChoice === "yes" && specialChoice === "no") {
      var UpperAndNumberOnly = uppercase.concat(number);
      var password = [...window.crypto.getRandomValues(new Uint32Array(lengthChoice))]
        .map(x => UpperAndNumberOnly[x % UpperAndNumberOnly.length])
        .join(''); 
      passwordText.value = password;
    } else if (lowercaseChoice === "no" && uppercaseChoice === "no" && numberChoice === "yes" && specialChoice === "yes") {
      var SpecialAndNumberOnly = special.concat(number);
      var password = [...window.crypto.getRandomValues(new Uint32Array(lengthChoice))]
        .map(x => SpecialAndNumberOnly[x % SpecialAndNumberOnly.length])
        .join(''); 
      passwordText.value = password;
    } else if (lowercaseChoice === "yes" && uppercaseChoice === "no" && numberChoice === "no" && specialChoice === "yes") {
      var SpecialAndLowerOnly = special.concat(lowercase);
      var password = [...window.crypto.getRandomValues(new Uint32Array(lengthChoice))]
        .map(x => SpecialAndLowerOnly[x % SpecialAndLowerOnly.length])
        .join('');
      passwordText.value = password;
    } else if (lowercaseChoice === "yes" && uppercaseChoice === "no" && numberChoice === "yes" && specialChoice === "no") {
      var NumberAndLowerOnly = number.concat(lowercase);
      var password = [...window.crypto.getRandomValues(new Uint32Array(lengthChoice))]
        .map(x => NumberAndLowerOnly[x % NumberAndLowerOnly.length])
        .join(''); 
      passwordText.value = password;
    } else if (lowercaseChoice === "no" && uppercaseChoice === "yes" && numberChoice === "no" && specialChoice === "yes") {
      var UpperAndSpecialOnly = special.concat(uppercase);
      var password = [...window.crypto.getRandomValues(new Uint32Array(lengthChoice))]
        .map(x => UpperAndSpecialOnly[x % UpperAndSpecialOnly.length])
        .join(''); 
      passwordText.value = password;
    
    // 1/4 options selected
    } else if (lowercaseChoice === "yes" && uppercaseChoice === "no" && numberChoice === "no" && specialChoice === "no") {
      var password = [...window.crypto.getRandomValues(new Uint32Array(lengthChoice))]
        .map(x => lowercase[x % lowercase.length])
        .join(''); 
      passwordText.value = password;
    } else if (lowercaseChoice === "no" && uppercaseChoice === "yes" && numberChoice === "no" && specialChoice === "no") {
      var password = [...window.crypto.getRandomValues(new Uint32Array(lengthChoice))]
        .map(x => uppercase[x % uppercase.length])
        .join(''); 
      passwordText.value = password;
    } else if (lowercaseChoice === "no" && uppercaseChoice === "no" && numberChoice === "yes" && specialChoice === "no") {
      var password = [...window.crypto.getRandomValues(new Uint32Array(lengthChoice))]
        .map(x => number[x % number.length])
        .join(''); 
      passwordText.value = password;
    } else if (lowercaseChoice === "no" && uppercaseChoice === "no" && numberChoice === "no" && specialChoice === "yes") {
      var password = [...window.crypto.getRandomValues(new Uint32Array(lengthChoice))]
        .map(x => special[x % special.length])
        .join(''); 
      passwordText.value = password;
    
    // This line should never run. If it does, check for error in prompt series
    } else {
      var password = "Something went wrong. Please try again!";
      passwordText.value = password;
    }
  }

  // Prompt Series
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

  // Runs the generatePassword function as long as at least one option was selected
  if (lowercaseChoice === "no" && uppercaseChoice === "no" && numberChoice === "no" && specialChoice === "no") {
    window.alert("You need to say yes at least once. Please try again!");
    return;
  } else {
    generatePassword();
  }
}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword)
