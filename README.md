# TestMe Testing Framework

Welcome to TestMe, a customizable JavaScript testing framework designed to support both small and large-scale projects with simplicity and efficiency. Built with modern JavaScript features, it provides developers with a toolset for writing and executing tests seamlessly in any JavaScript environment.

## Features

- **Lightweight & Modular**: TestMe is designed to be both minimalistic and extendable, ensuring that you can integrate it into any project without hassle.
- **Asynchronous Test Support**: Built to handle asynchronous operations, allowing you to test promises and async functions effortlessly.
- **Automatic Test Discovery**: Automatically discovers and runs tests written in `.test.js` files throughout your project.
- **DOM Manipulation Testing**: Integrated with JSDOM to allow testing of scripts that manipulate the DOM without needing a browser.
- **Color-Coded Output**: Uses Chalk to provide color-coded output in the console, making it easier to identify test results at a glance.

## Getting Started

### Prerequisites

To use TestMe, you need to have Node.js installed on your machine. You can download and install Node.js from [nodejs.org](https://nodejs.org/).

### Installation

Clone this repository to your local machine to get started with TestMe:

```bash
git clone https://github.com/s2a31/tme.git
```
```bash
cd tme
```
```bash
sudo npm link
```

This will set up TestMe globally on your system, allowing you to use it across all your JavaScript projects.

### Writing Tests

Create a new JavaScript file ending in `.test.js`. Here’s a simple example:

```javascript
import assert from 'assert';
import { add } from '../yourModule.js';

it('adds two numbers', () => {
    assert.strictEqual(add(1, 2), 3);
});
```

### Running Tests

Navigate to your project directory and run:

```bash
tme
```

TestMe will automatically find and execute all `.test.js` files.

## Example Projects

### Sample Project: Array Operations

This project demonstrates basic array operations testing.

#### Key Files
- `index.js`: Implementation of array functions.
- `test/forEach.test.js`: Tests for the `forEach` function.

### Sample Web Project: Email Form Validation

This project demonstrates testing of DOM manipulation in a simulated browser environment.

#### Key Files
- `index.html`: HTML form for email input.
- `index.js`: JavaScript for form validation.
- `test/app.test.js`: Tests for form behavior.

## API Reference

Here's a quick overview of the globals provided by TestMe:

- `it(description, function)`: Defines a test case.
- `beforeEach(function)`: Hook that runs before each test in a file.
- `render(filename)`: Asynchronously renders an HTML file to test DOM interactions.

## License

The TestMe Testing Framework is open-sourced software licensed under the MIT license.

## Acknowledgments

- **Node.js Community**: For the vibrant ecosystem and continuous improvement of the platform.
- **Chalk Developers**: For providing the tool to make our console outputs readable.
- **JSDOM Contributors**: For enabling DOM manipulation testing without a browser.

Thank you for choosing TestMe for your testing needs. Happy testing!