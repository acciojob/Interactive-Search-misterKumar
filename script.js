//your JS code here. If required.
const btn = document.querySelector(".btn");
const search = document.querySelector(".search");


search.addEventListener("focus",()=>{
	search.classList.add("active");
})