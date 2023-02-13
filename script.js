// Assignment Code

//array for character type
var upperLetters=["A", "B", "C", "D", "E", "F", "G", "H"]
var lowerLetters=["i", "j", "k", "l", "m", "n", "o", "p"]
var nums=["1", "2", "3", "4", "5", "6", "7", "8"]
var specialChar=["!", "%", "#", "@", "*", "$", "&", "_"]
//var for input
var generateBtn = document.querySelector("#generate");

//added function to generate password

function generatePassword() {

  var passwordlength = prompt('How long would you like your password?')

  //space for password options
  var passwordOptions = []

  //if statement for length of atleast 8 characters and no more than 128 characters
  if (passwordlength < 8 || passwordlength > 128) {
    alert('Your password must be between 8~128 characters')

    //to exit function
    return;
  }

  // to confirm character types
  var uppercase = confirm("Do you want uppercase letters in your password?");
  var lowercase = confirm("Do you want lowercase letters in your password?");
  var numbers = confirm("Do you want numbers in your password?");
  var specialCharacters = confirm("Do you want special characters in your password?");

  //to create new array for our password
  if (uppercase===true) {
    passwordOptions=passwordOptions.concat(upperLetters)
  }
  if (lowercase===true) {
    passwordOptions=passwordOptions.concat(lowerLetters)
  }
  if (numbers===true) {
    passwordOptions=passwordOptions.concat(nums)
  }
  if (specialCharacters===true) {
    passwordOptions=passwordOptions.concat(specialChar)
  }
  console.log(passwordOptions)

  // to iterate through arrays
  for (var i = 0; i < passwordOptions.length; i++) {
    console.log(passwordOptions[i]);
  }


}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
