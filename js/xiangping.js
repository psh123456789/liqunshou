$(".minlist li").mouseover(function(){
	var index=$(this).index();
	$(".smallblock img").eq(index).show().siblings("img").hide();
	$(".bigblock img").eq(index).show().siblings().hide();
})
$(".smallblock").on({
	"mouseover":function(){
		$(".bigblock").show();
		$(".mask").show();
	},
	"mouseout":function(){
		$(".bigblock").hide();
		$(".mask").hide();
	},
	"mousemove":function(e){
		var e= e||event;
		var x= e.pageX-$(".smallblock").offset().left-$(".mask").width()/2;
		var y=e.pageY-$(".smallblock").offset().top-$(".mask").height()/2;
		var mx = $(".smallblock").width() -$(".mask").width();
		var my = $(".smallblock").height() -$(".mask").height();
		// 边界处理
		x=x<=0 ? 0 : x>=mx ? mx:x;
		y=y<=0 ? 0 : y>my ? my:y;
		var bigImageX = -x*$(".bigImg").width()/$(".smallblock").width();
		var bigImageY = -y*$(".bigImg").height()/$(".smallblock").height();
		$(".mask").css({
			"left":x+"px",
			"top":y+"px"
		})
		$(".bigImg").css({
			"left":bigImageX+"px",
			"top":bigImageY+"px"
			
		})
	}
})
$caselist=$(".casestitle li");
	$itemlist=$("#chooseitem ul");
	$caselist.mousedown(function(){
		var index=$(this).index();
		$(this).addClass("casestlichose").siblings().removeClass("casestlichose");
		$itemlist.eq(index).show().siblings().hide();
		
	})