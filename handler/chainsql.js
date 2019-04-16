const ChainsqlAPI = require('chainsql').ChainsqlAPI;
var logger = require('./log').logger('chainsql');

const c = new ChainsqlAPI();
c.connect("ws://127.0.0.1:6007");


exports.register = function(req,res){
    c.as({
        "secret": "xnoPBzXtMeMyMHUVTgbuqAfg1SUTb",
        "address": "zHb9CJAWyB4zj91VRWn96DkukG4bwdtyTh"
    });
    var dest = req.query['dest'];
    console.log("pay 1000 zxc to dest: %s",dest);
    c.pay(dest,1000).submit({
        expect:"send_success"
    }).then( (result) => {
        console.log("submit result is %s", JSON.stringify(result));
        res.send(result);
        c.event.subscribeTx(result.tx_hash, (err,  data) => {
            if (err != null) {
                logger.error(result.tx_hash, err);
                return;
            }
            logger.info("ledger result is %s for tx: %s", data.status, data.transaction.hash)
            console.log("data is" + JSON.stringify(data));
        });
        //res.send("success");
    }).catch( (err) => {
        res.send(err);
        console.log(err);
    });
}


exports.transfer = (req, res) => {
    var secret = req.query['secret'];
    var dest = req.query['dest'];
    var ammount = req.query['ammount'];
    var source = c.generateAddress(secret);
    c.as({
        "secret": source.secret,
        "address": source.address
    })

    c.pay(dest,ammount).submit({
        expect:"send_success"
    }).then( (result) => {
        console.log("submit result is %s", JSON.stringify(result));
        res.send(result);
        c.event.subscribeTx(result.tx_hash, (err,  data) => {
            if (err != null) {
                logger.error(result.tx_hash, err);
                return;
            }
            logger.info("ledger result is %s for tx: %s", data.status, data.transaction.hash)
            console.log("data is" + JSON.stringify(data));
        });
        //res.send("success");
    }).catch( (err) => {
        res.send(err);
        console.log(err);
    });
}




// exports.pay = function(req,res){
    // c.as({
    //     "secret": "xnoPBzXtMeMyMHUVTgbuqAfg1SUTb",
    //     "address": "zHb9CJAWyB4zj91VRWn96DkukG4bwdtyTh"
    // });
//     var dest = req.query['dest'];
//     console.log("pay 1000 zxc to dest: %s",dest);
//     c.pay(dest,1000).submit({
//         expect:"validate_success"
//     }).then( (result) => {
//         console.log("submit result is %s",  JSON.stringify(result));
//         res.send(result);
//         //res.send("success");
//     }).catch( (err) => {
//         res.send(err);
//         console.log(err);
//     });
// }