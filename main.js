"use strict";
var express = require('express');
var bodyParser = require('body-parser');

// var handler = require('./handler/chainsql');
// var submit = require('./handler/submit');
var test = require('./handler/test')
// // var handler = require('./handler/invoke1.4');

var app = express();
// app.use(bodyParser.json());
// // app.get('/query',handler.query)
// app.get('/register',handler.register)
// // app.get('/pay', handler.pay);
// app.get('/transfer',handler.transfer);
// app.get('/submit', submit.submit);
// app.post('/request',submit.request);
app.get('/payToken', test.payToken)

var server = app.listen(8888,function(){
  var host = server.address().address;
  var port = server.address().port;
  console.log('应用实例，访问地址为http://%s:%s',host,port);
})

