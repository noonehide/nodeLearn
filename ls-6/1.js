/**
 * Created by Administrator on 2017/8/9.
 */
const express = require('express');
const consolidate = require('consolidate');
const cookieParser = require("cookie-parser");
const cookieSession = require("cookie-session");
const bodyParser = require('body-parser');
var multer = require("multer");

var server = express();

server.use(cookieParser('miyao'));
var arr = [];
for(var i=0; i< 1000; i++){
    arr.push('keys_' + Math.random());
}

server.use(cookieSession({name: 'ses_id', keys: arr, maxAge: 2 * 3600 * 1000}));
server.use(bodyParser.urlencoded({extended: false}));
server.use(multer({dest: './www/upload'}).any());

// 输出什么
server.set('view engine', 'html');
// 位置
server.set('views', './views');
//类型
server.set('html', consolidate.ejs);

server.get('/index', function(req, res){
    if(req.session.userid){
        res.render('1.ejs', {name: 'jack'})
    } else {
        res.render('login.ejs', {name: 'jack'})
    }
});
server.listen(8080);
