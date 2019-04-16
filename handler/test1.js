const ChainsqlAPI = require('chainsql').ChainsqlAPI;
const co = require('co')
const c = new ChainsqlAPI();
var account ={
    address : "zHb9CJAWyB4zj91VRWn96DkukG4bwdtyTh",
    secret : "xnoPBzXtMeMyMHUVTgbuqAfg1SUTb"
}

c.setRestrict(true);


co(function*(){
    yield c.connect("ws://127.0.0.1:6007");
    console.log('连接成功');
    c.as(account);
        // c.api.connection.request({
        //     command: "submit",
        //     tx_blob: "1200002280000000240000000661400000003B9ACA0068400000000000000A73210330E7FC9D56BB25D6893BA3F317AE5BCF33B3291BD63DB32654A313222F7FD02074473045022100B6ACC2723667B68CE3947C210573986F82B3E1D1D16758C8B17F29FA430184DF02202B399B6B65BC79C6466870F38DD6068B0C28C54C2266196F94906ADA531EEA278114B5F762798A53D543A014CAF8B297CFF8F2F937E88314396377B51FE231AB4CE43694C57089255F84DE00"
        // }).then(result=>{
        //     console.log(result);
        // }).catch(err=>{
        //     console.log(err);
        // });
        // c.getServerInfo(callback);
        // c.getUnlList(callback);
        // c.createTable("node_created", [
        //     {
        //         'field':'id',
        //         'type':'int',
        //         'length':11,
        //         'PK':1,
        //         'NN':1,
        //         'UQ':1
        //     },
        //     {
        //         'field':'name',
        //         'type':'varchar',
        //         'length':50,
        //         'default':null
        //     },
        //     {
        //         'field':'age',
        //         'type':'int'
        //     }]
        // ).submit({
        //     expect:"send_success"
        // }).then( (result) => {
        //     console.log(result);
        // }).catch(err=>{
        //     console.error(err);
        // });
        // c.table("node_created").insert([
        //     {id:1, name: 'peera',age: 22},
        //     {id:2, name: 'peerb',age: 21}
        // ]).submit();
        c.table("node_created").get({id: 1}).update({age:'52',name:'lisi'}).submit();

})

function callback (err,data){
	if(err){
		console.error(err);
	}else{
		console.log(JSON.stringify(data));
	}
}