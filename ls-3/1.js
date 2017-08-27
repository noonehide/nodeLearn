/**
 * Created by Administrator on 2017/8/6.
 */

const express = require('express');
const exopressStatic = require('express-static')


var server = express();
server.listen(8080);

// 接口
// 1. /login?user=xxx&pass=xxx   返回{ok: true; msg: 'xxx'};
//
var users = {
    'a': '123',
    'b': '456'
};

express.get('/login', function (req, res) {
    // 获取
    var user = req.query('user');
    var pass = req.query('pass');
    if (users[user] === null) {
        res.send({ok: false, msg: '不存在用户'})
    } else if (users[user] != pass) {
        res.send({ok: false, msg: '密码错误'})
    } else {
        res.send({ok: true, msg: 'ok'})
    }
});

express.use('/', function (req, res) {
    res.send('abc');
    res.end();
});

express.use('/a.html', function (req, res) {
    res.send('123');
    res.end();
});

server.use(expressStatic('./www')); // 把www文件夹当作静态文件夹



