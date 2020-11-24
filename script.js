// Assignment Code
var generateBtn = document.querySelector("#generate");

// Adds the generated password to the text area with #password
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");
    
    passwordText.value = password;
    
}
// The characters needed to make the random password
let lowerCase = "abcdefghijklmnopqrstuvwxyz";
let upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let numbers = "1234567890";
let specialChar = "!#$%&'()*+,-./:;<=>?@[]^_`{|}~";

function generatePassword() {
    
    let newPassword = "";
    let passwordSet = "";

// Asks user how many characters they want their password to be
    let inputLength = prompt("How many characters would you like in your password?");

// Verifies the input of the user, returns nothing if criteria isn't met
    if (Number(inputLength < 8) | Number(inputLength > 128) | isNaN(inputLength)) {
        alert("Enter a number between 8 and 128");
        return passwordSet;
    }

// Asks user if they want lowercase letters added to the random password
    let lowerCaseInput = confirm("Do you want lowercase letters?");

    if (lowerCaseInput) {
        passwordSet += lowerCase;
    }

// Asks user if they want uppercase letters added to the random password
    let upperCaseInput = confirm("Do you want uppercase letters?");

    if (upperCaseInput) {
        passwordSet += upperCase;
    }

// Asks user if they want numbers added to the random password
    let numberInput = confirm("Do you want numbers?");

    if (numberInput) {
        passwordSet += numbers;
    }

// Asks user if they want special characters added to the random password
    let specialCharInput = confirm("Do you want special characters?");

    if (specialCharInput) {
        passwordSet += specialChar;
    }

// Tells user to select at least one character type
    if (passwordSet === "") {
        alert("Please select at least one type of character you would like to use")
    }

// If length criteria is met and at least one char type is selected, 
// runs a for loop to determine random password based on user's selections
    if (Number(inputLength >= 8) | Number(inputLength <= 128)) {
     for (let i = 0; i < inputLength; i++) {
         newPassword += passwordSet.charAt(Math.floor(Math.random() * passwordSet.length));      
     };   
    }

    return newPassword;
    
}

// Adds event listener to generate button
generateBtn.addEventListener("click", writePassword);
