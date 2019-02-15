$(function(){
  $(".im_admin").click(function(){
    var uname = $("[name=uname]")[0].value;
    var upwd = $("[name=upwd]")[0].value;
    $.ajax({
      url:"http://127.0.0.1:3000/admin",
      type:"get",
      data:{uname,upwd},
      dataType:"json"
    }).then((success)=>{
      var $phone_p = $(".phone_p");
      if(success.code == 1){
        alert("登陆成功");
        window.location.href="http://127.0.0.1:5500/happygo/index.html";
      }else{
        $phone_p[0].innerHTML += success.msg;
      }
    })


  })
})