var num1 = 1;
var num2 = 1;
var operator = "";

var test = operate(10,"/",2);
console.log(test);

function operate(num1,operator,num2) {
    let answer = 1;
    
    switch(operator) {
        case "+":
            answer = add(num1,num2);
            break;
        case "-":
            answer = subtract(num1,num2);
            break;
        case "*":
            answer = multiply(num1,num2);
            break;
        case "/":
            answer = divide(num1,num2);
            break;
    }

    return answer;
}

//#region 
function add(x,y) {
    return x + y;
}

function subtract(x,y) {
    return  x - y;
}

function multiply(x,y) {
    return x * y;
}

function divide(x,y) {
    return x / y;
}
//#endregion