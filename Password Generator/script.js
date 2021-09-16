// Assignment Code
var generateBtn = document.querySelector("#generate");

var upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
var lowerCase = 'abcdefghijklmnopqrstuvwxyz'
var numeric = '0123456789'
var specChar = '~!@#$%^&*()_=+`-[]{}|;:?/.>,<'

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword() {

  var prefer = ''
  var passwordLength = prompt('How many characters do you need for your password? Please enter a number between 8 and 128.');
  if ( passwordLength < 8 || passwordLength > 128 || isNaN(passwordLength) ) {
    alert('Please enter a number between 8 and 128');
    return;
  }
  
  var uppercaseLetters = confirm('Would you like to use uppercase letter in your password?');
  if (uppercaseLetters) {
    prefer += upperCase;
  }

  var lowercaseLetters = confirm('Would you like to use lowercase letters in your password?');
  if (lowercaseLetters) {
    prefer += lowerCase;
  }

  var numericPass = confirm('Would you like to use numbers in your password?');
  if (numericPass) {
    prefer += numeric;
  }

  var specCharPass = confirm('Would you like to use special characters in your password?');
  if (specCharPass) {
    prefer += specChar;
  }
  if (!uppercaseLetters && !lowercaseLetters && !numericPass && !specCharPass) {
    alert('You must select at least one type of character!');
  }

  var passwordString = ''
  for (var i = 0; i <= passwordLength; i++) {
  passwordString += prefer.charAt(Math.floor(Math.random() * prefer.length));
  }
  
  return passwordString
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
