// Assignment code here
var pwLength = 8;
var lowercase = "abcdefghijklmnopqrstuvwxyz";
var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numbers = "0123456789";
var symbols = " !@#$%^&*()_-+=,.<>?~`/;:";
var charCount = "";

var characterSelect = function() {
  var charCount = "";
  var lowercaseConfirm = window.confirm("Would you like to include lowercase letters?");
  if (lowercaseConfirm) {
    var charCount = charCount.concat(lowercase);
  }
  var uppercaseConfirm = window.confirm("Would you like to include uppercase letters?");
  if (uppercaseConfirm) {
    var charCount = charCount.concat(uppercase);
  }
  var numbersConfirm = window.confirm("Would you like to include numbers?");
  if (numbersConfirm) {
    var charCount = charCount.concat(numbers);
  }
  var symbolsConfirm = window.confirm("Would you like to include symbols?");
  if (symbolsConfirm) {
    var charCount = charCount.concat(symbols);
  }
  console.log(charCount);
  if (!charCount) {
    window.alert("Please choose at least one character type.");
    characterSelect();
  }
  else {
    return charCount;
  }
}

var generatePassword = function() {
  //get password length
  pwLength = window.prompt("How many characters would you like your password to be? Choose between 8 and 128 characters.");
  pwLength = parseInt(pwLength);

  if (!pwLength || pwLength < 8 || pwLength > 128) {
    window.alert("Please enter a whole number between 8 and 128.")
    generatePassword();
  };

  //ask if user wants uppercase/lowercase/numbers/symbols
  var charCount = characterSelect();
  console.log(charCount);
  var password = "";
  //generate password
  var newChar = "";
  for (i = 0; i < pwLength; i++) {
    newChar = charCount.charAt(Math.floor(Math.random() * charCount.length));
    password = password.concat(newChar);
    console.log(password);
  };
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
