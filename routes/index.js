var express = require('express');
var router = express.Router();
var md = require('marked');
var fs = require('fs');
var path = require('path');

/* GET home page. */
router.get('/*', function(req, res, next) {
  var filePath;

  if (!req.path || req.path === "/") {
    filePath = path.resolve(__dirname, '..', 'views/Bio.mkd');
  } else {
    filePath = req.path;
    if (filePath.indexOf('.mkd') < 0) {
      filePath = filePath + '.mkd';
    }
    filePath = path.resolve(__dirname, '..', path.normalize('views/' + filePath));
  }

  fs.readFile(filePath, function (err, data) {
    if (err) {
      return next();
    }

    res.render('layout', { content: md(data.toString()) });
  });

});

module.exports = router;
