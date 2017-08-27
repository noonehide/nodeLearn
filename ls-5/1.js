/**
 * Created by Administrator on 2017/8/7.
 */

const express = require('express');
const path = require('path');
const bodyPaser = require('body-parser');
const multer = require('multer');
const fs = require('fs');

var objMulter=multer({dest: './www/upload/'});

const server = express();

server.use(objMulter.any());

server.post('/', function(req, res){
    var newName=req.files[0].path+pathLib.parse(req.files[0].originalname).ext;
    fs.rename(req.files[0].path, newName, function(err){
        if (err) {
            res.send('上传失败')
        } else {
            res.send('上传成功')
        }
    });
});

server.listen(8080);