// Asynchronous function to perform "Insertion Sort"
  async function InsertionSort(delay = 600) {
  let allBars = document.querySelectorAll(".bar");
  
  // Provide lightgreen colour to 0th bar
  allBars[0].style.backgroundColor = " rgb(49, 226, 13)";
  for (var i = 1; i < allBars.length; i += 1) {
  
    // Assign i-1 to j
    var j = i - 1;
  
    // To store the integer value of ith bar to key 
    var key = Number(window.getComputedStyle(allBars[i]).getPropertyValue('height').slice(0,-2)) ;
    
  
    // To store the ith bar height to height
    var height = allBars[i].style.height;
     
   
  
    //Provide darkblue color to the ith bar 
    allBars[i].style.backgroundColor = "darkblue";
      
    // To pause the execution of code for 600 milliseconds
    await new Promise((resolve) =>
    setTimeout(() => {
      resolve();
    }, 600)
  );
  
    // For placing selected element at its correct position 
    while (j >= 0 && parseInt(allBars[j].style.height) > key) {
        
      // Provide darkblue color to the jth bar
      allBars[j].style.backgroundColor = "darkblue";
        
      // For placing jth element over (j+1)th element
      allBars[j + 1].style.height = allBars[j].style.height;
      // bars[j + 1].childNodes[0].innerText = 
      // bars[j].childNodes[0].innerText;
  
      // Assign j-1 to j
      j = j - 1;
  
      // To pause the execution of code for 600 milliseconds
      await new Promise((resolve) =>
        setTimeout(() => {
          resolve();
        }, 600)
      );
        
      // Provide lightgreen color to the sorted part
      for(var k=i;k>=0;k--){
        allBars[k].style.backgroundColor = " rgb(49, 226, 13)";
      }
    }
  
    // Placing the selected element to its correct position
    allBars[j + 1].style.height = height;
    // allBars[j + 1].childNodes[0].innerHTML = key;
       
    // To pause the execution of code for 600 milliseconds
    await new Promise((resolve) =>
      setTimeout(() => {
        resolve();
      }, 600)
    );
      
    // Provide light green color to the ith bar
    allBars[i].style.backgroundColor = " rgb(49, 226, 13)";
  }
  
  
}



export { InsertionSort };