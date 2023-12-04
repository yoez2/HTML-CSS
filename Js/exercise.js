const prompt = require("prompt-sync")();

do {
    console.log('calculator');
    Calculator = prompt("Enter what type of calculation you want to do: ");
    num1 = parseInt(prompt("Enter the first operand: "));
    num2 = parseInt(prompt("Enter the second operand: "));

    let result = 0;

    if (Calculator == 'add') {
        result = num1 + num2;
        console.log("Result: " + result);
    } else if (Calculator == 'sub') {
        result = num1 - num2;
        console.log("Result: " + result);
    } else if (Calculator == 'mul') {
        result = num1 * num2;
        console.log("Result: " + result);
    } else if (Calculator == 'div') {
        if (num2 != 0) {
            result = num1 / num2;
            console.log("Result: " + result);
        } else {
            console.log("Error: Division by zero\n");
            continue;
        }
    } else {
        result = 0;
    }

    response = prompt("Do you want to calculate again?(yes/no): ");

} while (response == 'yes');                               