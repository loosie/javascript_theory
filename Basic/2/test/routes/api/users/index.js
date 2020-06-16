var express = require('express');
var router = express.Router();

router.get('/', (req, res) =>{
    const result = {
        status: 200,
        message: 'USER!!!'
    }
    res.status(200).send(result);
});

router.use('/', require('./users'));
  
  module.exports = router;