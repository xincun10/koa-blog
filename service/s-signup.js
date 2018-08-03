const userModel = require('../model/user.js');

module.exports = {
    //判断是否已经存在同名的记录
    haveSame: async (name) => {
        return await(userModel.findDataByName(name))
            .then(res => res)
            .catch(err => {
                console.log(err);
            });        
    },
    //插入一条记录
    signUp: async (value) => {
        console.log(value);
        return await(userModel.insertData(value))
            .then(res => res)
            .catch(err => {
                console.log(err);
            }); 
    },
}