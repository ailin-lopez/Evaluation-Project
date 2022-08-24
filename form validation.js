var firstName = document.getElementById("fname");
var lastName = document.getElementById("lname");
var age = document.getElementById("age");
var email = document.getElementById("email");
var phoneno = document.getElementById("phone_no");
var submitBtn = document.getElementById("submit-btn");


var firstName2 = document.getElementById("fname2");
var lastName2 = document.getElementById("lname2");
var age2 = document.getElementById("age2");
var submitBtn2 = document.getElementById("addpass4");

var name_regex = /^[a-z A-Z]{0,20}$/;
var age_regex = /^0?1[89]|0?[2-9][0-9]$/;
var email_regex = /\S+@\S+\.\S+/;
var phone_regex = /^[0-9]{10}$/;

submitBtn.disabled = "true";
submitBtn2.disabled = "true";




let inputValidator = {
    "firstn": false,
    "lastn": false,
    "ageperson": false,
    "emailid": false,
    "phonenumber": false,
    "firstn2": false,
    "lastn2": false,
    "ageperson2": false
};


firstName.addEventListener('input', validateFirstName)
lastName.addEventListener('input', validateLastName)
age.addEventListener('input', validateAge)
email.addEventListener('input', validateEmail)
phoneno.addEventListener('input', validatePhoneNo)
firstName2.addEventListener('input', validateFirstName2)
lastName2.addEventListener('input', validateLastName2)
age2.addEventListener('input', validateAge2)


function buttonRelease(){

console.log(inputValidator);

 var result = inputValidator.firstn === true && inputValidator.lastn === true && inputValidator.ageperson === true && inputValidator.emailid === true && inputValidator.phonenumber === true;
 console.log(result);

 var result2 = inputValidator.firstn2 === true && inputValidator.lastn2 === true && inputValidator.ageperson2 === true;
 console.log(result2);

if(result){
submitBtn.removeAttribute("disabled");
console.log("Submit button active");
}
   
else{
submitBtn.disabled = "true";
console.log("Submit button not active");
}

if(result2){
submitBtn2.removeAttribute("disabled");
console.log("Submit button active");
}
       
else{
submitBtn2.disabled = "true";
console.log("Submit button not active");
}
}

function validateFirstName() {

console.log(firstName.value);

if (name_regex.test(firstName.value)) {
valid(firstName);
inputValidator.firstn = true;
buttonRelease();
}
else {
invalid(firstName);
inputValidator.firstn = false;
}
}

function validateLastName() {

    console.log(lastName.value);

    if (name_regex.test(lastName.value)) {
    valid(lastName);
    inputValidator.lastn = true;
    buttonRelease();
    }
    else {
    invalid(lastName);
    inputValidator.lastn = false;
    }

}

function validateAge() {

 console.log(age.value);

 if (age_regex.test(age.value)) {
 valid(age);
 inputValidator.ageperson = true;
 buttonRelease();

 }
 else {
 invalid(age);
 inputValidator.ageperson = false;
 buttonRelease();
}

}


function validateFirstName2() {

    console.log(firstName2.value);
    
    if (name_regex.test(firstName2.value)) {
    valid(firstName2);
    inputValidator.firstn2 = true;
    buttonRelease();
    }
    else {
    invalid(firstName2);
    inputValidator.firstn2 = false;
    }
    }
    
    function validateLastName2() {
    
        console.log(lastName2.value);
    
        if (name_regex.test(lastName2.value)) {
        valid(lastName2);
        inputValidator.lastn2 = true;
        buttonRelease();
        }
        else {
        invalid(lastName2);
        inputValidator.lastn2 = false;
        }
    
    }
    
    function validateAge2() {
    
     console.log(age2.value);
    
     if (age_regex.test(age2.value)) {
     valid(age2);
     inputValidator.ageperson2 = true;
     buttonRelease();
    
     }
     else {
     invalid(age2);
     inputValidator.ageperson2 = false;
     buttonRelease();
    }
    
    }

function validateEmail() {

 console.log(email.value);

 if (email_regex.test(email.value)) {
 valid(email);
 inputValidator.emailid = true;
 buttonRelease();
 
 }
 else {

    invalid(email);
    inputValidator.emailid = false;
 }
}

function validatePhoneNo() {

console.log(phoneno.value);

 if (phone_regex.test(phoneno.value)) {
 valid(phoneno);
 inputValidator.phonenumber = true;
 buttonRelease();
 
 }
 else {

 invalid(phoneno);
 inputValidator.phonenumber = false;
 }
}

function valid(element){

 element.style.borderColor = "green";
 element.style.borderWidth = "thin thick";

}

function invalid(element){
 element.style.borderColor = "red";
 element.style.borderWidth = "thin thick";
}
