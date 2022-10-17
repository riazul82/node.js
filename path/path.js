const path = require('path');

// basename
const baseName = path.basename('MyFiles/data.js');
console.log(baseName); // data.js

// dirname
const dirName = path.dirname('MyFiles/data.js');
console.log(dirName); // MyFiles

// join path
const newPath = path.join('Coding', 'Exercise/NodeJS', 'Path/path.js');
console.log(newPath); // Coding\Exercise\NodeJS\Path\path.js

// absolute path
const absPath = path.resolve('MyFiles/data.js');
console.log(absPath); // E:\NodeJS\path\MyFiles\data.js

// check absolute
const isAbs = path.isAbsolute('MyFiles/data.js');
console.log(isAbs); // false

const isAbsII = path.isAbsolute('E:/NodeJS/path/MyFiles/data.js');
console.log(isAbsII); // true

// get full path info
const pathInfo = path.parse('E:/NodeJS/path/MyFiles/data.js');
console.log(pathInfo);
// {
//     root: 'E:/',
//     dir: 'E:/NodeJS/path/MyFiles',
//     base: 'data.js',
//     ext: '.js',
//     name: 'data'
// }