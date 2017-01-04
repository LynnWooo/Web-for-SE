
function sendCode(){
	var phoneNum;
	phoneNum=$("input[name='phone_number']").val();
	$.ajax({
	url:'http://101.200.61.252:8080/user/getvertifycode',
	dataType:'json',
	cache:false,
	data:'phoneNum='+phoneNum,
	type:'POST',
	success:function(){

	}
});
}

function subForm(){
	var temp=checkCode();
	if(!temp)
		return;
	var id=$("input[name='user_id']").val();
	var pwd=$("input[name='password']").val();
	var name=$("input[name='user_name']").val();
	var phone=$("input[name='phone_number']").val();
	var code=$("input[name='veri_code']").val();
	var json='id='+id+'&password='+pwd+'&name='+name+'&phoneNum='+phone+'&vertifyCode='+code+'&role=teacher';
	//alert(json);
	$.ajax({
		url:'http://101.200.61.252:8080/user/register',
		dataType:'json',
		cache:false,
		data:json,
		type:'POST',
		success:function(status){
			if(status==0){
				alert('注册成功！');
				setTimeout("window.location.assign('login.html')",3000);
			}else if(status==1){
				$("#error_box").html('请填写完整数据！');
			}else if(status==2){
				$("#error_box").html('手机号码已存在！');
			}else if(status==3){
				$("#error_box").html('验证码错误！');
			}else{
				$("#error_box").html('发生未知错误');
			}
		}
	});
}

function checkCode(){
	var pwd_1;
	var pwd_2;
	pwd_1=$("input[name='password']").val();
	pwd_2=$("input[name='password_2']").val();
	if(pwd_1==pwd_2){
		return true;
	}
	else{
		$("#error_box").html('请再次确认密码！');
		return false;
	}
}