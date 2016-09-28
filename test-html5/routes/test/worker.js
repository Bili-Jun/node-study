var express = require('express');
var router = express.Router();


router.get('/', function(req, res, next) {
  res.render('test_worker/index.html', { title: 'HTML5 Web worker 示例' });
});

router.get('/time', function(req, res, next) {
  res.render('test_worker/test_time.html', { title: 'HTML5 Web worker 示例:计时器' });
});

module.exports = router;
