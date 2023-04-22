const createAccountButton = document.getElementById("createAccount");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirmPassword");
const inputs = document.querySelectorAll("input");

inputs.forEach(element => {
    element.addEventListener("input", function(){
        if (element.value == "") {
            element.classList.remove("validInput");
            element.classList.remove("invalidInput")
        } else if (element.validity.valid) {
            console.log("valid input")
            element.classList.remove("invalidInput");
            element.classList.add("validInput");
        } else {
            element.classList.add("invalidInput")
        }
        
    })
});
password.addEventListener("input", function(){      // client side password validation
    if (password.validity.patternMismatch) {
        password.setCustomValidity("Minimum 8 characters, at least one letter and one number");
      } else {
        password.setCustomValidity("");
        password.classList.remove("invalidInput");
        password.classList.add("validInput");
      }
})
confirmPassword.addEventListener("input", function(){
    if (confirmPassword.value != password.value){
        confirmPassword.setCustomValidity("The two passwords must match");
        confirmPassword.classList.add("invalidInput");
    } else {
        confirmPassword.setCustomValidity("");
        confirmPassword.classList.remove("invalidInput");
        confirmPassword.classList.add("validInput");
    }
})



createAccountButton.addEventListener("click", function(){  // debugging function
    console.log(password.value, confirmPassword.value)
});


