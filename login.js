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
		
		data.identify;
		alert('success!');
	}
	});
}