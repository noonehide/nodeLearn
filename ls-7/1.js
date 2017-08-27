/**
 * Created by Administrator on 2017/8/10.
 */
const mysql = require('mysql');

// 1. 链接mysql(服务器名， 用户名， 密码，库)
var db = mysql.createConnection({host: 'localhost', user: 'root', password: 'root', database: '20170810'});

// 查询
db.query("SELECT * FROM `user_table`;", function(err, data){
    if (err) {

    } else {
        console.log("成功了", data );
        console.log("成功了", JSON.stringify(data) );
    }
});
