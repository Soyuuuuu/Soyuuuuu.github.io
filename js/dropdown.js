
//search result page popupwindows
let popupwindow2 = document.querySelector('#popupwindow2');
let addcompare = document.getElementsByClassName('addcompare');
let comparecars = document.querySelector('.comparecars');


//compare car popupwindows

for(let i =0;i<addcompare.length;i++){
	addcompare[i].onclick = () =>{
		if(document.documentElement.clientWidth < 648){
			popupwindow2.style.top = '7.6rem';
		}else{
			popupwindow2.style.top = '6.5rem';
		}
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


//filter popup

document.querySelector("#showFilter").addEventListener("click", function(){
    document.querySelector(".filter").style.top = "8rem";
})
document.querySelector("#back").addEventListener("click", function(){
    document.querySelector(".filter").style.top = "-90vh";
})