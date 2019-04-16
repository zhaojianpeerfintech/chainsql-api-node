const ChainsqlAPI = require('chainsql').ChainsqlAPI;
const co = require('co')
const apiBasic = require('./apiBase');
const c = apiBasic.c;
var address = "zcNSghmUVfMPfAC2SMiuhzPrByHVSAqCns";
var secret = "xh4Aqa8SHhdJY9AHxSndoCMQFV8xh";

exports.payToken =(req, res)=>{ 
    co(function*(){
    // c.connect("ws://127.0.0.1:6007");

    var dest = req.query['dest'];
    var value = req.query['value'];
    if(dest == null || dest == undefined || dest == "" || value == null || value == undefined || value == ""){
        return res.json({
            resultCode: '701',
            resultMessage:
                'dest && value not be null.'
        });
    }
    var tx_json = {
        "Account": address,
        "Amount":{
            "currency" : "GRD",                         
            "issuer" : "zcNSghmUVfMPfAC2SMiuhzPrByHVSAqCns"
        },
        "Fee":"10",
        "TransactionType": "Payment"                         
    }
    let info = yield apiBasic.getSequence(address);
    // console.log("sequence：" + c.api.getAccountInfo(address).sequence)
    console.log("accountInfo"+JSON.stringify(info));
    tx_json.Sequence = info.account_data.Sequence;
    tx_json.Destination = dest;
    tx_json.Amount.value = value;
    console.log(tx_json);
    let signedRet = c.sign(tx_json,secret);
    console.log(signedRet);
    c.api.submit(signedRet.signedTransaction).then(function(data){
        console.log(data);
        res.json(data);
    }).catch(err=>{
        console.log(err);
        res.json(err);
    });
})
}