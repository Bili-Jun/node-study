var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: '学习HTML5' });
});

router.get('/test', function(req, res, next) {
  res.render('test', { title: 'HTML5 Web worker' });
});

module.exports = router;
