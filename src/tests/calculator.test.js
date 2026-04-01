

const { add, subtract, multiply, divide, modulo, power, squareRoot, calculate } = require('../calculator');
describe('Calculator Functions', () => {
  describe('Addition', () => {
    test('should add two positive numbers', () => {
      expect(add(2, 3)).toBe(5);
    });

    test('should add positive and negative numbers', () => {
      expect(add(10, -4)).toBe(6);
    });

    test('should add two negative numbers', () => {
      expect(add(-5, -3)).toBe(-8);
    });

    test('should add zero', () => {
      expect(add(0, 5)).toBe(5);
      expect(add(5, 0)).toBe(5);
    });

    test('should handle decimal numbers', () => {
      expect(add(1.5, 2.5)).toBe(4);
    });
  });

  describe('Subtraction', () => {
    test('should subtract two positive numbers', () => {
      expect(subtract(10, 4)).toBe(6);
    });

    test('should subtract positive and negative numbers', () => {
      expect(subtract(10, -4)).toBe(14);
    });

    test('should subtract two negative numbers', () => {
      expect(subtract(-5, -3)).toBe(-2);
    });

    test('should subtract zero', () => {
      expect(subtract(5, 0)).toBe(5);
      expect(subtract(0, 5)).toBe(-5);
    });

    test('should handle decimal numbers', () => {
      expect(subtract(5.5, 2.5)).toBe(3);
    });
  });

  describe('Multiplication', () => {
    test('should multiply two positive numbers', () => {
      expect(multiply(45, 2)).toBe(90);
    });

    test('should multiply positive and negative numbers', () => {
      expect(multiply(5, -3)).toBe(-15);
    });

    test('should multiply two negative numbers', () => {
      expect(multiply(-4, -5)).toBe(20);
    });

    test('should multiply by zero', () => {
      expect(multiply(100, 0)).toBe(0);
      expect(multiply(0, 100)).toBe(0);
    });

    test('should handle decimal numbers', () => {
      expect(multiply(2.5, 4)).toBe(10);
    });

    test('should multiply by one', () => {
      expect(multiply(7, 1)).toBe(7);
    });
  });

  describe('Division', () => {
    test('should divide two positive numbers', () => {
      expect(divide(20, 5)).toBe(4);
    });

    test('should divide positive and negative numbers', () => {
      expect(divide(20, -4)).toBe(-5);
    });

    test('should divide two negative numbers', () => {
      expect(divide(-20, -4)).toBe(5);
    });

    test('should divide zero by a number', () => {
      expect(divide(0, 5)).toBe(0);
    });

    test('should throw error when dividing by zero', () => {
      expect(() => divide(10, 0)).toThrow('Cannot divide by zero');
    });

    test('should handle decimal numbers', () => {
      expect(divide(10, 4)).toBe(2.5);
    });

    test('should handle division resulting in decimal', () => {
      expect(divide(15, 3)).toBe(5);
    });
  });

  describe('Calculate Function', () => {
    test('should handle addition operation', () => {
      expect(calculate(2, '+', 3)).toBe(5);
    });

    test('should handle subtraction operation', () => {
      expect(calculate(10, '-', 4)).toBe(6);
    });

    test('should handle multiplication operation', () => {
      expect(calculate(45, '*', 2)).toBe(90);
    });

    test('should handle division operation', () => {
      expect(calculate(20, '/', 5)).toBe(4);
    });

    test('should handle modulo operation', () => {
      expect(calculate(10, '%', 3)).toBe(1);
    });

    test('should handle exponentiation operation', () => {
      expect(calculate(2, '**', 8)).toBe(256);
    });

    test('should handle square root operation', () => {
      expect(calculate(16, '√', 0)).toBe(4);
    });

    test('should throw error for unknown operation', () => {
      expect(() => calculate(5, '^', 2)).toThrow("Unknown operation '^'");
    });

    test('should throw error when dividing by zero via calculate', () => {
      expect(() => calculate(10, '/', 0)).toThrow('Cannot divide by zero');
    });
  });

  describe('Edge Cases', () => {
    test('should handle large numbers', () => {
      expect(add(1000000, 2000000)).toBe(3000000);
      expect(multiply(1000, 1000)).toBe(1000000);
    });

    test('should handle very small decimal numbers', () => {
      expect(add(0.1, 0.2)).toBeCloseTo(0.3);
    });

    test('should handle negative results', () => {
      expect(subtract(5, 10)).toBe(-5);
    });

    test('should handle operations with negative zero', () => {
      expect(multiply(0, -1)).toEqual(-0);
    });
  });

  describe('Modulo', () => {
    test('should return remainder of two positive numbers', () => {
      expect(modulo(10, 3)).toBe(1);
    });

    test('should handle modulo with negative numbers', () => {
      expect(modulo(-10, 3)).toBe(-1);
      expect(modulo(10, -3)).toBe(1);
    });

    test('should return zero when dividing evenly', () => {
      expect(modulo(20, 5)).toBe(0);
    });

    test('should throw error when modulo by zero', () => {
      expect(() => modulo(10, 0)).toThrow('Cannot perform modulo by zero');
    });

    test('should handle decimal numbers in modulo', () => {
      expect(modulo(10.5, 3)).toBeCloseTo(1.5);
    });
  });

  describe('Exponentiation', () => {
    test('should raise positive number to positive power', () => {
      expect(power(2, 8)).toBe(256);
    });

    test('should handle power of zero', () => {
      expect(power(5, 0)).toBe(1);
    });

    test('should handle raising to power of one', () => {
      expect(power(7, 1)).toBe(7);
    });

    test('should handle negative exponents', () => {
      expect(power(2, -2)).toBe(0.25);
    });

    test('should handle fractional exponents', () => {
      expect(power(4, 0.5)).toBe(2);
    });

    test('should handle raising negative base to power', () => {
      expect(power(-2, 3)).toBe(-8);
      expect(power(-2, 2)).toBe(4);
    });

    test('should handle decimal base and exponent', () => {
      expect(power(2.5, 2)).toBe(6.25);
    });
  });

  describe('Square Root', () => {
    test('should calculate square root of positive number', () => {
      expect(squareRoot(16)).toBe(4);
    });

    test('should calculate square root of zero', () => {
      expect(squareRoot(0)).toBe(0);
    });

    test('should handle square root of decimal numbers', () => {
      expect(squareRoot(2.25)).toBe(1.5);
    });

    test('should return one for square root of one', () => {
      expect(squareRoot(1)).toBe(1);
    });

    test('should throw error for square root of negative number', () => {
      expect(() => squareRoot(-4)).toThrow('Cannot calculate square root of negative number');
    });

    test('should handle large numbers', () => {
      expect(squareRoot(1000000)).toBe(1000);
    });
  });
});
