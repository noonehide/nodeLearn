/**
 * Created by Administrator on 2017/8/4.
 */

var http = require('http');
var querystring = require('querystring');
const urlLib = require('url');

//创建服务
var server = http.createServer(function (request, response) {
    console.log('有人来了', request.url);
    var GET = {};
    if (request.url.indexOf('?') != -1) {
        var arr = request.url.split('?');
        var url = arr[1];
        GET = querystring.parse(url);

    } else {
        var url = request.url;
    }
    response.write('hello, man');
    response.end();
    console.log(url,GET);
});

// 监听端口
server.listen(8001)