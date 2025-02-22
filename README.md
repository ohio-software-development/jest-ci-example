# jest-ci-example
This is a sample project for the accompanying Jest + Continuous Integration presentation for OUSDC.

The provided instructions are intended for Linux-based operating systems (tested on Fedora and [WSL](https://learn.microsoft.com/en-us/windows/wsl/about)).

## Prerequisites

- Node.js >=14
- NPM

## Setup

0. Clone this repo
1. Install project dependencies
  ```bash
  npm install
  ```
2. Try the program
  ```bash
  npm start
  ```

## Implement Example
In this example project you will learn how to write simple test cases for a math module using [Jest](https://jestjs.io/) and create a GitHub action to run these tests automatically everytime a push to the repository is made.

0. Take a look at [/index.js](/index.js) and [/math.js](/math.js)
1. Create a test file `math.test.js`. Jest will look for all `test.js` suffixes and run them in parallel.
2. In the newly created `math.test.js` file, write the following:
```js
const { add, subtract, multiply, divide } = require('./math');

describe('Math.js', () => {
  describe('add', () => {
    it('adds two numbers', () => {
      expect(add(1, 2)).toBe(3);
    });
  });

  describe('subtract', () => {
    it('subtracts two numbers', () => {
      expect(subtract(5, 3)).toBe(2);
    });
  });

  describe('multiply', () => {
    it('multiplies two numbers', () => {
      expect(multiply(3, 4)).toBe(12);
    });
  });

  describe('divide', () => {
    it('divides two numbers', () => {
      expect(divide(10, 2)).toBe(5);
    });

    it('throws an error when dividing by zero', () => {
      expect(() => divide(5, 0)).toThrow("Cannot divide by zero");
    });
  });
});
```
3. Save the file and try out the test cases
```bash
npm test
```
4. Next, let's create a GitHub Workflow file to automatically run these tests when we push to the repo.
5. Create the `.github/workflows` directory if it doesn't exist
6. Create a new action at `.github/workflows/test.yml`
```yaml
name: Run Jest Tests

on: [push]

jobs:
  test:
    runs-on: ubuntu-latest

    steps:
      - name: Checkout Repository
        uses: actions/checkout@v4

      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: 20

      - name: Install dependencies
        run: npm install

      - name: Run tests
        run: npm test
```
7. You should be good to go! Next, push your changes to your branch
After pushing, you can go to GitHub repository and click on the "actions" tab to see current and past workflow runs. You can find your test results here. If it's green, then it passed! If not, be sure to check out the logs from the run to see what went wrong.
