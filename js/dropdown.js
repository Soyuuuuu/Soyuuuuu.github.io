//navigation dropdown
let ourstock = document.querySelector('#ourstock');
let popupwindow1 = document.querySelector('#popupwindow1');

//popupwindows
let popupwindow2 = document.querySelector('#popupwindow2');
let addcompare = document.querySelector('.addcompare');
let comparecars = document.querySelector('.comparecars');

//navigation dropdown
ourstock.onmouseenter = function(){
   		popupwindow1.style.top="6.45rem";
}

ourstock.onmouseleave = function(){
   		popupwindow1.style.top="-30vh";
}

//popupwindows

addcompare.onclick = () =>{
	if(document.documentElement.clientWidth < 648){
		popupwindow2.style.top = '7.6rem';
	}else{
		popupwindow2.style.top = '6.5rem';
	}
}

comparecars.onclick = () =>{
	location.href="compare.html"
}

document.addEventListener('click',(e)=>{
　　if(e.target.className!=='addcompare' && e.target.className!=='popupwindow'){
		popupwindow2.style.top = '-60vh';
　　}
})

