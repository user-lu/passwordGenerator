// Assignment Code
var generateBtn = document.querySelector("#generate");


// Write password to the #password input
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");
    
    passwordText.value = password;
    
}

function generatePassword() {
    let alphabet = "abcdefghijklmnopqrstuvwxyz";
    // let upperCase = alphabet.toUpperCase();
    // let numbers = "123456789";
    // let specialChar = "!@#$%^&*():;?{}";
    randomPassword = "";

    for (let i = 0; i < 15; i++) {
        var randomChar = Math.floor(Math.random() * alphabet.length); 
        randomPassword += alphabet.charAt(randomChar)

    }
    
    return randomPassword;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
