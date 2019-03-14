// $(function(){
// 	var cartStr = $.cookie("cart") ? $.cookie("cart") :"";
// 	if(!cartStr){
// 		$(".blank").css({
// 			display:"block"
// 		});
// 	}else{
// 		var cartObj = convertCartStrToObj(cartStr);
//         for(var id in cartObj){
// 			var good = cartObj[id];
// 			var str = '<ul class="goodInfo" data-good-id="'+id+'">'+
// 			'<li><img src="'+good.src+'"/></li>'+
// 			'<li>'+good.name+'</li>'+
// 			'<li>'+good.price+'</li>'+
// 			'<li class="num">'+
// 			'<a href="javascript:;" class="minus">-</a>'+
// 			'<input type ="text" value="'+good.num+'"/>'+
// 			'<a href="javascript:;" class="plus">+</a>'+
// 			'</li>'+
// 			'<li class="total">' + good.num * good.price + '</li>' +
// 			'<li><a href="javascript:; class="del">删除</a></li>'+
// 			'</ul>';
// 			$(str).appendTo(".cartList");
// 		}	
              $(function() {
				//取出在cookie中存的购物车信息
				var cartStr = $.cookie("cart") ? $.cookie("cart") : "";

				if(!cartStr) {
					$(".blank").css({
						display: "block"
					});
				} else {
					var cartObj = convertCartStrToObj(cartStr);
					//遍历所有的商品生成html添加到购物车列表中去
					for(var id in cartObj) {
						//商品信息对象
						var good = cartObj[id];
						var str = '<ul class="goodInfo" data-good-id="' + id + '">' +
							'<li><img src="' + good.src + '" /></li>' +
							'<li>' + good.name + '</li>' +
							'<li>' + good.price + '</li>' +
							'<li class="num">' +
							'<a href="javascript:;" class="minus">-</a>' +
							' <input type="text" value="' + good.num + '" />  ' +
							'<a href="javascript:;" class="plus">+</a>' +
							'</li>' +
							'<li class="total">' + good.num * good.price + '</li>' +
							'<li><a href="javascript:;" class="del">删除</a></li>' +
							'</ul>';
						//将上面的结构添加到cartList中去
						$(str).appendTo(".cartList");
					}
		$(".goodInfo a.del").click(function(){
			var id=$(this).parents(".goodInfo").remove().attr("data-good-id");
			var cartStr =$.cookie("cart") ? $.cookie("cart"):"";
		    var cartObj = convertCartStrToObj(cartStr);
			 delete cartObj[id];
			 $.cookie("cart",convertObjToCartStr(cartStr),{
				expires:7,
				 path:"/"
			 });
		})
		
		$(".goodInfo a.plus").click(function(){
			var id=$(this).parents(".goodInfo").attr("data-good-id");
			var carStr = $.cookie("cart") ? $.cookie("cart") :"";
			var cartObj = convertCartStrToObj(carStr);
			cartObj[id].num +=1;
			$(this).siblings('input').val(""+cartObj[id].num);
			$(this).parent().siblings('.total').html(cartObj[id].num*cartObj[id].price+"");
			$.cookie("cart",convertObjToCartStr(cartObj),{
				expires:7,
				path:"/"
			});
		});
		$(".goodInfo a.minus").click(function(){
			var id=$(this).parents(".goodInfo").attr("data-good-id");
			var cartStr = $.cookie("cart") ? $.cookie("cart") :"";
			var cartObj = convertCartStrToObj(cartStr);
			if(cartObj[id].num>1){
			cartObj[id].num-=1;
			$(this).siblings("input").val(""+cartObj[id].num);
			$(this).parent().siblings(".total").html(cartObj[id].num*cartObj[id].price+"");
			$.cookie("cart",convertObjToCartStr(cartObj),{
				expires:7,
				path:"/"
			})
			}
		})
		
		$(".goodInfo li.num input").blur(function(){
			var id = $(this).parents(".goodInfo").attr("data-good-id");
			var cartStr =$.cookie("cart") ?$.cookie("cart") :"";
			var cartObj = convertCartStrToObj(cartStr);
			var pattern= /^\d+$/;
			if(!pattern.test($(this).val())){
				cartObj[id].num = 1;
				$(this).val("1");
			}else{
				cartObj[id].num = parseInt($(this).val());
			}
			$(this).siblings("input").val(""+cartObj[id].num);
			$(this).parent().siblings('.total').html(cartObj[id].num*cartObj[id].pirce+"");
			$.cookie("cart",convertObjToCartStr(cartObj),{
				expires:7,
				path:"/"
			})
		})
	}
})
function convertCartStrToObj(cartStr){
	if(!cartStr){
		return {};
		
	}
	var goods = cartStr.split("：");
	var obj = {};
	for(var i=0; i<goods.length; i++){
		var data = goods[i].split(",");
		obj[data[0]]={
			name:data[1],
			price: parseFloat(data[2]),
			num:parseInt(data [3]),
			src:data[4]
		}
	}
	return obj;
}
	function convertObjToCartStr(obj) {
				var cartStr = "";
				for(var id in obj) {
					if(cartStr) {
						cartStr += ":";
					}
					cartStr += id + "," + obj[id].name + "," + obj[id].price + "," + obj[id].num + "," + obj[id].src;
				}
				return cartStr;
			}