function yzmfn(){
		var stryzm="";
		for(i=1;i<=4;i++){
			var code=rand(48,122);
			if(code>=58&&code<=64||code>=91&&code<=96){
				i--
			}else{
				stryzm+=String.fromCharCode(code);
			}
		}
		return stryzm;
	}
//验证码
	$id("yzmfram").innerHTML=yzmfn();
	$id("yzmfram2").innerHTML=yzmfn();
	
var oChangelognyzm=document.getElementsByClassName("cloginyzm")[0];
	oChangelognyzm.onclick=function(){
		yzmfn()
		$id("yzmfram2").innerHTML=yzmfn();
	}




//选项卡点特效设置
	$("#phonebtn").click(function(){
		$("#phonebtn").addClass(".changebb").siblings("span").removeClass(".changebb");
		$("#phonelogin").show().siblings("div").hide();
	})
	$("#codebtn").click(function(){
		$("#codebtn").addClass(".changebb").siblings("span").removeClass(".changebb");
		$("#codelogin").show().siblings("div").hide();
	})

//、、、、、、、、、手机登录验证、、、、、、、、、、、、、、、、、、、、、
	var phonecode=document.getElementById("phonecode"),
		yzm2=document.getElementById("yzm2"),	
		sss1=document.getElementById("sss1"),
		sss2=document.getElementById("sss2");
	$flagPhone=null;
		phonecode.onblur=function(){
			var reg=/^1[3578]\d{9}$/;
			var str=this.value;
			if(reg.test(str)){
				sss1.innerHTML="正确"
				$flagPhone=true;
			}else{
				sss1.innerHTML="请输入正确的手机号"
				$flagPhone=false;
			}
		}
	$flagyzm=null;
		yzm2.onblur=function(){
			var str=this.value;				
			if(str==$id("yzmfram").innerHTML){
				sss2.innerHTML="正确"
				$flagyzm=true;
			}else{
				$flagyzm=false;
				sss2.innerHTML="验证码有误"
			}
		}

	$id("phonecheck").onsubmit=function(){
		if($flagyzm&&$flagPhone){
			return true;
		}
		return false;
	}


//、、、、、、、、、账号登录验证、、、、、、、、、、、、、、、、、、、、、
	var oUsername=document.getElementById("username"),
		oPwd=document.getElementById("pwd"),
		oQpwd=document.getElementById("qpwd"),
		ii1=document.getElementById("ii1"),
		ii2=document.getElementById("ii2"),
		ii3=document.getElementById("ii3");
		
	$flagNamel=null;
		oUsername.onblur=function(){
			var reg1=/^1[3578]\d{9}$/;
			var reg2=/^\d+@\w+(\.\w+)+ $/;
			var str=this.value;
			if(reg1.test(str)||reg2.test(str)){
				ii1.innerHTML="正确"
				$flagNamel=true;
			}else{
				ii1.innerHTML="请输入正确的手机号或邮箱"
				$flagNamel=false;
			}
		}
	$flagPwdl=null;
		oPwd.onblur=function(){
			var str=this.value;
	
			var reg=/^[\w!@#$%^&*]{6,20}$/;
			if(reg.test(str)){
				ii2.innerHTML="正确"
				$flagPwdl=true;
			}else{
				$flagPwdl=false;
				ii2.innerHTML="密码长度只能在6~20位字符之间"
			}
		}
	$flagYzm2=null;
		oQpwd.onblur=function(){
			var str=this.value;
			if(str==$id("yzmfram2").innerHTML){
				ii3.innerHTML="正确";
				$flagYzm2=true;
			}else{
				ii3.innerHTML="请输入正确验证码";
				$flagYzm2=false;
			}
		}
		
//cookie账号验证	
		
	var formcode=document.getElementById("codecheck");
	formcode.onsubmit=function(){
		if($flagNamel&&$flagPwdl&&$flagYzm2){
			var str=document.cookie;//"uname=123; passwords=444"
			var arr=str.split("; ");//["uname=123","passwords=444"]
			for(i=0;i<arr.length;i++){
				var item=arr[i].split("=")//["uname,123","passwords,444"]
				if(item[0]=="uname"){
					var tname=item[1]
				}
				if(item[0]=="upwd"){
					var tpasswords=item[1]
				}
			}
				if(tname==oUsername.value && tpasswords==oPwd.value){
				return true;
				}
		}
		return false;											
	}
