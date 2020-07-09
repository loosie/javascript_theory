var express = require('express');
var router = express.Router();
let User = require("../models/users");
let util = require('../modules/util');
let statusCode = require('../modules/statusCode');
let resMessage = require('../modules/responseMessage');

const crypto = require('crypto');


/* v1 (요청받고 응답주기)
router.post('/signup', async(req, res) => {
  const{ id, name, password, email} = req.body;
  User.push({id, name, password, email});
  res.status(200).send(User);
});
*/

/* v2 (에러처리)
router.post('/signup', async(req, res) => {
  const{ id, name, password, email} = req.body;
  
  // request data 확인 후 없다면 Bad Request
  if(!id || !name || !password || !email){
    return res.status(400).send({message : 'BAD REQUEST'});
  }
  // already ID
  if(User.filter(user => user.id == id).length >0){
    return res.status(400).send({message : 'ALREADY ID'});
  }
  
  User.push({id, name, password, email});
  res.status(200).send(User);
});
*/

router.post('/signup', async(req, res) => {
  const{id, name, password, email} = req.body;
  
  // request data 확인 후 없다면 Bad Request
  if(!id || !name || !password || !email){
    res
      .status(statusCode.BAD_REQUEST)
      .send(util.fail(statusCode.BAD_REQUEST, resMessage.NULL_VALUE));
  }
  // already ID
  if (await User.checkUser(user)) {
    return res.status(statusCode.BAD_REQUEST)
        .send(util.fail(statusCode.BAD_REQUEST, resMessage.ALREADY_ID));
 
}

  const salt = crypto.randomBytes(32).toString();
  // const hashedPassword = crypto.pbkdf2Sync(password,salt, 1, 32, 'sha512').toString('hex');
  
  // User.push({id, name, hashedPassword, email});
  const idx = await User.signup(id, name, password, salt, email);
  if (idx === -1) {
      return res.status(statusCode.DB_ERROR)
          .send(util.fail(statusCode.DB_ERROR, resMessage.DB_ERROR));
  }
  res.status(statusCode.OK)
      .send(util.success(statusCode.OK, resMessage.CREATED_USER, {userId: idx}));
 
});


router.post('/signin', async(req,res)=>{
  const{id, password} =req.body;

  if(!id || !password){
    res
      .status(statusCode.BAD_REQUEST)
      .send(util.fail(statusCode.BAD_REQUEST, resMessage.NULL_VALUE));
  }
  const user = User.filter(user => user.id ==id);
  if(user.length ==0){
    res
      .status(statusCode.BAD_REQUEST)
      .send(util.fail(statusCode.BAD_REQUEST, resMessage.NO_USER));
  }

  if(user[0].password !== password){
    res
      .status(statusCode.BAD_REQUEST)
      .send(util.fail(statusCode.BAD_REQUEST, resMessage.MISS_MATCH_PW));
  }

  res
  .status(statusCode.OK)
  .send(util.success(statusCode.Ok, resMessage.LOGIN_SUCCESS, {userId : id}));

});

router.get('/profile/:id', async(req, res)=>{
  const id = req.params.id;

  const user = User.filter(user => user.id ==id);

  if(user[0] === undefined){
    res
      .status(statusCode.BAD_REQUEST)
      .send(util.fail(statusCode.BAD_REQUEST, resMessage.NO_USER));
  }

  res
    .status(statusCode.OK)
    .send(util.success(statusCode.OK, resMessage.READ_PROFILE_SUCCESS, user[0]));
})
module.exports = router;