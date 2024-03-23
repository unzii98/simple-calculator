#!/usr/bin/env node

import inquirer from "inquirer";

const answer = await inquirer.prompt([
  { message: "Enter first number", type: "number", name: "FirstNumber" },
  { message: "Enter second number", type: "number", name: "secondNumber" },
  {
    message: "Select one of the opertor to perform operation",
    type: "list",
    name: "operator",
    choices:["addition","subtraction","Multiplication","Division"]
  }
]);
console.log(answer);

// Conditional Statement//
if(answer.operator ==="addition"){
  console.log(answer. FirstNumber+ answer. secondNumber);
}
else if(answer.operator ==="subtraction"){
  console.log(answer. FirstNumber- answer. secondNumber);
}
else if(answer.operator ==="Multiplication"){
  console.log(answer. FirstNumber*answer. secondNumber);
}
else if(answer.operator ==="Division"){
  console.log(answer. FirstNumber/ answer. secondNumber);
}
else{
  console.log("Please select valid value");
}

