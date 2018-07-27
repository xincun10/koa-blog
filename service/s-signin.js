const userModel = require('../model/user.js');

module.exports = {
    signin: async(name, pwd) => {
        let data;
        res = await(userModel.findDataByName(name))
                .catch(err => {
                    console.log(err);
                });
        if(name == res[0]['name'] && pwd == res[0]['pass'])
        {
            data = {
                code: 200,
                message: '登陆成功'
            }
        }
        else
        {
            data = {
                code: 500,
                message: '用户名和密码不匹配'
            }
        }
        return data;
    }
}