const express = require("express");
const pool = require("../pool");
var router = express.Router();
router.get('/',(req,res)=>{
  var uname = req.query.uname;
  var upwd = req.query.upwd;
  console.log(uname,upwd);
  var sql = "SELECT count(id) as c FROM hp_login WHERE uname=? and pwd=?";
  pool.query(sql,[uname,upwd],(err,result)=>{
    console.log(result);
    if(err)throw err;
    var c = result[0].c;
    if(c == 1){
      res.send({code:1,msg:"登陆成功"});
    }else{
      res.send({code:-1,msg:"用户名或密码不正确"});
    }
  })
})
module.exports=router;