const router = require('koa-router')();
//引用controller层的方法
const controller = require('../controller/c-signin');

router.get('/signin', controller.postSignin);

//将接口暴露出来
module.exports = router;