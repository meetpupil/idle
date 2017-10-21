var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'DevPupil | IDLE' });
});

/* GET about page. */
router.get('/about', function(req, res, next) {
  res.render('about', { title: 'About DevPupil'});
});

/* GET contact page. */
router.route('/contact')
  .get(function(req, res, next) {
    res.render('contact', { title: 'Contact DevPupil'});
  })
  .post(function(req, res, next) {
    res.render('thank', { title: 'Thank You!'});
  });

module.exports = router;
