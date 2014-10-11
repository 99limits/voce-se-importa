var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
  res.render('index', { title: 'It works!' });
});

router.get('/test', function(req, res) {
  res.send('it really works');
});

module.exports = router;
