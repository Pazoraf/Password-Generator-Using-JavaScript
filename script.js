// Array of special characters to be included in password
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];

var selectedCharacters = [];

var passwordLength = prompt("How many characters should your password consist of?");
while (passwordLength<8 || passwordLength >128){
  passwordLength = prompt("Your password needs to be between 8 and 128 characters")
}

var incSpecial = confirm("Do you want to include special characters?")
var incNumeric = confirm("Do you want to include numeric characters?")
var incLower = confirm("Do you want to include lowercase characters?")
var incUpper = confirm("Do you want to include uppercase characters?")



// Function to prompt user for password options
function getPasswordOptions(arr) {
  selectedCharacters.push(...arr);
}
while (incSpecial===false && incNumeric===false && incLower===false && incUpper===false){
  alert("You need to include at least one character type!")
  incSpecial = confirm("Do you want to include special characters?")
  incNumeric = confirm("Do you want to include numeric characters?")
  incLower = confirm("Do you want to include lowercase characters?")
  incUpper = confirm("Do you want to include uppercase characters?")
}
if (incSpecial===true){
  getPasswordOptions(specialCharacters)
}
if (incNumeric===true){
  getPasswordOptions(numericCharacters)
}
if (incLower===true){
  getPasswordOptions(lowerCasedCharacters)
}
if (incUpper===true){
  getPasswordOptions(upperCasedCharacters)
}

// Function for getting a random element from an array
function getRandom(arr) {
  return arr[(Math.floor(Math.random() * arr.length))];
}

// Function to generate password with user input
function generatePassword(l) {
  pswd= "";
  for(i=0;i<l;i++){
    pswd += getRandom(selectedCharacters)
  } return pswd
}

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);
generatePassword(passwordLength)
console.log(pswd)