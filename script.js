// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");
    
    passwordText.value = password;
    
}
// The characters needed to make the random password
let lowerCase = "abcdefghijklmnopqrstuvwxyz";
let upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let numbers = "1234567890";
let specialChar = "!@#$%^&*():;?{}";

function generatePassword() {
    
    let newPassword = "";
    let passwordSet = "";

// Asks user how many characters they want their password to be
    let inputLength = prompt("How many characters would you like?");

    if (Number(inputLength < 8) | Number(inputLength > 128)) {
        alert("Enter a number between 8 and 128");
    }

    let lowerCaseInput = confirm("Do you want lowercase letters?");

    if (lowerCaseInput) {
        passwordSet += lowerCase;
    }

    let upperCaseInput = confirm("Do you want uppercase letters?");

    if (upperCaseInput) {
        passwordSet += upperCase;
    }
    let numberInput = confirm("Do you want numbers?");

    if (numberInput) {
        passwordSet += numbers;
    }
    let specialCharInput = confirm("Do you want special characters?");

    if (specialCharInput) {
        passwordSet += specialChar;
    }

    if (Number(inputLength >= 8) | Number(inputLength <= 128)) {
     for (let i = 0; i < inputLength; i++) {
         newPassword += passwordSet.charAt(Math.floor(Math.random() * passwordSet.length));      
     };   
    }

    return newPassword;
    
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
