/**
 * Created by Administrator on 2017/8/6.
 */

const express = require('express');
const exopressStatic = require('express-static')
const bodyParser = require('body-parser')


var server = express();
server.listen(8080);
server.use(bodyParser.urlencoed({
    extended: true, // 扩展模式
    limit: 1024 // 限制100
}));

server.use('/', function(req, res) {
    console.log(req.body); // body 容纳的是post数据， query存放的是get税局

});

server.use(expressStatic('./www')); // 把www文件夹当作静态文件夹
