
$(function(){
							var timer = setInterval(auto, 1500);
							var index = 0;
							function auto(){
								index++;
								if(index == $(".banner .zhong ol li").size()){
									index = 0;
								}
								$(".banner .zhong ol li").eq(index).addClass('current').siblings().removeClass('current');
								$(".banner .zhong ul li").eq(index).fadeIn(1000).siblings().fadeOut(1000);
							}
						
						$(".banner .zhong ol li").mouseenter(function(){
							clearInterval(timer);
							index = $(this).index() -1;
							auto();
						})
						$(".banner .zhong ol li").mouseout(function(){
							timer = setInterval(auto ,1500);
						})
						})
						$("#LoutiNav ul li").not(".last").hover(function() {
							//鼠标滑上去
							$(this).addClass("hover");
						}, function() {
							//鼠标移开
							$(this).removeClass("hover");
						});
						 //鼠标点击
						var mark = 1;
						$("#LoutiNav ul li").not(".last").click(function() {
							mark = 2; //改变标记
							$("#LoutiNav ul li").find("span").removeClass("active");
							$(this).find("span").addClass("active");
							//点击左边导航 然后跳到指定的楼层
							var $index = $(this).index(); //找到了对应的序列号
							//alert($index);
							var $top = $(" .Louti").eq($index).offset().top; //获取制定Louti与浏览器上面的距离
							//alert($top);
							$("body,html").animate({
								scrollTop: $top
							}, 500, function() {
								mark = 1;
							}); //浏览器滚动的高度
						});
						 //浏览器窗口滚动事件
						$(window).scroll(function() {
							if (mark == 1) {
								var $t = $(this).scrollTop(); //获取滚动条滚动的高度
								//document.title = $t;
								if ($t > 1000) { //通过滚动条来判断
									$("#LoutiNav").fadeIn(); //淡入 导航慢慢显示出来
								} else {
									$("#LoutiNav").fadeOut(); //淡出 导航慢慢消失
								}
								var $obj = $(" .Louti");
								//循环每一个Louti 然后找到最先满足条件的那个 Louti
								$obj.each(function() {
									var $index = $(this).index();
									//楼层与浏览器上面的高度
									//var $height = $obj.eq($index).offset().top + $(this).height() / 2;
								    var $height = $obj.eq($index).offset().top + $(this).height() / 2;
									//alert($height) 
									//document.title = $t + "--" + $height;
									if ($t < $height) {
										$("#LoutiNav ul li").find("span").removeClass("active")
										$("#LoutiNav ul li").eq($index).find("span").addClass("active");
										return false;
									}
								});
							}
						});
						 //点击 Top按钮 跳转到浏览器顶部
						$("#LoutiNav ul li.last").click(function() {
							$("body,html").animate({
								scrollTop: 0
							}, 0, function() {
								mark = 1;
							});
						});
var tit = document.getElementById("nav");
//alert(tit);
//占位符的位置
var rect = tit.getBoundingClientRect();//获得页面中导航条相对于浏览器视窗的位置
// var inser = document.createElement("div");
// tit.parentNode.replaceChild(inser,tit);
// inser.appendChild(tit);
// inser.style.height = rect.height + "px";

//获取距离页面顶端的距离
var titleTop = tit.offsetTop;
//滚动事件
document.onscroll = function(){
    //获取当前滚动的距离
    var btop = document.body.scrollTop||document.documentElement.scrollTop;
    //如果滚动距离大于导航条据顶部的距离
    if(btop>titleTop){
        //为导航条设置fix
        tit.className = "clearfix fix";
    }else{
        //移除fixed
        tit.className = "clearfix";
    }
}
$("#bian .bian2 .right dl img").hover(function(){
	
	$(this).animate({
		opacity:'0.5'
	},200);
},function(){
	$(this).animate({
		opacity:'1'
	},"slow");
})
$("#jiu .bian2 .right dl img").hover(function(){
	$(this).animate({
		height:'250',width:'250'
	},200)
},function(){
	$(this).animate({
		height:'232',width:'232'
	},200)
})
$("#right101").click(function(){
	$("#jia #jia2 ul").animate({marginLeft: -290},800,function(){
		$("#jia #jia2 ul").css("margin-left",0)
		.find("#jia #jia2 ul li:first")
		.appendTo("#jia #jia2 ul");
	})
})
$("#left101").click(function(){
	$("#jia #jia2 ul li:last").prependTo("#jia #jia2 ul");
	$("#jia #jia2 ul").css("margin-left",-290);
	$("#jia #jia2 ul").animate({marginLeft :0},800)
})
$(function(){
	var timers = setInterval(auto,1500);
	var index = 0;
	function auto(){
		index++;
		if(index == $("#bian .left .left1 ol li").size()){
			index = 0;
		}
		
		$("#bian .left .left1 ol li").eq(index).addClass('current2').siblings().removeClass('current2');
		$("#bian .left .left1 ul li").eq(index).fadeIn(1000).siblings().fadeOut(1000);
	}
	$("#bian .left .left1 ol li").mouseenter(function(){
		clearInterval(timers);
		index = $(this).index()-1;
		auto();
	
	})
	$("#bian .left .left1 ol li").mouseout(function(){
		timers = setInterval(auto,1500);
	})
})
$(".banner .left ul li").hover(function(){
  $(".banner .left ul li .er").animate({
  },2000)
},function(){
	$(".banner .left ul li .er").animate({
		opacity:'0'
	},2000)
})