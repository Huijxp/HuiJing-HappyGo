/*这里是前台动态发送图片的产品代码*/
$(function(){
  $.ajax({
    url:"http://127.0.0.1:3000/product",
    type:"get",
    // data:{uname,pwd,phone},
    dataType:"json",
  }).then((success)=>{
    console.log(success)
    console.log(success.code)
    console.log(success.msg)
    console.log(success.msg[0].pname)
    //迭代的解决方法
    // var obj = {success}
		// Object.defineProperty(obj, Symbol.iterator, {
		// 	enumerable: false, //是否可枚举
		// 	writerable: false, //是否可写
		// 	configurable: true, //是否删除
		// 	value: function() {
		// 		var that = this;
		// 		var nowindex = 0;
		// 		var key = Object.keys(that);

		// 		return {
		// 			next: function() {
		// 				var h = {
		// 					value: that[key[nowindex]],
		// 					done: (nowindex + 1 > key.length)
		// 				}
		// 				nowindex++;
		// 				return h
		// 			}
		// 		}
    // 	}
    // })
    /*
     var test = (function (a) {
        this.a = a
        return function (b) {
            return this.a + b
        }
    }(function (a, b) {
        return a
    }(3, 2)))
    console.log(test(1))




    let s = "tarena is n"
    s = s.split(" ").map((i, index) => {
            i = i + (index + 1)
            return i
        }).join(" ")
    console.log(s)
    */ 

    
    var html="";
    //for(var item of obj){
      //console.log(item.msg)
      for(var i=0;i<success.msg.length;i++){
        html+=`<li class="shop_li">
      <div class="shop_pic">
        <img src=${success.msg[i].pimg} alt="">
      </div>
      <div class="shop_li_top">
        <span>￥${success.msg[i].pnowprice}</span>
        <del>￥${success.msg[i].poldprice  }</del>
      </div>
      <div class="shop_li_bottom">
        <a href="javascript:;">
            ${success.msg[i].pdetail}
        </a>
      </div>
    </li>`
    //}
  }
    $(".shop_ul").html(html);
  })
})