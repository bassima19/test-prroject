document.getElementById("text").innerHTML = "Bassima ayad ";
var menuItem = document.getElementById("menu").getElementsByTagName("li");
var btn = document.getElementById("zar");
var myMenu = document.getElementById("menu");

menuItem[0].innerHTML = "love"; 
menuItem[1].innerHTML = "Hello World"; 
menuItem[2].innerHTML = "Welcome to my Life"; 
menuItem[3].innerHTML = "Smile"; 
for (i = 0; i< menuItem.length; i++){
    menuItem[i].addEventListener("click",selectItem);
}
function selectItem(){
    alert("trust me");
}
for (i = 0; i< menuItem.length; i++){
   menuItem[i].addEventListener("click",selectItem);
   }
function selectItem(){
    headLine.innerHTML = this.innerHTML;
    for (i = 0; i< menuItem.length; i++){
        menuItem[0].classList.remove("selected");
}
    this.classList.add("selected");
}
    
btn.addEventListener("click" , newItem);
function newItem(){
  myMenu.innerHTML += "<li> Big Heart" +  "</li>"
}
