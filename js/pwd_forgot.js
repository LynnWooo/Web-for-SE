	
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
	$("#error_box").html("");
	var temp=checkCode();
	if(!temp)
		return;
	var id=$("input[name='user_id']").val();
	var pwd=$("input[name='password']").val();
	var phone=$("input[name='phone_number']").val();
	var code=$("input[name='veri_code']").val();
	var json='identify='+id+'&phone_number='+phone+'&new_password='+pwd+'&verify_code='+code;
	//alert(json);
	$.ajax({
		url:'http://101.200.61.252:8080/user/forget_password',
		dataType:'json',
		cache:false,
		data:json,
		type:'POST',
		success:function(status){
			if(status.status==0){
				alert('修改成功！');
				setTimeout("window.location.assign('login.html')",1000);
			}else{
				$("#error_box").html('填写错误！');
			}
		},
		error:function(){
			alert('error');
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