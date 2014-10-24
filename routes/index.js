var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
  res.redirect('/crianças');
});

router.get('/:tag', function(req, res) {
  var tag = req.params.tag,
      db = req.db,
      collection = db.get('instituicoes');


  collection.find({ "categoria.tags":  tag }, {}, function(e, instituicoes) {
    res.render('instituicao', {
      tag: tag,
      instituicao: instituicoes && instituicoes.length ? instituicoes[0] : null
    });
  });
});

module.exports = router;
