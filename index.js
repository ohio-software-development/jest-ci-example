// Code to handle inputs
const readline = require('readline');
const input = (str) => {
  return new Promise((resolve) => {
    rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout
    });

    rl.question(str, (response) => {
      rl.close();
      resolve(response);
    })
  })
}

// Import out math functions
const { add, subtract, multiply, divide } = require('./math');

const op_functions = [add, subtract, multiply, divide];

const op_question = `Select an operation:
1. add
2. subtract
3. multiply
4. divide
`;

const a_question = 'First operand: ';
const b_question = 'Second operand: ';

// Main
async function main() {
  const op = parseInt(await input(op_question));
  if (op < 1 || op > 4) {
    console.error("Invalid operation");
    return;
  }
  const a = parseInt(await input(a_question));
  const b = parseInt(await input(b_question));

  try {
    const result = op_functions[op - 1](a, b); // Call the math function
    console.log(result);
  } catch (error) {
    console.error(error);
  }
  return;
}

main();
