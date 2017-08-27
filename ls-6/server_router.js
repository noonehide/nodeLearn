/**
 * Created by Administrator on 2017/8/9.
 */
const express = require('express');

var server = express();
// 目录1
var routeUser= express.Route();
server.use('/user', routeUser);

var routeArticle= express.Route();
server.use('/article', routeArticle);

routeUser.get('./1.html', function(req, res){
    res.send('user1');
});

routeUser.get('./2.html', function(req, res){
    res.send('user2');
});

routeArticle.get('./1999', function(req, res){

});
server.listen(8080);