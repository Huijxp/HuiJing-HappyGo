// $(function(){
//   $.ajax({
//     url:"http://127.0.0.1:5500/header.html",
//     type:"get",
//     success: function(res) {
//       $("<link rel='StyleSheet' href='../css/header.css'> ")
//       $(res).replaceAll(".header");
//     }

//   })
// })
$(function(){
	$(".header").load('header.html');
	$(".btn_search").click(function(){
		alert("别点");
		// window.location.href="http://127.0.0.1:5500/happygo/face.html";
	})
})
// $(function(){
// 	$.ajax({
// 		url:"http://127.0.0.1:5500/header.html",
// 		type:"get",
// 		success: function() {
// 			$("<link rel='stylesheet' href='../css/header.css'>");
// 			$(res).replaceAll(".header");
// 		}
// 	})
// })
// 	var link=document.createElement("link");
// 	link.rel="stylesheet";
// link.href="../css/header.css";
// document.head.appendChild(link);
// ajax({
// 	url:"header.html",
// 	type:"get",
// 	success:function(html){
// 		console.log(112222442);
// 		document.getElementById("header").innerHTML=html;
		
// 	}
// })

