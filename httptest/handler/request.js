var request = require('request');
var url="http://127.0.0.1:5007";
exports.request = (requestData) => {
    return new Promise((resolve, reject)=>{
        request({
            url: url,
            method: "POST",
            json: true,
            headers: {
                "content-type": "application/json",
            },
            body: requestData
        }, function(error, response, body) {
            if (!error && response.statusCode == 200) {
                // console.log("handler.request's result is: ", body); // 请求成功的处理逻辑
                resolve(body);
            } else{
                reject(error);
            }         
        });
    })
}

