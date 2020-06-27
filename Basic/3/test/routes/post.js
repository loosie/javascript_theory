var express = require('express');
var router = express.Router();
let Post = require("../models/post");
let util = require('../modules/util');
let statusCode = require('../modules/statusCode');
let resMessage = require('../modules/responseMessage');

let moment = require('moment');

//  모든 게시글 조회
router.get('/', async(req, res)=>{
    res
        .status(statusCode.OK)
        .send(statusCode.OK, resMessage.READ_ALL_POSTS, Post);

});

//  게시글 고유 id값을 조회
router.get('/:id', async(req, res)=>{
    const id = req.params.id;

    const post = Post.filter(post => post.postIdx ==id);

    // 게시글 없을 때
    if(post[0] === undefined){
        res
            .status(statusCode.BAD_REQUEST)
            .send(util.fail(statusCode.BAD_REQUEST, resMessage.NULL_POST));
    }

    res
        .status(statusCode.OK)
        .send(util.success(statusCode.OK, resMessage.READ_USER_ID, post[0]));
});


// 게시글 생성
router.post('/', async(req, res)=>{
    const{author, title, content} = req.body;

    // null 처리
    if(!author || !title || !content){
        res
            .status(statusCode.BAD_REQUEST)
            .send(util.fail(statusCode.BAD_REQUEST, resMessage.NULL_VALUE));
    }

    const postIdx = parseInt(Post[Post.length-1].postIdx) +1;
    const date = moment().format("YYYY년 MM월 DD일");
    Post.push({postIdx, author, title, content, date});
    const post = Post.filter(post => post.postIdx == postIdx);

    res
        .status(statusCode.CREATED)
        .send(util.success(statusCode.CREATED, resMessage.CREATED_POST, post[0]));
});

// 게시글 고유 id값을 가진 게시글을 수정
router.put('/:id', async(req, res)=>{
    const id = req.params.id;
    const dto = {author, title, content} = req.body;

// 그냥 404에러
// // null값
//     if(!id){
//         res
//         .status(statusCode.BAD_REQUEST)
//         .send(util.fail(statusCode.BAD_REQUEST, resMessage.NULL_POST));
//     }

// 게시글 없을 때
    const post = Post.filter(post => post.postIdx ==id);
    if(post[0] === undefined){
        res
            .status(statusCode.BAD_REQUEST)
            .send(util.fail(statusCode.BAD_REQUEST, resMessage.NULL_POST));
    }

    for(item in dto){
        post[0][`${item}`] = dto[`${item}`];
    }
    post[0].date = moment().format("YYYY년 MM월 DD일");

    res
        .status(statusCode.OK)
        .send(util.success(statusCode.OK, resMessage.CHANGED_USER_INFO, post[0]));
});


// 게시글 고유 id값을 가진 게시글 삭제
router.delete('/:id', async(req, res)=>{
    const id = req.params.id;
    const post = Post.filter(post => post.postIdx == id);

 

    // 게시글 없을 때
    if(post[0] === undefined){
        res
            .status(statusCode.BAD_REQUEST)
            .send(util.fail(statusCode.BAD_REQUEST, resMessage.NULL_POST));
    }
    Post.splice(id);
    // console.log(Post);

    res
        .status(statusCode.OK)
        .send(util.success(statusCode.OK, resMessage.DELETE_SUCCESS, {deletedIdx: id}));

})
module.exports = router;