define(function(){
	return {
		drag : function(id){
			let $ele = $('#' + id);
			$ele.mousedown(function(e){
				let disX = e.pageX - $(this).offset().left;
				let disY = e.pageY - $(this).offset().top;
				$(document).mousemove(function(e){
					$ele.css({left : e.pageX - disX,top : e.pageY - disY});
				})
				$(document).mouseup(function(){
					$(this).off();
				})
				return false;
			})
		}
	}
})
