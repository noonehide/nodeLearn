/**
 * Created by Administrator on 2017/8/5.
 */
var http = require('http');
var urlLib = require('url'); // 解析get请求
var querystring = require('querystring'); // 解析Post请求
var fs = require('fs');

var server = http.createServer(function (req, rep) {
    var url = req.url;
    var GET = {};
    // get请求
    var getObj = urlLib.parse(url, true);
    GET = getObj.query;
    console.log(url, GET);
    // post
    var POST = {};
    var str = '';
    req.on('data', function (data) {
        str += data;
    });

    req.on('end', function () {
        console.log('data', str);
        POST = querystring.parse(str);
        console.log(url, GET, POST);
    });

    // 文件请求
    var file_name = './www' + url;
    fs.readFile(file_name, function(err, data){

    })
});


server.listen(8001);

