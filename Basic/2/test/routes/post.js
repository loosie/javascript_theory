var express = require('express');
const router = express.Router();

const statusCode = require('../modules/statusCode');
const util = require('../modules/util');
const resMsg = require('../modules/responseMessage');

const post = require('../models/post');

// /post/signup
router.post('/signup', async(req,res) => {
    const{
        id,password 
    } = req.body;
    if(!id || !password){
        res.status(statusCode.BAD_REQUEST).send(util.fail(statusCode.BAD_REQUEST,resMsg.NULL_VALUE));
    }

    const resultIdx = await post.signup(id,password);

    res.status(statusCode.OK).send(util.success(statusCode.OK, resMsg.CREATED_USER,{resultIdx:resultIdx}));

})

module.exports = router;
