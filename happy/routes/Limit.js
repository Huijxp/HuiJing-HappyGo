const express = require("express");
const pool = require("../pool");
const mysql = require("mysql");
var router = express.Router();

router.get('/',(req,res)=>{
  var pno = req.query.pno;
  var pageSize = req.query.pageSize;
  //默认值
  if(!pno){
    pno = 1;
  }
  if(!pageSize){
    pageSize = 8;
  }
  var reg = /^[0,9]{1,}$/;
  if(!reg.test(pno)){
    res.send({code:-1,msg:"页码格式不正确"});
    return;
  }
  if(!reg.test(pageSize)){
    res.send({code:-2,msg:"页大小格式不正确"});
    return;
  }
  var sql = "select count(pid) as c from hp_project";
  var progress = 0; //sql执行进度
  obj = {code:1};
  pool.query(sql,[pno,pageSize],(err,result)=>{
    if(err) throw err;
    var pageCount = Math.ceil(result[0].c/pageSize);//一共几页，从第几页开始
    obj.pageCount = pageCount;
    progress += 50;
    if(progress == 100){
     res.send(obj);
    }
  })
  //  查询当前页内容
    var sql=" SELECT pid,pname,pnowprice,poldprice,pdetail,pimg";
    sql +=" FROM hp_project";
    sql +=" LIMIT ?,?"
    var offset = parseInt((pno-1)*pageSize);
    pageSize = parseInt(pageSize);
    pool.query(sql,[offset,pageSize],(err,result)=>{
    if(err)throw err;
    //console.log(result);
    obj.data = result;
    progress+=50;
    if(progress==100){
      res.send(obj);
    }
    }); 
})
module.exports=router;