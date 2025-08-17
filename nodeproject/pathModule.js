const path = require('path');
// Get filename from a path
const filename = path.basename('\Mern_Stack\ file.txt');
console.log(filename);

// Get filename without extension
const filenameWithoutExt = path.basename('\Mern_Stack\ file.txt', '.txt');
console.log(filenameWithoutExt);

// Get the directory name of the current module
console.log('Directory name:', __dirname);

// Get the file name of the current module
console.log('File name:', __filename);

// Building paths relative to the current module
const configPath = path.join(__dirname, 'config', 'app-config.json');
console.log('Config file path:', configPath);

// Getting the directory name using path.dirname()
console.log('Directory using path.dirname():', path.dirname(__filename));

const extension = path.extname('file.txt');
console.log(extension);

console.log(path.extname('index.html'));
console.log(path.extname('index.coffee.md'));
console.log(path.extname('index.'));
console.log(path.extname('index'));
console.log(path.extname('.index'));
