const ChainsqlAPI = require('chainsql').ChainsqlAPI;
// const keypairs = require('chainsql-keypairs');
// const addressCodec = require('chainsql-address-codec');
const c = new ChainsqlAPI();
// c.connect("ws://127.0.0.1:6007");
// var keypair;
// var account= {
//     secret: "xh4Aqa8SHhdJY9AHxSndoCMQFV8xh",
//     publicKey: '',
//     address:''
// };
// keypair = keypairs.deriveKeypair(account.secret);

// account.address = keypairs.deriveAddress(keypair.publicKey)
// var buf = new Buffer(keypair.publicKey, 'hex');
// var opt = {
//     version: 35
// }
// account.publicKey = addressCodec.encode(buf, opt);
// console.log(JSON.stringify(account));
var account = c.generateAddress("xh4Aqa8SHhdJY9AHxSndoCMQFV8xh");
console.log(account);

