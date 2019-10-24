// This script validates the content for a form based on specific  rules
// for each item 

window.onload = init;

function init() {
    var formsubmit = document.getElementById("submit");
    if (formsubmit) {
        formsubmit.onclick = checkForm;
        document.getElementById("fadeMeIn").style.opacity = 1;
    }
}

function checkForm() {
    // FIRSTNAME: required, at least two letters long
    var firstname = document.getElementById("firstname").value;
    var firstname_msg = document.getElementById("firstname_msg");
    var valid = true;

    if (firstname.length < 2) {
        firstname_msg.innerHTML = "First name should be at least 2 letters in length";
        firstname_msg.className = "error";
        valid = false;
    } else {
        firstname_msg.innerHTML = "";
        firstname_msg.className = "";
    }

    // FAMILYNAME: required, at least two letters long
    var familyname = document.getElementById("familyname").value;
    var familyname_msg = document.getElementById("familyname_msg");

    if (familyname.length < 2) {
        familyname_msg.innerHTML ="Family name should be at least 2 letters in length";
        familyname_msg.className = "error";
        valid = false;
    } else {
        familyname_msg.innerHTML = "";
        familyname_msg.className = "";
    }

    // EMAIL: Not required, but if not blank, then must be valid email address
    var email = document.getElementById("email").value;
    var email_msg = document.getElementById("email_msg");

    var emailRegExp = /^(\w+@[a-z\d]+?([a-z-\d_\.]*?)\.[a-z]{2,6})$/i;
    if (email != "" && !emailRegExp.test(email)) {
        email_msg.innerHTML = "Must be a valid email address, or left blank";
        email_msg.className = "error";
        valid = false;
    } else {
        email_msg.innerHTML = "";
        email_msg.className = "";
    }

    var serviceChosen = document.contactform["serviceChosen[]"];
    var serviceChosen_msg = document.getElementById("serviceChosen_msg");
    var serviceChosencount = 0;

    for (var i = 0; i < serviceChosen.length; i++) {
        if (serviceChosen[i].checked) {
        serviceChosencount++;
        }
    }
    if (serviceChosencount < 1) {
        serviceChosen_msg.innerHTML = "Please select at least one service";
        serviceChosen_msg.className = "error";
        valid = false;
    } else {
        serviceChosen_msg.innerHTML = "";
        serviceChosen_msg.className ="";
    }

    // REGION: must pick one of the valid choices, not the "choose" option
    var region = document.getElementById("region").value;
    var region_msg = document.getElementById("region_msg");

    if (region == -1) {
        region_msg.innerHTML = "You must choose a location";
        region_msg.className = "error";
        valid = false;
    } else {
        region_msg.innerHTML = "";
        region_msg.className ="";
    }

    // TANDCAGREE: must be checked

    var tandcagree = document.getElementById("tandcagree").checked;
    var tandcagree_msg = document.getElementById("tandcagree_msg");

    if (!tandcagree) {
        tandcagree_msg.innerHTML = "You must agree to the term and conditions to continue";
        tandcagree_msg.className = "error";
        valid = false;
    } else {
        tandcagree_msg.innerHTML = "";
        tandcagree_msg.className = "";
    }
    return valid;
}

