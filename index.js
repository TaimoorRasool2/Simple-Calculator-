#!/usr/bin/env ts-node
import inquirer from "inquirer";
let result = await inquirer.prompt([
    { message: "Enter the first number", type: "number", name: "firstNumbe" },
    { message: "Enter the Second number", type: "number", name: "secondNumbe" },
    {
        message: "Please select the operator you want to perfome",
        type: "list",
        name: "operator",
        choices: ["addition", "substraction", "division", "multiplication"],
    },
]);
console.log(result);
if (result.operator === "addition") {
    console.log(`your addition is equal to ${result.firstNumbe + result.secondNumbe}`);
}
else if (result.operator === "substraction") {
    console.log(`your substraction is equal to ${result.firstNumbe - result.secondNumbe}`);
}
else if (result.operator === "division") {
    console.log(`your division is equal to ${result.firstNumbe / result.secondNumbe}`);
}
else if (result.operator === "multiplication") {
    console.log(`your multiplication is equal to ${result.firstNumbe * result.secondNumbe}`);
}
else {
    console.log("please enter a valid operator");
}
