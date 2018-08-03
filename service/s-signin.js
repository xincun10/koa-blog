const userModel = require('../model/user.js');

module.exports = {
    signin: async (name, pwd) => {
        return await userModel.findDataByName(name)
            .then(res => {
                console.log(res);
                if(name == res[0]['name'] && pwd == res[0]['pass'])
                {
                    console.log('验证通过');
                    return true;
                }
                return false;
            });        
    }
}