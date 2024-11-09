const decreaseBtn = document.getElementById("decreaseBtn");
const resetBtn = document.getElementById("resetBtn");
const increaseBtn = document.getElementById("increaseBtn");
const countLabel = document.getElementById("countLabel");
let count = 0; // will be reassigning count, incrementing and decrementing it. 

// now I need 3 functions... 
// increase, decrease and reset. 


increaseBtn.onclick = function(){
    count++;
    countLabel.textContent = count; // text inside count label
}


decreaseBtn.onclick = function(){
    count--;
    countLabel.textContent = count; 

}


resetBtn.onclick = fuction(){
    

}