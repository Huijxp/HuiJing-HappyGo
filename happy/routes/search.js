/*搜索框传值查询*/
//引入express组件
const express = require("express");
//引入mysql数据库连接池
const pool = require("../pool");
//创建路由
var router = express.Router();

router.get('/',(req,res)=>{
  var pname = req.query.pname;
  var sql = "select count(pid) as c from hp_product where pname=?";
  pool.query(sql,[pname],(err,result)=>{
    if(err) throw err;
    var c = result[0].c;
    if(c == 1){
      res.send({code:1,msg:"查找成功"});
    }else{
      res.send({code:-1,msg:"查无此商品"});
    }
  })
})
module.exports=router;