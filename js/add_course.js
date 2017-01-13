//时间选择为周数+课程节数
	var login_id;
	var login_name;
	$(document).ready(function(){
		login_id=GetRequest().id;
		login_name=unescape(GetRequest().name);
		$("#header_message").html("欢迎，"+login_name);
	});

	function subForm(){
		var time=new Array();
		var temp=(parseInt($("select[name='weekdays']").val())-1)*5+parseInt($("select[name='time']").val());
		time.push(temp);
		if($("select[name='weekdays_2']").val()!=0){
			var temp=(parseInt($("select[name='weekdays_2']").val())-1)*5+parseInt($("select[name='time_2']").val());
			time.push(temp);
		}
		var a=new FormData();
				a.append("name",$("input[name='course_name']").val());
				a.append("image",$("#upload")[0].files[0]);
				a.append("teacher_id",login_id);
				a.append("describe",$("textarea[name='course_desc']").val());
				a.append("time_id",time);
			
		alert(a.image+'\n'+a.describe+'\n'+a.time_id);
		$.ajax({
			url:'http://101.200.61.252:8080/teacher/insertcourse',
			dataType:'json',
			cache:false,
			traditional:true,
			data:a,
			type:'POST',
			processData: false,
        	contentType: false,
			success:function(data){
				alert('success!');
				setTimeout(window.location.assign('view.html?id='+login_id+'&name='+escape(login_name)),500);

			},
			error:function(){
				alert('error');
			}

		});
	}

	function GetRequest() { 
    var url = location.search; //获取url中"?"符后的字串 
    var theRequest = new Object(); 
    if (url.indexOf("?") != -1) { 
        var str = url.substr(1); 
        strs = str.split("&"); 
        for(var i = 0; i < strs.length; i ++) { 
            theRequest[strs[i].split("=")[0]]=unescape(strs[i].split("=")[1]); 
        } 
    } 
    return theRequest; 
} 