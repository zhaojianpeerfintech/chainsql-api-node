var c = require('./apiBase').c;

var tx_blob = null;
// var message;
// message.method = 'submit';
// tx_blob = '120000228000000024000000016140000000004C4B4068400000E8D4A5100073210330E7FC9D56BB25D6893BA3F317AE5BCF33B3291BD63DB32654A313222F7FD0207446304402201BF4B4A7E8976DF01B178F74E7BC578267C812DCC95A70DAA519B7AE2714E526022040C91ED70AA28CA128DE102A9B76DCE826650F8B892B8237086C7F44A5617F338114B5F762798A53D543A014CAF8B297CFF8F2F937E8831452F7DB76A067385B8EBA165B17ED84CC76203BC1';
// message.params[0].tx_blob = tx_blob;
// var obj = JSON.parse(message);
exports.submit= (req, res) => {  
    if (req.query['tx_blob'] == null ){
        return res.send("param tx_blob can't be null! ")
    }
    tx_blob = req.query['tx_blob'];
    // co(function*(){

        // c.connect("ws://127.0.0.1:6007");
        // yield c.connect("ws://127.0.0.1:6007");
        // console.log('连接成功');
    
        c.api.submit(tx_blob).then(result=>{
            res.json(result); 
            console.log(result);
        }).catch(err=>{
            console.log(err);
            res.send(err);
        });
    // });
}

// exports.request= (req, res) => {  
//     if (req.query['tx_blob'] == null ){
//         return res.send("param tx_blob can't be null! ")
//     }
//     tx_blob = req.query['tx_blob'];
    
//         c.api.connection.request({
//             command: "submit",
//             tx_blob: tx_blob
//         }).then(result=>{
//             console.log(result);
//             res.json(result);
//         }).catch(err=>{
//             console.log(err);
//             res.send(err);
//         });
// }

exports.request= (req, res) => {  
    //请求头类型必须为 Content-Type=application/json
    if(req.body == null){
        return res.send("request's body can't be null or Content-Type must be application/json ")
    }
    body = req.body; 
    console.log(body.command); 
        c.api.connection.request(body)
        .then(result=>{
            console.log(result);
            res.json(result);
        }).catch(err=>{
            console.log(err);
            res.send(err);
        });
}

// exports.request= (req, res) => {  
//     if (req.body.command) {
//         //能正确解析 json 格式的post参数
//         return postRequest(req.body,res);
//     } else {
//         var body = '', jsonStr;
//         req.on('data', function (chunk) {
//             body += chunk; //读取参数流转化为字符串
//         });
//         req.on('end', function () {
//             //读取参数流结束后将转化的body字符串解析成 JSON 格式
//             try {
//                 console.log("reuest body:", body);
//                 jsonStr = JSON.parse(body);
//                 console.log(jsonStr);
//             } catch (err) {
//                 jsonStr = null;
//             }
//             jsonStr ? postRequest(jsonStr,res) : res.send("parse request'body failed");
//         }); 
//     }      
// }

// function postRequest(body,res){
//     c.api.connection.request(body)
//                 .then(result=>{
//                     console.log(result);
//                     res.json(result);
//                 }).catch(err=>{
//                     console.log(err);
//                     res.send(err);
//                 });
// }