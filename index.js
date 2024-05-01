#!/usr/bin/env node

// Import the Runner class from the runner module.
import Runner from "./runner.js";

// Create an instance of Runner.
const runner = new Runner();

// Define an asynchronous function to run the tests.
const run = async () => {
    // Collect all test files from the current working directory.
    await runner.collectFiles(process.cwd());
    // Execute the tests collected.
    await runner.runTest();
};

// Execute the run function to start the testing process.
run();
