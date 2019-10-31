var express = require('express');
var router = express.Router();
const comment = require('../../data/entites/comment')


/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource -> '+comment.one());
});

module.exports = router;
