/**
 * Created by Administrator on 2017/8/4.
 */
const fs = require ('fs');

// 读取文件
fs.readFile('read.txt', function(err, data) {
    if (!err) {
        console.log('err', err)
    } else {
        // 读取出来是Buffer数据
        console.log('value', data)
        //
        console.log('value', data.toString())
    }
});
// 写入文件, 覆盖写入
const content = 'content';
fs.writeFile('./write.txt', content, function(err, value) {
    console.log('value', value)
});