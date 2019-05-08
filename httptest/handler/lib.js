
var request = require('./request');
// const API = require('chainsql-lib').ChainsqlLibAPI;
// let api = new API();


exports.getAccountInfo = (address) =>{
    var requestData = {
        "method": "account_info",
        "params": [
            {
                "account": address
            }
        ]
    }

    return request.request(requestData);
}

exports.submit = (tx_blob) =>{
    var requestData = {
        "method": "submit",
        "params": [
            {
                "tx_blob": tx_blob
            }
        ]
    }
    return request.request(requestData);
}