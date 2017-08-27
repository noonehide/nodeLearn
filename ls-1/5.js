/**
 * Created by Administrator on 2017/8/4.
 */

var http = require('http');
const urlLib = require('url');

//创建服务
var server = http.createServer(function (request, response) {
    console.log('有人来了', request.url);
    // 第二个参数是否解析query部分
    var obj = urlLib.parse(request.url, true);

    response.write('hello, man');
    response.end();

    console.log(obj.query);
});

// 监听端口
server.listen(8001)