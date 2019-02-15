var MSIZE=150,SMSIZE=400;
$(".mask").mouseover(function(){
    $("#imgs").show()
    $(".big-img").show()
})
$(".mask").mousemove(function(e){    
    var top=e.offsetY-MSIZE/2;
    var left=e.offsetX-MSIZE/2;
if(left<0){
    left=0;                     //阴影层不出框
}else if(left>SMSIZE-MSIZE){
    left=SMSIZE-MSIZE;
}
if(top<0){
    top=0;                      //阴影层不出框
}else if(top>SMSIZE-MSIZE){
    top=SMSIZE-MSIZE;
}
var mask =document.getElementById("imgs");
    mask.style.top=top+"px";
    mask.style.left=left+"px";
var igDiv = document.getElementsByClassName("big-img")[0]
igDiv.style.backgroundPosition=-1.6/1*left+"px -"+1.6/1*top+"px";//大图片随着小图片动
})
$(".mask").mouseout(function(){
    $("#imgs").hide()
    $(".big-img").hide()
})