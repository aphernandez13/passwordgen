var generateBtn = document.querySelector("#generate");

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

function generatePassword() {
  var special = "!@#$%^&*()_+";
  var numeric = "0123456789";
  var lowercase = "abcdefghijklmnopqrstuvwxyz";
  var uppercase = lowercase.toUpperCase();

  var options = {};

  options.length = parseInt(
    prompt("How long would you like our password to be?")
  );

  if (options.length < 8 || options.length > 128 || isNaN(options.length)) {
    alert("incorrect password length, please choose between 8 and 128");
    return "Invalid Parameters";
  }

  options.special = confirm("Would you like to use special characters?");
  options.numeric = confirm("Would you like to use numeric characters?");
  options.uppercase = confirm("Would you like to use uppercase characters?");
  options.lowercase = confirm("Would you like to use lowercase characters?");

  var password = "";
  for (var i = 0; i < options.length; i++) {
    if (options.special) {
      password += getRandomValue(special);
    }

    if (options.numeric) {
      password += getRandomValue(numeric);
    }

    if (options.uppercase) {
      password += getRandomValue(uppercase);
    }

    if (options.lowercase) {
      password += getRandomValue(lowercase);
    }
  }
  return password.substring(0, options.length);
}

function getRandomValue(str) {
  return str[Math.floor(Math.random() * str.length)];
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
