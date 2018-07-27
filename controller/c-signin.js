//引入service文件
const signinService = require('../service/s-signin.js');

//暴露接口给routers
exports.postSignin = async ctx => {
    // console.log(ctx.request.query);
    let{name, password} = ctx.request.query;
    console.log(name);
    let data = await signinService.signin(name, password);                    
    ctx.response.body = data;
}