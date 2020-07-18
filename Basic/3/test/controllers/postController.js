let Post = require("../models/post");
let util = require('../modules/util');
let statusCode = require('../modules/statusCode');
let resMessage = require('../modules/responseMessage');

let moment = require('moment');


//  모든 게시글 조회
exports.readAllPost = async(req, res)=>{
    const allPost = await Post.readAllPost();
    return res
        .status(statusCode.OK)
        .send(util.success(statusCode.OK, resMessage.READ_ALL_POSTS,allPost));

};

//  게시글 id값 조회
exports.readPost = async(req, res)=>{
    const id = req.params.id;

    const post = await Post.readPost(id);
 // 게시글 없을 때
    if(post.length ===0)
        return res 
                .status(statusCode.BAD_REQUEST)
                .send(util.fail(statusCode.BAD_REQUEST, resMessage.NULL_POST));


    res
        .status(statusCode.OK)
        .send(util.success(statusCode.OK, resMessage.READ_POST_ID, post[0]));
};


// 게시글 생성
exports.createPost =  async(req, res)=>{
    const{author, title, content} = req.body;

    // null 처리
    if(!author || !title || !content){
        res
            .status(statusCode.BAD_REQUEST)
            .send(util.fail(statusCode.BAD_REQUEST, resMessage.NULL_VALUE));
    }

    const postIdx = await Post.writePost(author, title, content);

    res
        .status(statusCode.CREATED)
        .send(util.success(statusCode.CREATED, resMessage.CREATED_POST, {postIdx : postIdx}));
};

// 게시글 고유 id값을 가진 게시글을 수정
exports.modifyPost = async(req, res)=>{
    const id = req.params.id;
    const dto = {author, title, content} = req.body;

// 그냥 404에러
// // null값
//     if(!id){
//         res
//         .status(statusCode.BAD_REQUEST)
//         .send(util.fail(statusCode.BAD_REQUEST, resMessage.NULL_POST));
//     }


    await Post.updatePost(id, title, content);
    const post = await Post.readPost(id);

    // 게시글 없을 때
    if(post[0] === undefined){
        res
            .status(statusCode.BAD_REQUEST)
            .send(util.fail(statusCode.BAD_REQUEST, resMessage.NULL_POST));
    }

    res
        .status(statusCode.OK)
        .send(util.success(statusCode.OK, resMessage.CHANGED_POST, post[0]));
};


// 게시글 고유 id값을 가진 게시글 삭제
exports.deletePost = async(req, res)=>{
    const id = req.params.id;

    // 게시글 없을 때
    if(!id){
        res
            .status(statusCode.BAD_REQUEST)
            .send(util.fail(statusCode.BAD_REQUEST, resMessage.NULL_POST));
    }

    await Post.deletePost(id);

    res
        .status(statusCode.OK)
        .send(util.success(statusCode.OK, resMessage.DELETE_SUCCESS, {deletedIdx: id}));

};