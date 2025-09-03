function calculate(num1,num2,operator){
    switch(operator){
        case '+':
            return num1 + num2;
        case '-':
            return num1 - num2;
        case '*':
            return num1 * num2;
        case '/':
            return num1 / num2;
        default :
            console.log("invalid operator");
    }
}

    const num1 = prompt("enter the first number:");
    const num2 = prompt("enter the second number:");
    const operator = prompt("plz enter the operation(+,-,*,/):");

    const result = calculate(num1,num2,operator);
    console.log("the result is  " +result);
