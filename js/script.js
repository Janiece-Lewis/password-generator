// Assignment Code

//array for character types in password
var upperLetters = ["A", "B", "C", "D", "E", "F", "G", "H"];
var lowerLetters = ["i", "j", "k", "l", "m", "n", "o", "p"];
var nums = ["1", "2", "3", "4", "5", "6", "7", "8"];
var specialChar = ["!", "%", "#", "@", "*", "$", "&", "_"];
// a variable to target our 'generate password button'
var generateBtn = document.querySelector("#generate");

//added function to generate password

function generatePassword() {
  // prompt method let's us ask user about length of password
  var passwordlength = prompt('How long would you like your password?');

  //space for password options
  var passwordOptions = []

  //conditional statement for our password to have a length of atleast 8 characters and no more than 128 characters.Alerts user otherwise.
  if (passwordlength < 8 || passwordlength > 128) {
    alert('Your password must be between 8~128 characters')

    //to exit function
    return;
  }

  // to confirm what character types user would like in password
  var uppercase = confirm("Do you want uppercase letters in your password?");
  var lowercase = confirm("Do you want lowercase letters in your password?");
  var numbers = confirm("Do you want numbers in your password?");
  var specialCharacters = confirm("Do you want special characters in your password?");

  //to create new array for our password. concat method to pull items from specific array
  if (uppercase === true) {
    passwordOptions = passwordOptions.concat(upperLetters);

  }
  if (lowercase === true) {
    passwordOptions = passwordOptions.concat(lowerLetters);
  }
  if (numbers === true) {
    passwordOptions = passwordOptions.concat(nums);
  }
  if (specialCharacters === true) {
    passwordOptions = passwordOptions.concat(specialChar);
  }
  // place for our string (password)
  var password = ""
  // for loop to iterate through arrays. added 'character' var to randomly select items in array
  for (var i = 0; i < passwordlength; i++) {
    var character = passwordOptions[Math.floor(Math.random() * passwordOptions.length)];
    //adds our random item from array to our 'password'.
    password += character;
  }
  return password;

}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  //allows user to see password in browser
  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
