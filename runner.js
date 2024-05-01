// Import necessary Node.js core modules.
import fs from 'fs';
import path from 'path';
import chalk from 'chalk';
import render from './render.js'; // Import the render function from render.js.

// Define directories that should be ignored during test file collection.
const forbiddenDirs = ['node_modules'];

// Define the Runner class to handle test execution.
class Runner {
    constructor() {
        this.testFiles = []; // Initialize an array to store test files.
    }

    // Method to execute all collected test files.
    async runTest() {
        for (let file of this.testFiles) {
            // Print the file name being tested in gray text using chalk.
            console.log(chalk.gray(`---- ${file.shortName}`));
            const beforeEaches = []; // Array to store beforeEach hooks.
            global.render = render; // Make render globally available to the tests.
            global.beforeEach = (fn) => { // Define a global beforeEach function.
                beforeEaches.push(fn); // Store functions to run before each test.
            };
            global.it = async (desc, fn) => { // Define a global it function for running tests.
                beforeEaches.forEach((func) => func()); // Execute all beforeEach hooks.

                try {
                    await fn(); // Execute the test function.
                    console.log(chalk.green(`\tOK - ${desc}`)); // Log success in green.
                } catch (err) {
                    const message = err.message.replace(/\n/g, '\n\t\t');
                    console.log(chalk.red(`\tX - ${desc}`)); // Log failure in red.
                    console.log(chalk.red('\t', message));
                }
            };

            try {
                await import(file.name); // Dynamically import the test file.
            } catch (err) {
                const message = err.message.replace(/\n/g, '\n\t\t');
                console.log(chalk.red('\tX - Error Loading File', file.shortName));
                console.log(chalk.red('\t', message));
            }
        }
    }

    // Method to collect test files recursively from a given directory.
    async collectFiles(targetPath) {
        const files = await fs.promises.readdir(targetPath);

        for (let file of files) {
            const filepath = path.join(targetPath, file);
            const stats = await fs.promises.lstat(filepath);

            if (stats.isFile() && file.includes('.test.js')) { // Check if it's a test file.
                this.testFiles.push({ name: filepath, shortName: file }); // Add to testFiles.
            } else if (stats.isDirectory() && !forbiddenDirs.includes(file)) {
                const childFiles = await fs.promises.readdir(filepath);

                files.push(...childFiles.map((f) => path.join(file, f))); // Recurse into directories.
            }
        }
    }
}

// Export the Runner class for use in other modules.
export default Runner;
