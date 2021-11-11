const CryptoJS = require("crypto-js")

const myArgs = process.argv.slice();
const ciphertext = CryptoJS.AES.encrypt(myArgs[2], myArgs[3]).toString();

console.log(ciphertext)