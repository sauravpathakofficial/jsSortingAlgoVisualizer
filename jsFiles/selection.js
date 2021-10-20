// asynchronous function to perform "Selection Sort"
async function SelectionSort(delay = 30)
{
  var allBars = document.querySelectorAll(".bar");
  // Assign 0 to min_idx
   var min_idx = 0;
    for (var i = 0; i < allBars.length; i += 1)
    {   // Assign i to min_idx
        min_idx = i;

        // Provide darkblue color to the ith bar
        allBars[i].style.backgroundColor = "darkblue";
        for (var j = i + 1; j < allBars.length; j += 1)
        {
             
            // Provide red color to the jth bar
            allBars[j].style.background = "red";
            
            //   // To pause the execution of code for 300 milliseconds
            await new Promise((resolve) =>
                setTimeout(() => {
                resolve();
                }, 300)
            );
            var val1 = Number(window.getComputedStyle(allBars[j]).getPropertyValue('height').slice(0,-2)) ;
            var val2 = Number(window.getComputedStyle(allBars[min_idx]).getPropertyValue('height').slice(0, -2));
        
           
            if (val1 < val2) 
            {
                if (min_idx !== i)
                {
                // Provide skyblue color to the (min-idx)th bar
                allBars[min_idx].style.backgroundColor = "  rgb(24, 190, 255)";
                }
                min_idx = j;
            }
            else
            {
            // Provide skyblue color to the jth bar
                allBars[j].style.backgroundColor = "  rgb(24, 190, 255)";
            }
        }
  
        // To swap ith and (min_idx)th bar
        var temp1 = allBars[min_idx].style.height;
        // var temp2 = bars[min_idx].childNodes[0].innerText;
        allBars[min_idx].style.height = allBars[i].style.height;
        allBars[i].style.height = temp1;
        // bars[min_idx].childNodes[0].innerText = bars[i].childNodes[0].innerText;
        // bars[i].childNodes[0].innerText = temp2;
        
        // To pause the execution of code for 300 milliseconds
        await new Promise((resolve) =>
        setTimeout(() => {
            resolve();
        }, 300)
        );
  
        // Provide skyblue color to the (min-idx)th bar
        allBars[min_idx].style.backgroundColor = "  rgb(24, 190, 255)";
    
        // Provide lightgreen color to the ith bar
        allBars[i].style.backgroundColor = " rgb(49, 226, 13)";
  }
 
}


export { SelectionSort };