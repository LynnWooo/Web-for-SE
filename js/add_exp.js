	var login_id;
	var course_id;
	var login_name;
	$(document).ready(function(){
		login_id=GetRequest().teacher_id;
		login_name=unescape(GetRequest().name);
		course_id=GetRequest().course_id;

		$("#header_message").html("欢迎，"+login_name);
	});

	function subForm(){
		var time=(parseInt($("select[name='week']").val())-1)*25+(parseInt($("select[name='weekdays']").val())-1)*5+parseInt($("select[name='time']").val());
		var attment;

		var a=new FormData();
				a.append("name",$("input[name='exp_name']").val());
				a.append("image",$("#upload_img")[0].files[0]);
				a.append("course_id",course_id);
				a.append("attachment",$("#upload_att")[0].files[0]);
				a.append("time_id",time);
				a.append("describe",$("textarea[name='exp_desc']").val());
			
		alert(a.image+'\n'+a.describe+'\n'+a.time_id);
		$.ajax({
			url:'http://101.200.61.252:8080/teacher/insertexper',
			dataType:'json',
			cache:false,
			traditional:true,
			data:a,
			type:'POST',
			processData: false,
        	contentType: false,
			success:function(data){
				if(data.status==0){
					alert('success!');
					setTimeout(window.location.assign('course.html?teacher_id='+login_id+'&name='+escape(login_name)+"&course_id="+course_id),500);
				}
				else alert("fail");

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