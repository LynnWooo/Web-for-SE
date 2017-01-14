var course_id;
var data;
var name;
$(window).load(function(){
    data = args();
    course_id = args().course_id;
    teacher_id = args().teacher_id;
    name = args().name;
    gohome();
	//初始化课程详情
    $.ajax({
        url:'http://101.200.61.252:8080/student/course_detail?course_id='+course_id+'&student_id=1452792',
        dataType:'json',
        cache:false,
        data:'',
        type:'POST',
        success:function(result){
            $('#course_name').html(result.course_name);
            $('#course_time').html(result.course_time);
            $('#teacher_name').html(result.teacher_name);
            $('#course_pic').attr("src", "http://101.200.61.252:8080"+result.course_pic);
            $('#description').html(result.description);
        },error:function(result){
        }
    });
    initExp();
});

function addConfirm(){
	var name = $("#cname").val();
	var content = $('#content').val();
	var time = $("#time").val();
	var image = $('#file')[0].files[0];
	$("#course").append(" \
			<div class='col-sm-6' id='experiment_detail'>	\
            <div class='wrapper wrapper-content animated fadeInUp'>	\
                <div class='ibox'>	\
                    <div class='ibox-content'>	\
                        <div class='row'>	\
                            <div class='col-sm-12'>	\
                                <div class='m-b-md'>	\
                                    <h2><a href=''>" + name + "</a></h2>	\
                                    <button type='button' class='btn btn-xs btn-success changeStatus'>	\
                                        关闭课程</button>		\
                                </div>	\
                            </div>	\
                        </div>	\
                        <div class='row'>	\
                            <div class='col-sm-5'>	\
                                <dl class='dl-horizontal'>	\
                                    <dt>描述：</dt>	\
                                    <dd>" + content + "</dd>	\
                                </dl>	\
                            </div>	\
                            <div class='col-sm-7' id='cluster_info'>	\
                                <dl class='dl-horizontal'>	\
                                    <dt>上课时间：</dt>	\
                                    <dd>" + time +"</dd>	\
                                    <dt>图片文件：</dt>	\
                                    <dd><img id='experiment_pic_url'>" + image + "</dd> \
                                </dl>	\
                            </div>	\
                        </div>	\
                    </div>	\
                </div>	\
            </div>	\
        </div>	\
	");
	setAction();
	resetInput();
}

function resetInput(){
	$("#cname").val("");
	$('#content').val("");
	$("#time").val("");
	$('#file').val("");
}

function setAction(){
	$('.changeStatus').click(function () {
		if($.trim($(this).text()) == "关闭课程"){
			swal({
        	title: "您确定要关闭该课程吗",
        	text: "请谨慎操作！",
        	type: "warning",
        	showCancelButton: true,
        	confirmButtonColor: "#DD6B55",
        	confirmButtonText: "关闭",
        	closeOnConfirm: false
    		}, function () {
        	swal("关闭成功！", "您已经关闭这门课程。", "success");
    		});
			$(this).text("重开课程");
		}else{
			swal({
        	title: "您确定要重开该课程吗",
        	text: "请谨慎操作！",
        	type: "warning",
        	showCancelButton: true,
        	confirmButtonColor: "#DD6B55",
        	confirmButtonText: "重开",
        	closeOnConfirm: false
    		}, function () {
        	swal("开启成功！", "您已经重开这门课程。", "success");
    		});
			$(this).text("关闭课程");
		}
	
	});

	$(".title").click(function(){
	});
}


function args(params){
    var a = {};
    params = params || location.search;
    if(!params)return{};
    params = unescape(params);
    params.replace(/(?:^\?|&)([^=&]+)(?:\=)([^=&]+)(?=&|$)/g,function(m,k,v){  a[k] = v; });
    return a;
}


function initExp(){
    $.ajax({
        url:'http://101.200.61.252:8080/teacher/experlist?course_id='+course_id+'&teacher_id='+teacher_id,
        dataType:'json',
        cache:false,
        data:'',
        type:'POST',
        success:function(result){
            append(result);
            $("#addCourse").html(result.length);
        },error:function(result){
        }
    });
}

function append(result){

}

function append(result){
    for(var i in result){
        $('#course').append(" \
        <div class='col-sm-6' id='experiment_detail'>   \
            <div class='wrapper wrapper-content animated fadeInUp'> \
                <div class='ibox'>  \
                    <div class='ibox-content'>  \
                        <div class='row'>   \
                            <div class='col-sm-12'> \
                                <div class='m-b-md'>    \
                                    <h2 onclick='goexp(" + result[i].id + ");'>" + result[i].experName + "</a></h2>  \
                                </div>  \
                            </div>  \
                        </div>  \
                        <div class='row'>   \
                            <div class='col-sm-5'>  \
                                <dl class='dl-horizontal'>  \
                                    <dt>时间：</dt>    \
                                    <dd>" + result[i].time + "</dd>    \
                                </dl>   \
                            </div>  \
                        </div>  \
                    </div>  \
                </div>  \
            </div>  \
        </div>");
    }
}


// /experiemnt.html?teacher_id=" + teacher_id + "&exper_id=" + result[i].id +  "'

function goexp(id){
    data.exper_id = id;
    var params = function(args){
        var p = [];
        for(var n in args)
            p.push( n + '=' + escape(args[n]));
        return ('?' + p.join('&'));
    };
    location.href = 'experiment.html' + params(data);
}

function goadd(){
    var params = function(args){
        var p = [];
        for(var n in args)
            p.push( n + '=' + escape(args[n]));
        return ('?' + p.join('&'));
    };
    location.href = 'add_exp.html' + params(data);
}

function gohome(){
    var params = function(args){
        var p = [];
        for(var n in args)
            p.push( n + '=' + args[n]);
        return unescape('?' + p.join('&'));
    };
    if (top == this) {
    var gohome = '<div class="gohome"><a class="animated bounceInUp" href="view.html?id=' + teacher_id + '&name=' + escape(name) + '"title="返回首页"><i class="fa fa-home"></i></a></div>';
    $('body').append(gohome);
}
}





