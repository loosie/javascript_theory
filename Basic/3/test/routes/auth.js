const express = require('express');
const router = express.Router();
const util = require('../modules/util');
const CODE = require('../modules/statusCode');
const MSG = require('../modules/responseMessage');
const jwt = require('../modules/jwt');
const TOKEN_EXPIRED = -3
const TOKEN_INVALID = -2


router.get('/auth', async (req, res, next) => {
    console.log('hi~!!@!@!@');
    next();
});


router.get('/auth/:authid', async (req, res) => {
    console.log('hi~');
});



router.get('/local', async (req, res) => {
    var token = req.headers.token;
        if (!token) {
            return res.json(util.fail(CODE.BAD_REQUEST, MSG.EMPTY_TOKEN));
        }
        const user = await jwt.verify(token);
        console.log("user : " +user.idx);
        // console.log('token : ' + token);
        // console.log(user.useridx)

        if (user === TOKEN_EXPIRED) {
            console.log(1);
            return res.json(util.fail(CODE.UNAUTHORIZED, MSG.EXPIRED_TOKEN));
        }
        if (user === TOKEN_INVALID) {
            console.log(2);
            return res.json(util.fail(CODE.UNAUTHORIZED, MSG.INVALID_TOKEN));
        }
        if (user.name === undefined) {
            console.log(3);
            return res.json(util.fail(CODE.UNAUTHORIZED, MSG.INVALID_TOKEN));
        }
        return res.json(util.success(CODE.OK, MSG.AUTH_SUCCESS));
});
module.exports = router;