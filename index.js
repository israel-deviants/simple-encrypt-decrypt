var CryptoJS = require("crypto-js");

var myArgs = process.argv.slice();

if(myArgs[2] == 'encrypt') {
    var ciphertext = CryptoJS.AES.encrypt(myArgs[3], myArgs[4]).toString();
    console.log(ciphertext)
}
else if(myArgs[2] == 'decrypt') {
    var bytes  = CryptoJS.AES.decrypt(myArgs[3], myArgs[4]);
    var originalText = bytes.toString(CryptoJS.enc.Utf8);
    console.log(originalText)
}
