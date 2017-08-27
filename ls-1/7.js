/**
 * Created by Administrator on 2017/8/4.
 */

var http = require('http');
const querystring = require('querystring');

//创建服务
var server = http.createServer(function (request, response) {
    var str = ''
    var POST = {};
    request.on('data', function(data){
        str+=data;
    });

    request.on('end', function(){
        console.log(str);
        POST = querystring.parse(str);
    });

    response.write('hello, man');
    response.end();
});

// 监听端口
server.listen(8001)