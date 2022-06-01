let menu = document.querySelector('#menu-btn');
let navbar = document.querySelector('.navbar');

menu.onclick = () =>{
    menu.classList.toggle('fa-xmark');
    navbar.classList.toggle('active');
}

window.onscroll = () =>{
    menu.classList.remove('fa-xmark');
    navbar.classList.remove('active');
}

function show(anything){
    document.querySelector('.textBox').value = anything;
}

let dropdown = document.querySelector('.dropdown');
dropdown.onclick = function(){
        dropdown.classList.toggle('active');
}


// document.getElementById("contactseller").addEventListener("click", function(){
//     document.querySelector(".contact-form").style.display = "flex";
// })

// document.querySelector(".fa-xmark").addEventListener("click", function(){
//     document.querySelector(".contact-form").style.display = "none";
// })

// document.getElementsById("submit-btn").addEventListener("click", function(){
//     document.querySelector(".contact-form").style.display = "none",
//     document.querySelector(".contact-confirm").style.display = "flex";
// })
