

var router = require('express').Router();
var IndexController = require('../controller/IndexController.js');

/* GET home page. */
router.get('/', IndexController.index);
router.post('/getContent', IndexController.getContent);



module.exports = router;
