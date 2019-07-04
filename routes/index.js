var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Alleged Scumbag' });
});

router.get('/add', function(req, res, next) {
  res.render('add', { title: 'Add Scumbag' });
});

module.exports = router;
