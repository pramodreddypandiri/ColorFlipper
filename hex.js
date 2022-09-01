const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const btn=document.getElementById("btn");
const color = document.querySelector(".color");
const main= document.querySelector(".main")

btn.addEventListener("click",flip)




function flip(){
    let hexChars=['0', '1', '2', '3', '4', '5',
        '6', '7', '8', '9', 'A', 'B',
         'C', 'D', 'E', 'F'];
    let currLen=parseInt(6);
    let hexColor="#"
    for(i=0;i<currLen;i++){
           hexColor+=hexChars[Math.floor(Math.random()*16)];
    }
    main.style.backgroundColor=hexColor;
    color.textContent=hexColor;
}