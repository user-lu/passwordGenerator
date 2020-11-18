// Assignment Code
var generateBtn = document.querySelector("#generate");

let alphabet = "abcdefghijklmnopqrstuvwxyz"

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword() {

    let randomCharacters = Math.floor(Math.random()* alphabet.length);


    return randomCharacters;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
