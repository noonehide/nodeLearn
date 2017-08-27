/**
 * Created by Administrator on 2017/8/6.
 */

const express = require('express');
const cookieParser = require('cookie-parser')
var server = express();

// 参数签名密钥
server.use(cookieParser('fdasffdasffdaf'));

server.use('/', function(req, res){
    // 读取客户端的未签名cookie
    console.log(req.cookies);
    // 签名之后的cookie
    console.log(req.signedCookies);

    //加密密钥
    req.secret = 'fdasffdasffdaf';
    //签名
    res.cookie('user', 'a', {signed: true});
    // aaa路径下才能读取cookie，设置过期时间30天,把cookie发送到客户端
    res.cookie('user', 'a', {path: './aaa', maxAge: 30 * 24 * 3600 * 1000});
    res.send('ok');
});
server.listen(8080);
