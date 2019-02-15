$(function(){
  function task(){
    //获得到图片的地址
    var show=document.querySelector("#indexBanner>ul>li.show");
    //设置图片为空
    console.log(show.className)
      show.className="";
        if(show.nextElementSibling!==null){
          show.nextElementSibling.className="show";
        }else{
          show.parentNode.children[0].className="show";
        }
      }
      var n=setInterval(task,3000);
      var div=document.getElementById("indexBanner");
      //鼠标进入停止定时器
      div.onmouseover=function(){
        clearInterval(n);
      }
      //鼠标移出重新启动定时器
      div.onmouseout=function(){
        n=setInterval(task,3000);
      }
    
    //这里是滑动显示位置的模块
    window.onscroll=function(){
      var scrollTop=document.body.scrollTop||document.documentElement.scrollTop;
      // console.log(scrollTop);
      if(scrollTop>=1000){
        top_fixed.style.display="block";
      }else{
        top_fixed.style.display="none";
      }
      if(scrollTop>=900){
        slider_left.style.display="block";
      }else{
        slider_left.style.display="none";
      }
    }
var $xsqg_li=$(".xsqg_li");
var $left=$(".left_ear");
var $right=$(".right_ear")
// 设置左右滑动

$left.click(function(){
  $xsqg_li.css("left",0);
})
$right.click(function(){
  $xsqg_li.css("left",-1200);
})
$(".btn_search").click(function(){
  alert("干哈");
})    
})

//点击搜索跳转
$(".nav_bu").click(function(){
  window.location.href="http://127.0.0.1:5500/happygo/face.html";
})

// 这里是顶部定位的模块


/*
$("#slider_left").css("top",$(window).height()/3+"px");
var slider_left_top=$("slider_left").offset().top;
$(window).scroll(function(){
  var offsetTop = slider_left_top+$(window).scrollTop()-20+"px";
$("#slider_left").animate({top:offsetTop},{duration:600,queue:false});
});
*/