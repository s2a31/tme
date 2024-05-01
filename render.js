// Import the necessary modules from the Node.js path library and jsdom package.
import path from 'path';
import jsdom from 'jsdom';
const { JSDOM } = jsdom;

// Define an asynchronous function to render the HTML content of a file.
const render = async (filename) => {
    // Construct the full path to the file based on the current working directory.
    const filePath = path.join(process.cwd(), filename);

    // Create a new JSDOM instance from the file, allowing scripts to run and resources to load.
    const dom = await JSDOM.fromFile(filePath, {
        runScripts: 'dangerously',
        resources: 'usable',
    });

    // Return a promise that resolves when the DOMContentLoaded event is fired.
    return new Promise((resolve, reject) => {
        dom.window.document.addEventListener('DOMContentLoaded', () => {
            // Resolve the promise with the JSDOM instance once the document is fully loaded.
            resolve(dom);
        });
    });
};

// Export the render function to make it available for use in other modules.
export default render;

