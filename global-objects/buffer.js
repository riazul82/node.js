const buffer = new Buffer.alloc(12, 'abcdefghijkl');
console.log(buffer); // <Buffer 61 62 63 64 65 66 67 68 69 6a 6b 6c>
console.log(buffer[0]); // 97
console.log(buffer[1]); // 98
console.log(buffer.toString()); // abcdefghijkl

const bufferII = Buffer.from('Hello!');
console.log(bufferII); // <Buffer 48 65 6c 6c 6f 21>
console.log(bufferII.toString()); // Hello!