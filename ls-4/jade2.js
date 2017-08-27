/**
 * Created by Administrator on 2017/8/6.
 */

const jade = require('jade');

//
jade.renderFile('./views/2.jade', {pretty: true, json: {width: '100px', height: '200px'}, arr: ['left', 'main']});
