const {add, subtract, multiply, divide } = require('./math')

describe('Math.js', () => {
    describe('add', () => {
        it('adds two numbers', () => {
            expect(add(1, 2)).toBe(3);
        });
    });

    describe('subtract', () => {
        it('subtracts two number', () => {
            expect(subtract(5,3)).toBe(2);
        });
    });

    describe('multiply', () => {
        it('multiples two numbers', () => {
            expect(multiply(3, 4)).toBe(12);
        });
    });

    describe('divide', () => {
        it('divides two numbers,', () => {
            expect(divide(10, 2)).toBe(5);
        });

        it('throws an error when dividing by zero', () => {
            expect(() => divide(5, 0)).toThrow('Cannot divide by zero');
        });
    });
})