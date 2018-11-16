/**
 * Created  *  2017/10/18.
 */
"use strict";
var express = require('express');
var router = express.Router();

var fs = require('fs');
var path = require('path');

router.get('*', function (req, res, next) {
  fs.readFile(path.join(__dirname, '..', '..', 'public/dist/index.html'), 'utf8', function (err, html) {
    if (err) {
      return next(err)
    }
    res.send(html)
  });
});

module.exports = router;
