//引入service层文件
const signupService = require('../service/s-signup.js');

exports.postSignup = async ctx => {
    //解析post的数据
    let {name, password, repeatpass, avator} = ctx.request.body;
    await signupService.haveSame(name)
        .then(async (result) => {
            console.log(result);
            if (result.length>0)
            {
                ctx.body = {
                    code: 500,
                    message: '用户已经存在！'
                };
            } else if (password !== repeatpass || password === ''){
                ctx.body = {
                    code: 500,
                    message: '两次密码不一致！'
                };
            } else {
                await signupService.signUp([name, password, avator, avator])
                    .then(res => {
                        if (res)
                        {
                            ctx.body = {
                                code: 200,
                                message: '插入成功！'
                            };
                        }
                        else
                        {
                            ctx.body = {
                                code: 500,
                                message: '插入失败！'
                            };
                        }
                    });
            }
        });   
}