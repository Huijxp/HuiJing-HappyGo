//引入模块
const express=require("express");
//引入bodyParser中间件
const bodyParser=require('body-parser');
const pool=require("./pool");
const cors=require("cors");
//引入product路由器
const productRouter=require('./routes/product.js')
//引入注册模块的路由器
const loginRouter=require("./routes/user_login.js");
//引入验证用户名模块路由器
const existRouter=require("./routes/user_existname.js");
//引入分页模块路由器
const limitRouter = require("./routes/Limit.js");
//引入登录模块路由器
const adminRouter = require("./routes/admin.js");
//引入搜索模块的路由器
const searchRouter = require("./routes/search.js");
//创建app
var app=express();
//创建3000监听端口
app.listen(3000,()=>{
  console.log("启动成功！！");
});
//托管静态资源到happygo目录下
app.use(express.static('public'));
//设置body-parser中间件
app.use(bodyParser.urlencoded({
  extended:false //使用nodejs提供的querystring的模块来解析为对象
}))
//配置跨域
app.use(cors({
 origin:["http://127.0.0.1:5500",
 "http://localhost:5500",
"http://127.0.0.1:3000",
"http://localhost:3000"]
}))

//将路由器挂载到路由下
app.use('/product',productRouter);
app.use('/login',loginRouter);
app.use('/existName',existRouter);
app.use('/limit',limitRouter);
app.use('/admin',adminRouter);
app.use('/search',searchRouter);
//http://127.0.0.1:3000/login
