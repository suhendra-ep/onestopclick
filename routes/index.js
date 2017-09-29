var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  return res.json({message: "welcome to onestopclick api"})
});

module.exports = router;
