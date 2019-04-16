const ChainsqlAPI = require('chainsql').ChainsqlAPI;
const c = new ChainsqlAPI();
c.connect("ws://127.0.0.1:6007");

tx_hash = "0C69490B88CE3D38A81A554405CCD1922528266C9480BE37A3F6059D29616BF2";

c.getTransaction(tx_hash,(err,data)=>{
    console.log(data);
    console.log(JSON.stringify(data))
});
