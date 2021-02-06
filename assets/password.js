// We define the avalibale character types //
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specialCharacters = ["!", "@", "#", "$", "%", "^", "&", "*", "?"];

// We define user desire character type //
var characterTypes = [];

// We ask the user how long they want their password //
var passwordLength;

// We create a function that gather Information from the user //
function userPrompt() {
    password = '';
    document.getElementById("messageInput").value = "";

    // We reset the desired character types //
    characterTypes = [];
    randomlyselectedArray = "";
    randomlyselectedCharacter = "";

    // We ask the user how long they want thier password make sure the password between 8 - 128 //
    passwordLength = prompt("How many characters do you want your password to be?")

    if (passwordLength < 8 || passwordLength > 128) {
        //if it is not between 8 and 128 we alert them of their error and must be a number // 
        alert("Enter number between 8-128")
        window.location.reload();
    }else if (isNaN(passwordLength)){
        alert("Must be number");
        window.location.reload();
        //we also start the user info gathering over again //
        userPrompt();
    }else {
        // We ask which charter type they want //
        userUpperCase = confirm("Do you want Uppercase letters?");
        userLowerCase = confirm("Do you want Lowercase letters?");
        userNumbers = confirm("Do you want Numbers?");
        userSpecialCharacters = confirm("Do you want Special Characters?");

        // If they select one of the Character types. We push it to character type array //
        if (userUpperCase === true) {
            characterTypes.push(upperCase);
        }
        if (userLowerCase === true) {
            characterTypes.push(lowerCase);
        }
        if (userNumbers === true) {
            characterTypes.push(numbers);
        }
        if (userSpecialCharacters === true) {
            characterTypes.push(specialCharacters);
        }
        //  ensure that the user has selected at least one Character type //
        if (characterTypes.length < 2) {
            alert("Select more than one character for security")
            userPrompt()
        } else {

            for (let i = 0; i < passwordLength; i++) {
                randomArray(characterTypes);
                password += randomChar(randomlyselectedArray);
            }
            //  Password = passwordArr.join(""); //
            document.getElementById("messageInput").value = password;

        }
    }
}



// Randomize password // 
function randomArray(array) {
    var randomIndex = Math.floor(Math.random() * array.length);
    randomlyselectedArray = array[randomIndex];
}

function randomChar(arr) {
    var randomIndex = Math.floor(Math.random() * arr.length);
    randomlyselectedCharacter = arr[randomIndex]
    console.log("random character: " + randomlyselectedCharacter);
    return randomlyselectedCharacter;

}
