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
$("#gouwu").click(function(){
	location.href="buy.html";
})