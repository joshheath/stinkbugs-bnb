var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('add-property');
});

router.post('/', function(req, res, next) {
  // res.redirect('/display-property', {data: req.body})
  res.render('display-property', {data: req.body})
})

router.get('/display-property', function(req,res,next) {
  res.render('display-property', {data: req.body})
})

module.exports = router;