// contact seller & enquiry

document.getElementById("contactseller").addEventListener("click", function(){
    document.querySelector(".contact-form").style.display = "flex";
})

document.querySelector(".fa-xmark").addEventListener("click", function(){
    document.querySelector(".contact-form").style.display = "none";
})

// confirm & close confirm

document.getElementById("submit-btn").addEventListener("click", function(){
    document.querySelector(".contact-confirm").style.display = "flex";
    document.querySelector(".contact-form").style.display = "none";
})

document.getElementById("confirm-xmark").addEventListener("click", function(){
    document.querySelector(".contact-confirm").style.display = "none";
})
