var user_id=0
var user_pwd=0

function js_login(){
	user_id=$("input[name='login_name']").val();
	user_pwd=$("input[name='login_pwd']").val();
	$.ajax({
	url:'http://101.200.61.252:8080/user/login',
	dataType:'json',
	cache:false,
	data:'identify='+user_id+'&password='+user_pwd,
	type:'POST',
	success:function(data){
		if(data.status!=null)
			window.location.assign('view.html');
		else if(data.status==1)
			$("#error_box").html('用户不存在');
		else if(data.status==2)
			$("#error_box").html('密码错误');
		else
			$("#error_box").html('未知错误');
	}
	});
}