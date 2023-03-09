// Function to validate inputs
function validateInputs() {
    let flag_var = true;
    const redBorderColor = "#C9140B";
    const normalBorderColor = "#ececec";

    // Taking inputs from textbox and storing in variables
    let fname = document.getElementById("fname");
    let lname = document.getElementById("lname");
    let email = document.getElementById("email");
    let contact_no = document.getElementById("contact-no");
    let pin_code = document.getElementById("pin-code");
    let card_no = document.getElementById("card-no");
    let card_expiry = document.getElementById("card-expiry");
    let cvv = document.getElementById("cvv");

    // ----------------- START :: First name validation ---------------------- //
    // First name empty input validation
    if(fname.value.trim()=="") {
        fill_fname = document.querySelector(".first-name > .err-msg");
        fill_fname.innerHTML = "First Name is required";
        fname.style.borderColor = redBorderColor;
        flag_var = false;
    }
    // First name regex validation
    else if((/^(?=.{1,30}$)([-'\w]+\s)*[-'\w]+$/g).test(fname.value)==false) {
        fill_fname.innerHTML = "First Name is not valid";
        fname.style.borderColor = redBorderColor ;
        flag_var = false;
    }
    // Code to remove errors if input is valid
    else {
        fname.style.borderColor = normalBorderColor;
        fill_fname.innerHTML = "";
    }
    // ----------------- END :: First name validation ---------------------- //

    // ----------------- START :: Last name validation ---------------------- //
    // Last name empty input validation
    if(lname.value.trim()=="") {
        fill_lname = document.querySelector(".last-name > .err-msg");
        fill_lname.innerHTML = "Last Name is required";
        lname.style.borderColor = redBorderColor ;
        flag_var = false;
    }
    // Last name regex validation
    else if((/^(?=.{1,30}$)([-'\w]+\s)*[-'\w]+$/g).test(lname.value)==false) {
        fill_lname.innerHTML = "Last Name is not valid";
        lname.style.borderColor = redBorderColor ;
        flag_var = false;
    }
    // Code to remove errors if input is valid
    else {
        console.log(fname.value);
        lname.style.borderColor = normalBorderColor;
        fill_lname.innerHTML = "";
    }
    // ----------------- END :: Last name validation ---------------------- //

    // ----------------- START :: Email validation ---------------------- //
    // Email empty input validation
    if(email.value.trim()=="") {
        fill_email = document.querySelector(".email > .err-msg");
        fill_email.innerHTML = "Email Address is required";
        email.style.borderColor = redBorderColor ;
        flag_var = false;
    }
    // Email regex validation
    else if((/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/).test(email.value)==false) {
        fill_email.innerHTML = "Email Address is not valid";
        email.style.borderColor = redBorderColor ;
        flag_var = false;
    }
    // Code to remove errors if input is valid
    else {
        email.style.borderColor = normalBorderColor;
        fill_email.innerHTML = "";
    }
    // ----------------- END :: Email validation ---------------------- //

    // ----------------- START :: Contact no validation ---------------------- //
    // Contact no empty input validation
    if(contact_no.value.trim()=="") {
        fill_contact_no = document.querySelector(".contact-no > .err-msg");
        fill_contact_no.innerHTML = "Contact Number is required";
        contact_no.style.borderColor = redBorderColor ;
        flag_var = false;
    }
    // Contact no. regex validation
    else if((/^\d{10}$/).test(contact_no.value)==false) {
        fill_contact_no.innerHTML = "Contact Number is not valid";
        contact_no.style.borderColor = "redBorderColor ";
        flag_var = false;
    }
    // Code to remove errors if input is valid
    else {
        contact_no.style.borderColor = normalBorderColor;
        fill_contact_no.innerHTML = "";
    }
    // ----------------- END :: Contact no validation ---------------------- //

    // ----------------- START :: PIN Code validation ---------------------- //
    // PIN Code empty input validation
    if(pin_code.value.trim()=="") {
        fill_pin_code = document.querySelector(".pin-code > .err-msg");
        fill_pin_code.innerHTML = "PIN Code is required";
        pin_code.style.borderColor = redBorderColor ;
        flag_var = false;
    }
    // PIN Code regex validation
    else if((/^\d{6}$/).test(pin_code.value)==false) {
        fill_pin_code.innerHTML = "PIN Code is not valid";
        pin_code.style.borderColor = redBorderColor ;
        flag_var = false;
    }
    // Code to remove errors if input is valid
    else {
        pin_code.style.borderColor = normalBorderColor;
        fill_pin_code.innerHTML = "";
    }
    // ----------------- END :: PIN Code validation ---------------------- //

    // ----------------- START :: Card no validation ---------------------- //
    // Card no empty input validation
    if(card_no.value.trim()=="") {
        fill_card_no = document.querySelector(".card-no > .err-msg");
        fill_card_no.innerHTML = "Card Number is required";
        card_no.style.borderColor =redBorderColor ;
        flag_var = false;
    }
    // Card no. regex validation
    else if((/^\d{16}$/).test(card_no.value)==false) {
        fill_card_no.innerHTML = "Card Number is not valid";
        card_no.style.borderColor = redBorderColor ;
        flag_var = false;
    }
    // Code to remove errors if input is valid
    else {
        card_no.style.borderColor = normalBorderColor;
        fill_card_no.innerHTML = "";
    }
    // ----------------- END :: Card no validation ---------------------- //

    // ----------------- START :: Card expiry validation ---------------------- //
    // Card expiry empty input validation
    if(card_expiry.value.trim()=="") {
        fill_card_expiry = document.querySelector(".card-expiry > .err-msg");
        fill_card_expiry.innerHTML = "Card Expiry is required";
        card_expiry.style.borderColor = redBorderColor ;
        flag_var = false;
    }
    // Card expiry regex validation
    else if((parseInt(card_expiry.value)<2023) || (!(/^\d{4}$/).test(card_expiry.value))) {
        fill_card_expiry.innerHTML = "Card Expiry is not valid";
        card_expiry.style.borderColor =redBorderColor ;
        flag_var = false;
    }
    // Code to remove errors if input is valid
    else {
        card_expiry.style.borderColor = normalBorderColor;
        fill_card_expiry.innerHTML = "";
    }
    // ----------------- END :: Card expiry validation ---------------------- //

    // ----------------- START :: CVV validation ---------------------- //
    // CVV empty input validation
    if(cvv.value.trim()=="") {
        fill_cvv = document.querySelector(".cvv > .err-msg");
        fill_cvv.innerHTML = "CVV is required";
        cvv.style.borderColor = redBorderColor ;
        flag_var = false;
    }
    // CVV regex validation
    else if((/^\d{3,4}$/).test(cvv.value)==false) {
        fill_cvv.innerHTML = "CVV is not valid";
        cvv.style.borderColor = redBorderColor ;
        flag_var = false;
    }
    // Code to remove errors if input is valid
    else {
        cvv.style.borderColor = normalBorderColor;
        fill_cvv.innerHTML = "";
    }
    // ----------------- END :: CVV validation ---------------------- //

    return flag_var;
}