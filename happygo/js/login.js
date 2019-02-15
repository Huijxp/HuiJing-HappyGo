$(function(){
  function vail($txt,minlen,maxlen,errMsg){
//注册验证是否重名的js
    var value=$txt.val();
    var $span=$txt.next();
    if(value.length>=minlen&&value.length<=maxlen){
      $span.html("<img src='./images/ok.png'>");
      return true;
    }else{
      $span.html(`<img src='./images/err.png'>${errMsg}`);
      return false;
    }
  }
  $("[name=uname]").blur(function(){
    console.log(1111)
    vail($(this),1,11,"用户名不能为空！");
    var uname = $("input[name=uname]")[0].value;
    $.ajax({
      url:"http://127.0.0.1:3000/existName",
      type:"get",
      data:{uname},
      dataType:"json",
    }).then((success)=>{
      if(success.code == -1){
        alert("用户名已存在");
        this.value = "";
      }
    })
  })
  $("[name=pwd]").blur(function(){
    vail($(this),6,8,"密码必须介于6~8位之间!");
  })
  $("[name=phone]").blur(function(){
    vail($(this),1,13,"手机号码格式不正确!");
  })
// 这里是注册验证的js
$(".LJR").click(function(){
  var uname = $("input[name='uname']")[0].value;
  var pwd = $("input[name='pwd']")[0].value;
  var phone = $("input[name='phone']")[0].value;
  var ureg=/^[a-z0-9_]{3,12}$/i;
  var psreg=/^[a-z0-9]{6,18}$/i;
  var phreg=/^[1][3,4,5,6,7,8,9][0-9]{9}$/i;
  if(!ureg.test(uname)){
    alert("用户名不能少于3位,支持数字和字母！");
    return;
  }
  if(!psreg.test(pwd)){
    alert("密码必须在6位以上,支持数字和字母！");
    return;
  }
  if(!phreg.test(phone)){
    alert("手机号格式不正确");
    return;
  }
  $.ajax({
    url:"http://localhost:3000/login",
    type:"get",
    data:{uname,pwd,phone},
    dataType:"json",
  }).then((success)=>{
    console.log(success.code);
    if(success.code == 1){
      alert("登陆成功");
      window.location.href="http://127.0.0.1:5500/happygo/index.html";
    }else{
      alert("登陆失败");
    }
    
  })
});
});





/*
$("[name=phone]").blur(function(){
  vail($(this),1,11,"手机号不能为空！")
})
$(":password").blur(function(){
  vail($(this),6,8,"密码必须介于6~8位之间!");
})


$(":text").blur(function(){
  vail($(this),3,9,"用户名必须介于3~9位之间!")
})
$(":password").blur(function(){
  vail($(this),6,8,"密码必须介于6~8位之间!")
});
$("form").submit(function(e){
  if(!vail($(":text"),3,9,"用户名必须介于3~9位之间!")){
    e.preventDefault();
  }else if(!vail($(":password"),6,8,"密码必须介于6~8位之间!")){
    e.preventDefault();
  }
})*/
