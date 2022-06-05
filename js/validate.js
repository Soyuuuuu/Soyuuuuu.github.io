//Get data
const form = document.querySelector("form");
const thankYou = document.querySelector(".thank-you");
const xmark = document.querySelector(".fa-xmark");
const h2 = document.querySelector("#headingh2");
const nameInput1 = document.querySelector("#name1");
const nameInput2 = document.querySelector("#name2");
const phonenum = document.querySelector("#phonenum");
const email = document.querySelector("#email");
const message = document.querySelector("#message");
const errorNodes = document.querySelectorAll(".error");


//Validate data
function validateForm(){

    clearMessages();
    let errorFlag = false;

    if(nameInput1.value.length < 1){
        errorNodes[0].innerText = "Name cannot be blank";
        nameInput1.classList.add("error-border");
        
        errorFlag = true;
    }

    if(nameInput2.value.length < 1){
        errorNodes[1].innerText = "Name cannot be blank";
        nameInput2.classList.add("error-border");
        errorFlag = true;
    }

    if(phonenum.value.length < 1){
        errorNodes[2].innerText = "Invalid phone number";
        phonenum.classList.add("error-border");
        errorFlag = true;
    }

    if(!emailIsValid(email.value)){
        errorNodes[3].innerText = "Invalid email address";
        email.classList.add("error-border");
        errorFlag = true;
    }

    if(message.value.length < 1){
        errorNodes[4].innerText = "Please enter message";
        message.classList.add("error-border");
        errorFlag = true;
    }

    if(!errorFlag){
        success.innerText = "Success!";
        form.remove();
        thankYou.classList.remove("hidden");
        h2.classList.add("hidden");
        xmark.classList.add("hidden");
    }

}

//Clear error messages
function clearMessages(){
    for(let i = 0; i < errorNodes.length; i++){
        errorNodes[i].innerText = "";
        isFormValid = true;
    }
    success.innerText = "";
    nameInput1.classList.remove("error-border");
    nameInput2.classList.remove("error-border");
    phonenum.classList.remove("error-border");
    email.classList.remove("error-border");
    message.classList.remove("error-border");
}


//Check if email is valid
function emailIsValid(email){
    let pattern = /\S+@\S+\.\S+/;
    return pattern.test(email);
}