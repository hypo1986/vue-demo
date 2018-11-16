/**
 * Created  2017/10/27.
 */
"use strict";
var express = require('express');
var router = express.Router();
var nodeWeixinMenu = require('node-weixin-menu');
var settings = require('node-weixin-settings');
var weixinMenu = require('../../config/wechat-menu')

var nodeWeixinConfig = require("node-weixin-config");
nodeWeixinConfig.app.init(config.wechat);


module.exports = router;
nodeWeixinMenu.create(settings, config.wechat, weixinMenu, function (err, data) {
  //error === true
  //data.errcode === 0
  //data.errmsg === 'ok'
})

router.get('/server', function (req, res, next) {
  res.send('This is wechat page')
})

router.get('/config',function (req,res,next) {

})
