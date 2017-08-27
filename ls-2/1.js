/**
 * Created by Administrator on 2017/8/6.
 */

// 模块不存在全局变量，因为源码中使用闭包
exports.a = 12;

// 打包输出
module.exports={
    a: 1,
    b: 2,
    c: 3
};