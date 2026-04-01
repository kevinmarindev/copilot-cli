#!/usr/bin/env node

/**
 * Node.js CLI Calculator Application
 * 
 * Supported Operations:
 * - Addition (+)
 * - Subtraction (-)
 * - Multiplication (*)
 * - Division (/)
 * - Modulo (%)
 * - Exponentiation (**)
 * - Square Root (√)
 * 
 * Usage: node calculator.js <number1> <operation> <number2>
 * Example: node calculator.js 10 + 5
 */

// Addition operation
function add(a, b) {
  return a + b;
}

// Subtraction operation
function subtract(a, b) {
  return a - b;
}

// Multiplication operation
function multiply(a, b) {
  return a * b;
}

// Division operation
function divide(a, b) {
  if (b === 0) {
    throw new Error('Cannot divide by zero');
  }
  return a / b;
}

// Modulo operation
function modulo(a, b) {
  if (b === 0) {
    throw new Error('Cannot perform modulo by zero');
  }
  return a % b;
}

// Exponentiation operation
function power(base, exponent) {
  return Math.pow(base, exponent);
}

// Square root operation
function squareRoot(n) {
  if (n < 0) {
    throw new Error('Cannot calculate square root of negative number');
  }
  return Math.sqrt(n);
}

// Main calculator function that handles operations
function calculate(num1, operation, num2) {
  switch (operation) {
    case '+':
      return add(num1, num2);
    case '-':
      return subtract(num1, num2);
    case '*':
      return multiply(num1, num2);
    case '/':
      return divide(num1, num2);
    case '%':
      return modulo(num1, num2);
    case '**':
      return power(num1, num2);
    case '√':
      return squareRoot(num1);
    default:
      throw new Error(`Unknown operation '${operation}'`);
  }
}

module.exports = { add, subtract, multiply, divide, modulo, power, squareRoot, calculate };

// CLI execution
if (require.main === module) {
  const args = process.argv.slice(2);

  if (args.length !== 3) {
    console.error('Usage: calculator <number1> <operation> <number2>');
    console.error('Operations: +, -, *, /, %, **, √');
    console.error('Example: calculator 10 + 5');
    process.exit(1);
  }

  const [num1Str, operation, num2Str] = args;

  const num1 = parseFloat(num1Str);
  const num2 = parseFloat(num2Str);

  if (isNaN(num1) || isNaN(num2)) {
    console.error('Error: Both arguments must be valid numbers');
    process.exit(1);
  }

  try {
    const result = calculate(num1, operation, num2);
    console.log(`${num1} ${operation} ${num2} = ${result}`);
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
}
