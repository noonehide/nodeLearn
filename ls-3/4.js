/**
 * Created by Administrator on 2017/8/6.
 */

const express = require('express');
const querystring = require('querystring')


var server = express();
server.listen(8080);

// 自定义简单中间件
server.use(function(req, res, next){
    var str = '';
    req.on('data', function(data){
        str += data;
    });

    req.on('end', function(){
        req.body =  querystring.parse(str);
        next();
    });
});

server.use('./', function(req, res){
    console.log(req.a)
});