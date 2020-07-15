var express = require('express');
var router = express.Router();
let User = require("../models/user");
let util = require('../modules/util');
let statusCode = require('../modules/statusCode');
let resMessage = require('../modules/responseMessage');

const jwt = require('../modules/jwt');
const crypto = require('crypto');
const responseMessage = require('../modules/responseMessage');


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
  if (!id || !name || !password || !email){
  return res
         .status(statusCode.BAD_REQUEST)
         .send(util.fail(statusCode.BAD_REQUEST, resMessage.NULL_VALUE));
        
  }
  // already ID
  if (await User.checkUser(id)) {
    return res.status(statusCode.BAD_REQUEST)
        .send(util.fail(statusCode.BAD_REQUEST, resMessage.ALREADY_ID));
 
}

  const salt = crypto.randomBytes(32).toString();
  const hashedPassword = crypto.pbkdf2Sync(password,salt, 1, 32, 'sha512').toString('hex');
  
  // User.push({id, name, hashedPassword, email});
  const idx = await User.signup(id, name, hashedPassword, salt, email);
  if (idx === -1) {
      return res.status(statusCode.DB_ERROR)
          .send(util.fail(statusCode.DB_ERROR, resMessage.DB_ERROR));
  }
  res.status(statusCode.CREATED)
      .send(util.success(statusCode.CREATED, resMessage.CREATED_USER, {userId: idx}));
 
 
});


router.post('/signin', async(req,res)=>{
  const{id, password} =req.body;

  if(!id || !password){
    return res
             .status(statusCode.BAD_REQUEST)
             .send(util.fail(statusCode.BAD_REQUEST, resMessage.NULL_VALUE));
  } 
// ID 존재유무 확인
  const user = await User.getUserById(id);
  if(user.idx === undefined){
    return res
              .status(statusCode.BAD_REQUEST)
              .send(util.fail(statusCode.BAD_REQUEST, resMessage.NO_USER));
  }

// 비밀번호 불일치            
  if(await User.signin(id,password)==false){
    return res
              .status(statusCode.BAD_REQUEST)
              .send(util.fail(statusCode.BAD_REQUEST,resMessage.MISS_MATCH_PW));
  }

  const {token, _} = await jwt.sign(user);
  console.log(user);
// 성공
  return res
          .status(statusCode.OK)
          .send(util.success(statusCode.OK,resMessage.LOGIN_SUCCESS, {accessToken :token}));

});

router.get('/profile/:id', async(req, res)=>{
  const id = req.params.id;

// id 존재 유무
  if(await User.checkUser(id)===false){
    res
      .status(statusCode.BAD_REQUEST)
      .send(util.fail(statusCode.BAD_REQUEST, resMessage.NO_USER));
  }

  const user = await User.getUserById(id);
  res
    .status(statusCode.OK)
    .send(util.success(statusCode.OK, resMessage.READ_PROFILE_SUCCESS, user));
})
module.exports = router;