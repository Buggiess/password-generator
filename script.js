// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  var count = Number(prompt("Please enter the amount of characters you would like in your password."));
  console.log(count);
  //limits the amount of characters your password can be
  if (count < 8 || count > 128) {
    alert("Password must be at least 8 characters.");

    return "";
  }
 
  //character pool
  var letters = "abcdefghijklmnopqrstuvwxyz";
  var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var numbers = "1234567890";
  var specialChar = "!#$%&'()*+,-./:;<=>?@[]^_`{}|~";
  
  var genPassword = "";
  //character pool by default only contains letters
  var charPool = letters;

//each if statement will ask if you would like to use the other sets in your password
if (confirm("Would you like to use uppercase letters?")) {
  charPool += uppercase;
}

if (confirm("Would you like to use numbers?")) {
  charPool += numbers;
}

if (confirm("Would you like to use special characters?")) {
  charPool += specialChar;
}

//randomizes the characters that you have based on which characters you want in your password
  for (var i = 0; i < count; i++) {
    var random = Math.floor(Math.random() * charPool.length);
    genPassword += charPool[random];
  }
  console.log(genPassword);
  return genPassword;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
