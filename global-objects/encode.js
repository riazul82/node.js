const encoder = new TextEncoder();
const encoded = encoder.encode('Hello NodeJS!');

console.log(encoded);

// Uint8Array(13) [
//     72, 101, 108, 108, 111,
//     32,  78, 111, 100, 101,
//     74,  83,  33
// ]