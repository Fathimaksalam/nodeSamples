const crypto = require('crypto');

// Create a SHA-256 hash of a string
// const hash = crypto.createHash('sha256')
//   .update('Hello, Node.js!')
//   .digest('hex');
// console.log('SHA-256 Hash:', hash);

// Create a hash object
const hash = crypto.createHash('sha256');

// Update the hash with data
hash.update('Hello, World!');

// Get the digest in hexadecimal format
const digest = hash.digest('hex');
console.log(digest);