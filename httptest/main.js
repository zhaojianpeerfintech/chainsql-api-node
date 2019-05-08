// // var request = require('request');
const co = require('co');
// // var lib = require('./handler/lib');
const API = require('chainsql-lib').ChainsqlLibAPI;
let api = new API();
var getAccountInfo = require('./handler/lib').getAccountInfo;
var lib = require('./handler/lib');
var url="http://127.0.0.1:5007";

co(function*(){

    var tx_json = {
        "Account": "zHb9CJAWyB4zj91VRWn96DkukG4bwdtyTh",
        "Amount":"1000000000",
        "Destination": "zcNSghmUVfMPfAC2SMiuhzPrByHVSAqCns",
        "Fee":"10",
        "TransactionType": "Payment"                         
    }
    var result = yield getAccountInfo('zHb9CJAWyB4zj91VRWn96DkukG4bwdtyTh')
    console.log(result);
    tx_json.Sequence = result.result.account_data.Sequence;
    var secret = 'xnoPBzXtMeMyMHUVTgbuqAfg1SUTb';
    let signedRet = api.sign(JSON.stringify(tx_json), secret);
    console.log(signedRet);
    var data = yield lib.submit(signedRet.signedTransaction)
    console.log(data);
})

