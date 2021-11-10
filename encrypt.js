var CryptoJS = require("crypto-js");

var myArgs = process.argv.slice();
var ciphertext = CryptoJS.AES.encrypt(myArgs[2], myArgs[3]).toString();

console.log(ciphertext)