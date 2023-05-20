// Assignment code here

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

//this 2-dimensional array is where I'm going to draw random characters from
var passCharRefArray = [
  ["abcdefghijklmnopqrstuvwxyz".split("")],
  ["ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("")],
  ["0123456789".split("")],
  ["!\"#$%&'()*+,-./:;<=>?@[]^_`{|}~".split("")], //I made the specific decision to not include the space character. Including it would be a simple matter of just typing a space in this string of characters.
];

// Write password to the #password input
function writePassword() {
  var uInclude = false;
  var lInclude = false;
  var sInclude = false;
  var nInclude = false;
  var criteriaString = "a";
  var passLength = 0;
  var criteriaCheck = false;

  while (passLength < 8 || passLength > 128) {
    passLength = prompt(
      "Enter the desired character length of your password (8-128):"
    );

    if (passLength === null) {
      //exit with a message if you press the cancel button. Nothing more annoying than an endless prompt loop you want to leave
      alert("Operation canceled");
      return;
    }
  }

  while (criteriaCheck == false) {
    criteriaString = prompt(
      "Please type all criteria for your password. At least one criteria must be selected:\n" +
        "Type 'L' to include lowercase letters\n" +
        "Type 'U' to include uppercase letters\n" +
        "Type 'N' to include numerals\n" +
        "Type 'S' to include special characters"
    );

    if (criteriaString === null) {
      //exit with a message if you press the cancel button. Nothing more annoying than an endless prompt loop you want to leave
      alert("Operation canceled");
      return;
    }
    criteriaString = criteriaString.toUpperCase();
    criteriaCheck = criteriaChecker(criteriaString);
    uInclude = criteriaString.includes("U");
    lInclude = criteriaString.includes("L");
    nInclude = criteriaString.includes("N");
    sInclude = criteriaString.includes("S");
  }
  // console.log("made it out of criteria check");

  //will pass all password criteria to the password generator to do the actual crunching
  var password = generatePassword(
    uInclude,
    lInclude,
    nInclude,
    sInclude,
    passLength
  );

  //actually insert password into text box
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}
//THIS IS WHERE YOU LEFT OFF. Need to generate password. Try building a new array to pull from using the xInclude booleans, then iterate random number generators multiplied by each individual
function generatePassword(uInclude, lInclude, nInclude, sInclude, passLength) {
  // alert("entered 'generatePassword()'");
  var finishedPassword = "00000000";
  console.log([uInclude, lInclude, nInclude, sInclude, passLength]);
  return finishedPassword;
}

//this just performs the conditional statement to make sure the user entered at least one option for password criteria
function criteriaChecker(inputString) {
  if (
    inputString.includes("U") ||
    inputString.includes("L") ||
    inputString.includes("N") ||
    inputString.includes("S")
  ) {
    return true;
  } else {
    return false;
  }
}
//Here's where code actually starts executing===========================================================================
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
