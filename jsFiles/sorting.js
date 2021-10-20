import { BubbleSort } from "./bubble.js";
import { SelectionSort } from "./selection.js";
import { InsertionSort } from "./insertion.js";

var bars = document.getElementById("bars");
  

function generatearray() {
    bars.innerHTML = "";
    for (let i = 0; i < 100; i++) {
  
        // Return a value from 1 to 100 (both inclusive)
        let value = Math.floor(Math.random() * 100);
        if (value === 0)
            value = 1;
  
        // Creating element div
        let array_ele = document.createElement("div");
  
        // Adding class 'block' to div
        array_ele.classList.add("bar");
  
        // Adding style to div
        array_ele.style.height = `${value * 4}px`;
       
        bars.appendChild(array_ele);
    }
}


function stopTheProcess() {
    window.location.reload();
    return;
}
  




// Calling generatearray function
generatearray();


const newArray = document.getElementById('newArray');
const bubble = document.getElementById("bubble");
const selection = document.getElementById("selection");
const insertion = document.getElementById("insertion");
const reload = document.getElementById("reload");


newArray.addEventListener('click', generatearray);
bubble.addEventListener('click', BubbleSort);
selection.addEventListener('click', SelectionSort);
insertion.addEventListener('click', InsertionSort);
reload.addEventListener('click', stopTheProcess);




