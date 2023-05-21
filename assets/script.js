// Assignment code here

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

//this 2-dimensional array is where I'm going to draw random characters from
var passCharRefArray = [
  "abcdefghijklmnopqrstuvwxyz".split(""), //lowercase array, lInclude
  "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split(""), // uppercase array, uInclude
  "0123456789".split(""), //numerical array, nInclude
  " !\"#$%&'()*+,-./:;<=>?@[]^_`{|}~".split(""), //sepcial character array, sInclude. You can change this string to decide what special characters are and are not allowed. I allowed all of them to start with
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
    passLength *= 1; //Changes passLength to a number type, allows to check later for NaN to sanitize inputs. Found with lots of experimentation
    passLength = Math.floor(passLength); //Strips away decimals
    //exits creation if passlength is not a number
    if (isNaN(passLength)) {
      alert("Please only enter numbers");
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

function generatePassword(uInclude, lInclude, nInclude, sInclude, passLength) {
  var finishedPassword = "";
  var charPossibilityArray = ["intentionally left blank"]; //I couldn't find a way to just push elements onto an empty array, which is what I wanted to do in the first place. I decided instead to just make a burner array and then delete it later then unshift
  if (sInclude === true) {
    charPossibilityArray.unshift(passCharRefArray[3]);
  }
  if (nInclude === true) {
    charPossibilityArray.unshift(passCharRefArray[2]);
  }
  if (uInclude === true) {
    charPossibilityArray.unshift(passCharRefArray[1]);
  }
  if (lInclude === true) {
    charPossibilityArray.unshift(passCharRefArray[0]);
  }
  charPossibilityArray.pop(); //delete the placeholder array character
  var NumOfCharTypes = charPossibilityArray.length; //get the number of character types the user selected for looping purposes later
  var containsAll = false;
  var falseCounter = 0;
  while (containsAll === false) {
    var underConstructionPassword = ""; //empties out password under construction if it does not pass validity
    var charTypePickedCheck = [false, false, false, false]; // This will be used to make sure that if the user selected a character type, it is indeed represented in the password

    for (let i = 0; i < passLength; i++) {
      var charTypeChoice = Math.floor(Math.random() * NumOfCharTypes);
      var currentChar =
        charPossibilityArray[charTypeChoice][
          Math.floor(
            Math.random() * charPossibilityArray[charTypeChoice].length
          )
        ];
      underConstructionPassword += currentChar;
      charTypePickedCheck[charTypeChoice] = true; //Flags in an array that a character type was picked.
    }
    //this loops through and checks to ensure that each character type was picked, checking to see if the entry in charTypePickedCheck is flagged as true
    for (let i = 0; i < NumOfCharTypes; i++) {
      if (charTypePickedCheck[i] === false) {
        containsAll = false;
        falseCounter++;
        console.log(
          "Invalid password generated, will try again:" +
            underConstructionPassword
        );
        break;
      }
      containsAll = true;
    }
  }

  finishedPassword = underConstructionPassword;
  return finishedPassword;
}

//Here's where code actually starts executing===========================================================================
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
