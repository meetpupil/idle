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
    req.checkBody('name', 'Empty name').notEmpty();
    req.checkBody('email', 'Invalid email').isEmail();
    req.checkBody('message', 'Empty message').notEmpty();
    var errors = req.validationErrors();

    if(errors) {
      res.render('contact', {
        title: 'Contact DevPupil',
        name: req.body.name,
        email: req.body.email,
        message: req.body.message,
        errorMessages: errors
      });
    } else {
      res.render('thank', { title: 'Thank You!'});
    }
  });

module.exports = router;
