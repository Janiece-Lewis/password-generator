// Assignment Code
var generateBtn = document.querySelector("#generate");

//added function to generate password

function generatePassword() {
  var passwordlength = prompt('How long would you like your password?')

  //if statement for length of atleast 8 characters and no more than 128 characters
  if (passwordlength < 8 || passwordlength > 128) {
    alert('Your password must be between 8~128 characters')

    //to exit function
    return;
  }

  //to confirm character types
  var uppercase = confirm("Do you want uppercase letters in your password?")
  var lowercase = confirm("Do you want lowercase letters in your password?")
  var numbers = confirm("Do you want numbers in your password?")
  var specialCharacters = confirm("Do you want special characters in your password?")
  console.log(numbers)

  if (uppercase===true)


}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
