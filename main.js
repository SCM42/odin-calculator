var num1 = 10;
var num2 = 2;
var operator = "+";

var test = operate(num1,operator,num2);
console.log(test);

function operate(x,operator,y) {
    let answer = 1;
    
    switch(operator) {
        case "+":
            answer = add(x,y);
            break;
        case "-":
            answer = subtract(x,y);
            break;
        case "*":
            answer = multiply(x,y);
            break;
        case "/":
            answer = divide(x,y);
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