// Function to validate inputs
function validateInputs() {
    flagVar = true;

    const redBorderColor = "#C9140B";
    const normalBorderColor = "#ececec";

    var fillFName = document.querySelector(".first-name > .err-msg");
    var fillLName = document.querySelector(".last-name > .err-msg");
    var fillEmail = document.querySelector(".email > .err-msg");
    var fillContactNo = document.querySelector(".contact-no > .err-msg");
    var  fillPinCode = document.querySelector(".pin-code > .err-msg");
    var  fillCardNo = document.querySelector(".card-no > .err-msg");
    var  fillCardExpiry = document.querySelector(".card-expiry > .err-msg");
    var  fillCVV = document.querySelector(".cvv > .err-msg");

    // Taking inputs from textbox and storing in variables
    let fName = document.getElementById("fname");
    let lName = document.getElementById("lname");
    let email = document.getElementById("email");
    let contactNo = document.getElementById("contact-no");
    let pinCode = document.getElementById("pin-code");
    let cardNo = document.getElementById("card-no");
    let cardExpiry = document.getElementById("card-expiry");
    let cvv = document.getElementById("cvv");

    // Validation function
    function validate(txtboxId, emptyErrMsg, regex, divName, notValidMsg, extraCondition) {
        // Checking if textbox is empty
        if(txtboxId.value.trim()=="") {
            divName.innerHTML = emptyErrMsg;
            txtboxId.style.borderColor = redBorderColor;
            flagVar = false;
        }
        // Regex validation
        else if(extraCondition || (regex).test(txtboxId.value)==false) {

            divName.innerHTML = notValidMsg;
            txtboxId.style.borderColor = redBorderColor ;
            flagVar = false;
        }
        // Code to remove errors if input is valid
        else {
            txtboxId.style.borderColor = normalBorderColor;
            divName.innerHTML = "";
        }
        return flagVar;
    }

    // Function calls
    validate(fName, "First Name is required", /^(?=.{1,30}$)([-'\w]+\s)*[-'\w]+$/g, fillFName, "First Name is not valid");
    validate(lName, "Last Name is required", /^(?=.{1,30}$)([-'\w]+\s)*[-'\w]+$/g, fillLName, "Last Name is not valid");
    validate(email, "Email Address is required", /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, fillEmail, "Email Address is not valid");
    validate(contactNo, "Contact Number is required", /^\d{10}$/, fillContactNo, "Contact Number is not valid");
    validate(pinCode, "PIN Code is required", /^\d{6}$/, fillPinCode, "PIN Code is not valid");
    validate(cardNo, "Card Number is required", /^\d{16}$/, fillCardNo,"Card Number is not valid");
    validate(cvv, "CVV is required", /^\d{3,4}$/, fillCVV, "CVV is not valid");
    validate(cardExpiry, "Card Expiry is required", /^\d{4}$/, fillCardExpiry, "Card Expiry is not valid", (parseInt(cardExpiry.value)<2023));

    return flagVar;
}
