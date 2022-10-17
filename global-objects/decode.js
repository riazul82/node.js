const decoder = new TextDecoder();
const u8arr = new Uint8Array([72, 101, 108, 108, 111, 32, 78, 111, 100, 101, 74, 83, 33]);

const decoded = decoder.decode(u8arr);

console.log(decoded); // Hello NodeJS!