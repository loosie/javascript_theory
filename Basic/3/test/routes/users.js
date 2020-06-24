/* 
  sign up
  METHOD : POST
  URI : localhost:3000/api/users/signup
  REQUEST BODY : id, name, password, email
  RESPONSE STATUS : 200 (OK)
  RESPONSE DATA : All User Data
*/
var express = require('express');
var router = express.Router();
let User = require("../models/users");
const users = require('../models/users');
let util = require('../modules/util');
let statusCode = require('../modules/statusCode');
let resMessage = require('../modules/responseMessage');


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
  if(User.filter(user => user.id == id).length >0){
      res
        .status(statusCode.BAD_REQUEST)
        .send(util.fail(statusCode.BAD_REQUEST, resMessage.ALREADY_ID));
    
  }
  
  User.push({id, name, password, email});
  res
  .status(statusCode.CREATED)
  .send(util.success(statusCode.CREATED, resMessage.CREATED_USER, {userId : id}));
});


module.exports = router;