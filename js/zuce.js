var oForm = document.querySelector("from");
//验证用户
var flagName = null;
$id("uname").addEventListener("mousedown",function(){
	$id("ss1").style.color="gray";
	$id("ss1").innerHTML = "请输入手机号/邮箱";
})
$id("uname").addEventListener("blur",function(){
	var reg = /^1[3578]\d{9}$/;
	var reg2 = /^\w+@\w+(\.\w+)+$/;
	var str =this.value;
	if(str.length>6){
		if(reg.test(str)||reg2.test(str)){
			$id("ss1").innerHTML = "正确";
			fiagName = true;
		}else{
			$id("ss1").style.color="red"
			$id("ss1").indexHTML = "请输入正确手机号/邮箱";
			flagName = false;
		}
	}else{
		$id("ss1").style.color = "red"
		$id("ss1").innerHTML = "输入用户名大于6位";
	    flagName = false;
	}
})

//验证密码
var flagPwd = null;
$id("pwd").addEventListener("mousedown",function(){
	$id("ss2").style.color = "gray";
	$id("ss2").innerHTMl = "6~20位字母, 数字或符号组合";
	
})
$id("pwd").addEventListener("blur",function(){
	var reg = /^[a-z0-9_-]{6,18}$/;
	var str = this.value;
	if(str==""){
		$id("ss2").innerHTML= "请输入密码"
		$id("ss2").style.color="red";
		flagPwd = false;
	}else{
		if(str.length>6){
			if(reg.test(str)){
				$id("ss2").innerHTML = "正确";
				flagPwd = true;
			}else{
				$id("ss2").style.color= "red"
				$id("ss2").innerHTML="密码长度不能大于20位";
				flagPwd=false;
			}
		}else{
			$id("ss2").innerHTML= "密码长度只能在6~20之间"
			$id("ss2") .style.color = "red";
			flagPwd=false;
		}
	}
})
//确认密码
var flagQpwd=null;
$id("qpwd").addEventListener("mousedown",function(){
	$id("ss3").style.color="gray";
	$id("ss3").innerHTML="再输入密码"
})
$id("qpwd").addEventListener("blur",function(){
	var str=this.value;
	if(str==$id("pwd").value&&str!=""){
		flagQpwd=true;
		$id("ss3").innerHTML="正确"
	}else{
		$id("ss3").style.color="red"
		$id("ss3").innerHTML="两次输入密码不一致";
		flagQpwd=false;
		
	}
})
//验证验证码
function yzmfn(){
	var stryzm="";
	for(i=1;i<=6;i++){
		var code=rand(48,122);
		if(code>=58&&code<=64||code>=91&&code<=96){
			i--
		}else{
			stryzm+=String.fromCharCode(code);
		}
	}
	return  stryzm;
}
$id("yzframwork").innerHTML=yzmfn();
var changeyze=document.getElementsByClassName("changeyzm")[0];
changeyze.onclick=function(){
	$id("yzframwork").innerHTML=yzmfn();
}
var flagyzm=null;
$id("yzm").addEventListener("mousedown",function(){
	$id("ss4").style.color="gray";
	$id("ss4").innerHTML="请输入验证码";
})
$id("yzm").addEventListener("blur",function(){
	if($id("yzframwork").innerHTML==this.value){
		$id("ss4").innerHTML="正确";
		flagyzm=true;
	}else{
		$id("ss4").style.color="red"
		$id("ss4").innerHTML="验证码错误";
		flagyzm=false;
		
	}
})
//登录验证
var oUsername=document.getElementById("uname"),
 oPwd=document.getElementById("pwd");
 oForm.onsubmit=function(){
	 if(flagName&&flagPwd&&flagQpwd&&flagyzm){
		 document.cookie="uname="+oUsername.value;
		 document.cookie="upwd="+oPwd.value;
		 return true;
	 }
	 return false;
 }