const display = document.getElementById("display");
let isError = false;

function appendToDisplay(input){
    if (isError){
        return;
    }
    display.value += input;
}

function clearOneDisplay(){
    if (isError){
        return;
    }
    display.value = display.value.slice(0,-1);
}

function clearAllDisplay(){
    display.value = "";
    isError = false;
}

function calculate(){
    if (isError){
        return;
    }
   try{
     display.value = eval(display.value);
   }
   catch(error){
    display.value = "error";
    isError = true;
   }
}