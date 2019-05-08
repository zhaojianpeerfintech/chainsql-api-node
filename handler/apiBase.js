const ChainsqlAPI = require('chainsql').ChainsqlAPI;
const path = require('path');
const co = require('co');
var fs = require('fs');
var url="";

const c = new ChainsqlAPI();
co(function*(){
    var config= yield readConfig("api_client.json");
    url = config.wsurl;
    // console.log(url);
    yield c.connect(url);
    console.log('%s连接成功', url);
});

function readConfig(file){
    return new Promise((resolve,reject)=>{
        fs.readFile(path.join(__dirname,file), function(err, data){
            if(err){
                console.error("read configuration file failed:", err);
                reject(err);
            } else {
                var conf = data.toString();
                resolve(JSON.parse(conf));
            }
        })
    })
}

exports.getSequence = (address, opt) =>{
        var request = {
            command: 'account_info',
            account: address    //,
            // ledger_index: "current",
            // queue: true
            //ledger_index: options.ledgerVersion || 'validated'
        }
        return c.api.connection.request(request);  
}

module.exports.c = c;