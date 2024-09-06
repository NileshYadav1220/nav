let section=document.getElementById("section")
let barbtn=document.getElementById("barbtn")
let togglemenu=() => section.classList.toggle("toggle")
barbtn.addEventListener('click',togglemenu,false)