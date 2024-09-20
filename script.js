let left;
let right;
let x;
let operatorPressed = false;
let display;


function storeValue(newValue){
    let existingValue;
    if(operatorPressed){
        existingValue = '';
        operatorPressed = false;
    } else {
        // Get Existing Value
         existingValue = document.getElementById('display').value;

    }
    // Merge existing value and new value pressed
    document.getElementById('display').value=existingValue+newValue;
    }



 
function storeOperator(operator){
   
    operatorPressed = true;
    x= operator;
    console.log(operator);
    left = document.getElementById('display').value;
    document.getElementById('display').value=operator;
}


    
function operation(){
    right = document.getElementById('display').value;
    if (x === "+"){
        add(Number(left),Number(right));
    } 
    else if (x === "-"){
        sub(Number(left),Number(right));
    } 
    else if (x === "*"){
        multiply(Number(left),Number(right));
    } 
    else if (x === "/"){
        divide(Number(left),Number(right));
    }
    else if (x === "%"){
        remainder(Number(left),Number(right));
    }  
}

function add(a,b){
    let c = a+b;
    left = c;
    document.getElementById('display').value=c;
}

function sub(a,b){
    let c = a-b;
    left = c;
    document.getElementById('display').value=c;
}
function multiply(a,b){
    let c = a*b;
    left = c;
    document.getElementById('display').value=c;
}
function divide(a,b){
    let c = a/b;
    left = c;
    document.getElementById('display').value=c;
}
function remainder(a,b){
    let c = a%b;
    left = c;
    document.getElementById('display').value=c;
}

function clearCalculator(){
    document.getElementById('display').value='';
}
function clearLastIndex(){
    let existingValue = document.getElementById('display').value;
    document.getElementById('display').value=existingValue.slice(0, -1);
}
function decimal() {
    
    
  }


