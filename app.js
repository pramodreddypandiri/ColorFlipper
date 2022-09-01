const colors = ["green", "red","blue", "rgba(133,122,200)", "#f15025"];
const btn=document.getElementById("btn");
const color = document.querySelector(".color");
const main= document.querySelector(".main")
//adding event listener to button
btn.addEventListener("click",flip)
function flip(){
    const randomNumer= parseInt(Math.random()*colors.length);
    //changing bg-style of main div
    main.style.backgroundColor=colors[randomNumer];
    color.textContent=colors[randomNumer];
}