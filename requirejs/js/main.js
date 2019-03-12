//1. 设置模块路径
require.config({
	paths : {
		//jquery的别名只能起jquery
		"jquery" : "jquery-1.11.3",
		"cookie" : "jquery.cookie",
		"rand" : "randomInt",
		'drag' : "drag"
	}
})
//2. 导入依赖模块
require(["jquery","cookie","rand",'drag'],function($,cookie,rand,drag){
	$(function(){
		$.cookie('user','小三儿',{expires : 7,path : '/'});
		//alert($.cookie('user'));
		//alert(rand.randomInt(5,10));
		drag.drag('box');
	})
})
