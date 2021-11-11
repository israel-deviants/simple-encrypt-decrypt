const CryptoJS = require("crypto-js")

const myArgs = process.argv.slice();
const bytes  = CryptoJS.AES.decrypt(myArgs[2], myArgs[3])
const originalText = bytes.toString(CryptoJS.enc.Utf8)

console.log(originalText)