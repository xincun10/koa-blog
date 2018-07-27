const Koa = require('koa');
const bodyParser = require('koa-bodyparser');
//引入配置文件
const config = require('./config/default.js');
const app = new Koa();

//获取表单提交数据
app.use(bodyParser());

//引入路由设置
app.use(require('./routers/signin.js').routes());

app.listen(config.port, ()=>{
    console.log(`server is running at port ${config.port}`);
});