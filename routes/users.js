var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/u/:user', function(req, res, next) {
  res.send(`name:  ${req.params.name}, password: ${req.params[0]}`);
  // res.send('respond with a resource');
});

module.exports = router;
