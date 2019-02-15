$(function(){
  //点击立即购买跳转到登陆页
  $(".buy_now").click(function(){
    alert("请先登录!");
    window.location.href="http://127.0.0.1:5500/happygo/login.html";
  });
  //点击加入购物车实现数字框内的值增长
  $(".buy_car").click(function(){
    var add = document.getElementsByClassName("jisuan");
    add[0].value++;
  })
  //点击添加按钮实现数字框内的值增长
  $(".left_less").click(function(){
    var jisuan = document.getElementsByClassName("jisuan");
    if(jisuan[0].value <= 0){
      jisuan[0].value=0;
    }else{
      jisuan[0].value--;
    }
  })
  //点击减去按钮实现数字框内的值增长
  $(".right_add").click(function(){
    var jisuan = document.getElementsByClassName("jisuan");
      jisuan[0].value++;

  })
})