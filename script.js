// Assignment code here
var number = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specialChar = ["!", "%", "&", ",", "*", "+", "-", ".", "/", "<", ">", "?", "~"];
var alphaLower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var alphaUpper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

// Variable confirms
var confirmLength = "";
var confirmSpecialCharacter;
var confirmNumericCharacter;
var confirmUpperCase;
var confirmLowerCase;

// Length of password
function generatePassword() {
    var confirmLength = (prompt("Choose how many characters you would like your password to have"));

while(confirmLength <= 7 || confirmLength >= 129) {
    alert("Password length must be between 8-128 characters");
    var confirmLength = (prompt("Choose how many characters you would like your password to have"));
}

var confirmSpecialCharacter = confirm("Click OK to confirm if you would like to have special charactes");
var confirmNumericCharacter = confirm("Click OK to confirm if you would like to have numeric characters");
var confirmLowerCase = confirm("Click OK to confirm if you would like to have lowercase characters");
var confirmUpperCase = confirm("Click OK to confirm if you would like to have uppercase characters");

while(confirmUpperCase === false && confirmLowerCase === false && confirmSpecialCharacter === false && confirmNumericCharacter === false) {
    alert("You must choose at least one password criteria");
    var confirmSpecialCharacter = confirm("Click ok to confir if you would like to include special characters");
    var confirmNumericCharacter = confirm("Click OK to confirm if you would like to have numeric characters");
    var confirmUpperCase = confirm("Click OK to confirm if you would like to have uppercase characters"); 
    var confirmLowerCase = confirm("Click OK to confirm if you would like to have lowercase characters");
}
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

