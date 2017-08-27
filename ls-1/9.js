/**
 * Created by Administrator on 2017/8/5.
 */
var http = require('http');
var urlLib = require('url');
var querystring = require('querystring');
var fs = require('fs');

var server = http.createServer(function (req, rep) {
    const url = req.url;
    var str = '';
    req.on('data', function (data) {
        str += data;
    })
    console.log(url);

    var GET = {};
    var POST = {};
    req.on('end', function () {
        var obj = urlLib.parse(str, true);
        GET = obj.query;
        POST = querystring.parse(url);
        console.log(GET, POST);
    })

    //请求资源
    var file_path = './www' + url;
    fs.readFile(file_path, function(){

    });
})

server.listen(8080);
;
