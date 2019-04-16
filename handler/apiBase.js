const ChainsqlAPI = require('chainsql').ChainsqlAPI;
const co = require('co')
const c = new ChainsqlAPI();
co(function*(){
    // c.connect("ws://127.0.0.1:6007");
    yield c.connect("ws://127.0.0.1:6007");
    console.log('连接成功');
});

exports.getSequence = (address, opt) =>{
    // co(function*(){
        // yield c.connect("ws://127.0.0.1:6007");
        // console.log('连接成功');
        var request = {
            command: 'account_info',
            account: address    //,
            // ledger_index: "current",
            // queue: true
            //ledger_index: options.ledgerVersion || 'validated'
        }
        return c.api.connection.request(request);
    // })
    
}

module.exports.c = c;