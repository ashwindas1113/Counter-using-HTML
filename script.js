let selectedButtons = document.querySelectorAll('button');
let decrement = selectedButtons[0];
let increment = selectedButtons[1];
let clear = selectedButtons[2];
let output = document.querySelector(".output")



decrement.addEventListener("click", decrementValue);
increment.addEventListener("click", incrementValue);
clear.addEventListener("click", clearValue);

let count = 0; 

function decrementValue(e){
    if(count == 0){
        let errorDiv = document.createElement("div");
        errorDiv.className = "error";
        errorDiv.innerHTML = `<p>Error: Cannot go below 0</p>`;
        output.appendChild(errorDiv);
    }
    // else if(count < 0){
    //     clear.style.display = "none";
    // }
    else {
        count--;
        output.innerHTML = `your current count is: ${count}`;
    }
    clear.style.display = "inline-block";
}


function incrementValue(e){
    count++;
    output.innerHTML = `your current count is: ${count}`
    clear.style.display = "inline-block";
}


function clearValue(e){
    count = 0;
    output.innerHTML = `your current count is: ${count}`;
    clear.style.display = "none";
}