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

var includes = {
  special: confirm("Do you want to include special characters?"),
  numeric: confirm("Do you want to include numeric characters?"),
  lowerCase: confirm("Do you want to include lowercase characters?"),
  upperCase: confirm("Do you want to include uppercase characters?"),
}


// Function to prompt user for password options
function getPasswordOptions(arr) {
  selectedCharacters.push(...arr);
}
while (Object.values(includes).every((v) => v === false)){
  alert("You need to include at least one character type!")
  includes.special = confirm("Do you want to include special characters?")
  includes.numeric = confirm("Do you want to include numeric characters?")
  includes.lowerCase = confirm("Do you want to include lowercase characters?")
  includes.upperCase = confirm("Do you want to include uppercase characters?")
}
if (includes.special===true){
  getPasswordOptions(specialCharacters)
}
if (includes.numeric===true){
  getPasswordOptions(numericCharacters)
}
if (includes.lowerCase===true){
  getPasswordOptions(lowerCasedCharacters)
}
if (includes.upperCase===true){
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
  var password = generatePassword(passwordLength);
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);
