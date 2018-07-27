mydb = require('../lib/mysql.js');

let query = mydb.query;
//用户表定义语句
let users = 
    `create table if not exists users(
        id INT NOT NULL AUTO_INCREMENT,
        name VARCHAR(100) NOT NULL COMMENT '用户名',
        pass VARCHAR(100) NOT NULL COMMENT '密码',
        avator VARCHAR(100) NOT NULL COMMENT '头像',
        moment VARCHAR(100) NOT NULL COMMENT '注册时间',
        PRIMARY KEY ( id )
    );`;

//定义建表操作
let createTable = (sql) => {
    return query(sql, []);
}

//建表操作
createTable(users);

//注册用户
exports.insertData = (value) => {
    let _sql = 'insert into users set name=?,pass=?,avator=?,moment=?;';
    query(_sql, value);
}
// 删除用户
exports.deleteUserData = ( name ) => {
    let _sql = `delete from users where name="${name}";`;
    return query( _sql );
}
// 查找用户
exports.findUserData = ( name ) => {
    let _sql = `select * from users where name="${name}";`;
    return query( _sql );
}
// 通过名字查找用户
exports.findDataByName =  ( name ) => {
    let _sql = `select * from users where name="${name}";`;
    return query( _sql);
}