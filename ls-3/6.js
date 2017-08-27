/**
 * Created by Administrator on 2017/8/6.
 */
const exress = require('express');
const cookieParser = require('cookie-parser');
const cookieSession = require('cookie-session');

var server = express();
server.use(cookieParser());

// 设置密钥组
server.use(cookieSession({
        name: 'sess',
        keys: ['aaa', 'bbb', 'ccc'],
        maxAge: 2 * 3600 * 1000
    }
));

server.use('/', function (req, res) {
    if(req.session['count'] === null) {
        req.session['count'] = 1;
    } else {
        req.session['count'] ++;
    }
    console.log('count', req.session['count']);
});

server.listen(8080);
