// contact seller & enquiry

document.getElementById("contactseller").addEventListener("click", function(){
    document.querySelector(".contact-form").style.display = "flex";
})

document.querySelector(".fa-xmark").addEventListener("click", function(){
    document.querySelector(".contact-form").style.display = "none";
})

//close confirm
document.getElementById("confirm-xmark").addEventListener("click", function(){
    document.querySelector(".contact-form").style.display = "none";
})
