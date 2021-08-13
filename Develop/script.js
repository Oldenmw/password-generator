// Assignment code here
var length = 8;
var lowercase = "abcdefghijklmnopqrstuvwxyz";
var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numbers = "0123456789";
var symbols = " !@#$%^&*()_-+=,.<>?~`/;:";

var generatePassword = function() {
  //get password length
  length = window.prompt("How many characters would you like your password to be? Choose between 8 and 128 characters.");
  length = parseInt(length);
  console.log(length);

  if (!length || length < 8 || length > 128) {
    window.alert("Please enter a whole number between 8 and 128.")
    generatePassword();
  };

  //ask if user wants uppercase/lowercase/numbers/symbols
  
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
