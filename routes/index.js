var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
  res.render('index');
});

router.get('/:tag', function(req, res) {
  var tag = req.params.tag,
      db = req.db,
      collection = db.get('instituicoes');

  collection.find({ tags:  tag }, {}, function(e, instituicoes) {
    res.render('instituicao', {
      tag: tag,
      instituicao: instituicoes.length ? instituicoes[0] : null
    });
  });
});

module.exports = router;
