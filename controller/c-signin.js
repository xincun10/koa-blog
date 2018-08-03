//引入service文件
const signinService = require('../service/s-signin.js');

//暴露接口给routers
exports.postSignin = async ctx => {
    // console.log(ctx.request.query);
    //解析get请求参数
    let{name, password} = ctx.request.query;
    console.log(password);
    await signinService.signin(name, password)
        .then(result => {
            console.log(result);
            if(result)
            {
                ctx.response.body = {
                    code: 200,
                    message: '登陆成功'
                };
            }
            else
            {
                ctx.response.body = {
                    code: 500,
                    message: '用户名和密码不匹配'
                };
            }
        });
}