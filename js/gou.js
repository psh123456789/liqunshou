$(function(){
	loadCart();
	$("#gouwu").click(function(){
		location.href = "buy.html";
	})
	$(".gou .addToCart").click(function (e){
		var goodId=$(this).parent().attr("data-good-id");
		var goodName=$(this).siblings("span").eq(0).html();
		var goodPrice = parseFloat($(this).siblings("span").eq(1).html());
		var goodSrc = $(this).siblings("img").attr("src");
		var cartStr = $.cookie("cart")? $.cookie("cart"): "";
		var cartObj = convertCartStrToObj(cartStr);
		if(goodId in cartObj){
			cartObj[goodId].num +=1;
		}else{
			cartObj[goodId]={
				name:goodName,
				price:goodPrice,
				num :1 ,
				src :goodSrc
			};
		}
		cartStr = convertObjToCartStr(cartObj);
		$.cookie("cart",cartStr,{expries:7, path :"/"});
		var cloneImg = $(this).siblings("img").clone().css({width:50,height:50});
		cloneImg.fly({
			start:{
				top :e.clientY,
				left: e.clientX
			},
			end:{
				top:$("#gouwu").offset().top,
				left :$("#gouwu").offset().left,
				width:0,
				height:0
			},
			autoPlay : true,
			onEnd :function(){
				$("#gouwu").val(function (index,v){
					var pattern = /(\d+)/;//定义正则
					var num = parseInt(v.match(pattern)[1]);
					return "购物车("+(num + 1)+")";
				});
				cloneImg.remove();
			}
		})
	})
})
function convertCartStrToObj (cartStr){
	if(!cartStr){
		return {};
	}
	var goods = cartStr.split(":");
	var obj = {};
	for(var i=0; i<goods.length; i++){
		var data = goods[i].split(",");
		obj[data[0]]={
			name :data[1],
			price:parseFloat(data[2]),
			num :parseInt(data[3]),
			src:data[4]
		}
	}
	return obj;
}
function convertObjToCartStr (obj){
	var cartStr = "";
	for(var id in obj){
		if(cartStr){
			cartStr += ":";
		}
		cartStr += id +"," +obj[id].name + ","+obj[id].price +","+obj[id].num +","+obj[id].src; 
	}
	return cartStr;
}
function loadCart(){
	var cartStr = $.cookie("cart") ? $.cookie("cart"): "";
	var cartObj = convertCartStrToObj(cartStr);
	var total = 0;
	for(var id in cartObj){
		total += cartObj[id].num;
	}
	$("#gouwu").val("购物车(" + total + ")");
}