
let ourstock = document.querySelector('#ourstock');
let popupwindow1 = document.querySelector('#popupwindow1');

ourstock.onmouseenter = function(){
    popupwindow1.style.top="6.45rem";
}

ourstock.onmouseleave = function(){
    popupwindow1.style.top="-30vh";
}