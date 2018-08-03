const router = require('koa-router')();
const controller = require('../controller/c-signup.js');

//注册页面
router.post('/signup', controller.postSignup);

module.exports = router;