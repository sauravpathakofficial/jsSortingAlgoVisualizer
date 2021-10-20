
// Promise to swap two blocks
function swap(el1, el2) {
    return new Promise((resolve) => {
  
        // For exchanging styles of two blocks
        var temp = el1.style.transform;
        el1.style.transform = el2.style.transform;
        el2.style.transform = temp;
          
        window.requestAnimationFrame(function() {
  
            // For waiting for .25 sec
            setTimeout(() => {
                bars.insertBefore(el2, el1);
                resolve();
            }, 25);
        });
    });
}

// Asynchronous BubbleSort function
  
async function BubbleSort(delay = 100) {
    var allBars = document.querySelectorAll(".bar");
  
    // BubbleSort Algorithm
    for (var i = 0; i < allBars.length; i += 1) {
        for (var j = 0; j < allBars.length - i - 1; j += 1) {
  
            // To change background-color of the
            // blocks to be compared
            allBars[j].style.background = "#FF4949";
            allBars[j + 1].style.background = "#FF4949";
  
            // To wait for .1 sec
            await new Promise((resolve) =>
                setTimeout(() => {
                    resolve();
                }, delay)
            );
  
            console.log("times");
            var value1 = Number(window.getComputedStyle(allBars[j]).getPropertyValue('height').slice(0,-2)) ;
            var value2 =Number(window.getComputedStyle(allBars[j+1]).getPropertyValue('height').slice(0,-2));
            // console.log(value1,value2);
            // To compare value of two blocks
            if (value1 > value2) {
                await swap(allBars[j], allBars[j + 1]);
               allBars = document.querySelectorAll(".bar");
            }
  
            // Changing the color to the previous one
            allBars[j].style.backgroundColor = "rgb(158, 74, 158)";
            allBars[j + 1].style.backgroundColor = "rgb(158, 74, 158)";
        }
  
        //changing the color of greatest element 
        //found in the above traversal
         allBars[allBars.length - i - 1]
                .style.backgroundColor = "#13CE66";
      
    }
     
}

export { BubbleSort };