const config = {
    //启动端口
    port:2333,
    //数据库配置
    database:{
        DATABASE: 'mykoa',
        USERNAME: 'root',
        PASSWORD: 'root',
        PORT: '3306',
        HOST: 'localhost'
    }
}

//暴露config
module.exports = config;