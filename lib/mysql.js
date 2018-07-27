var mysql = require('mysql');
//引入配置文件
var config = require('../config/default.js');

//创建连接池
var pool = mysql.createPool({
    host: config.database.HOST,
    user: config.database.USERNAME,
    password: config.database.PASSWORD,
    database: config.database.DATABASE,
    port: config.database.PORT
});

//定义查询方法，需要提供查询语句和对应参数的值
exports.query = (sql, values) => {
    return new Promise( (resolve, reject) => {
        //获取一个连接
        pool.getConnection( (err, connection) => {
            if(err)
            {
                reject(err);
            }
            else
            {
                //进行查询操作
                connection.query(sql, values, (err, rows) => {
                    if(err)
                    {
                        reject(err);
                    }
                    else
                    {
                        //查询操作成功，调用成功的方法
                        resolve(rows);
                    }
                    connection.release();
                });
            }
        });
    });
}

