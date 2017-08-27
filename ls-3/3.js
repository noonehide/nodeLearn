/**
 * Created by Administrator on 2017/8/6.
 */

const express = require('express');
const exopressStatic = require('express-static')
const bodyParser = require('body-parser')


var server = express();
server.listen(8080);

server.use('/', function(req, req, next) {
    console.log(req.body); // body 容纳的是post数据， query存放的是get税局
    next();
});

server.use('/', function(req, res, next) {
    console.log(req.body); // body 容纳的是post数据， query存放的是get税局
});