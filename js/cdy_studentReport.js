var exper_id;
var teacher_id;
var answer;
var name;
var nowid;
$(window).load(function(){
	exper_id = args().exper_id;
	teacher_id = args().teacher_id;
    name = args().name;
    gohome();
	getStudentList();
	scoreConfirmClick();
});

function getStudentList(){
    $.ajax({
        type: "POST",
        async: true,            //异步请求（同步请求将会锁住浏览器，用户其他操作必须等待请求完成才可以执行）
        url: 'http://101.200.61.252:8080/teacher/studentlist?exper_id='+exper_id+'&teacher_id='+teacher_id,    //请求发送到TestServlet处
        data: {},
        dataType: "json",        //返回数据形式为json
        success: function (result) {
            //请求成功时执行该函数内容，result即为服务器返回的json对象
            if (result.length != 0) {
                initStudentList(result);
            }else{
            	myinit();
            }
        },
        error: function (errorMsg) {
        }
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

function initStudentList(result){
	for(var i in result){
                $("#studentList").append("	\
                	<div class='chat-user'>	\
                		<div class='chat-user-name'>	\
                            " + result[i].name +
                            "<span style='display:none'> " + result[i].id + "</span> \
                            </div> \
                        </div>");
	}
	setAction();
}


function setAction(){
    $(".chat-user").click(function(){
        // alert($(this).find('span').html());
        nowid = $.trim($(this).find('span').html());
        getReport($.trim($(this).find('span').html()));
    });
}

function getReport(id){
	 $.ajax({
	 	type: "POST",
	 	async: true,            //异步请求（同步请求将会锁住浏览器，用户其他操作必须等待请求完成才可以执行）
	 	url: 'http://101.200.61.252:8080/teacher/check?experiment_id='+exper_id+"&student_id="+id,    //请求发送到TestServlet处
	 	data: {},
	 	dataType: "json",        //返回数据形式为json
	 	success: function (result) {
	 		if (result) {
	 			answer = result;
	 			// result.attach_url = "http://101.200.61.252:8080/teacher/2017_2/3/1452792_施峰.pdf";
	 		}
    //         else{
	 		// 	answer.id = 5;
	 		// 	result.score=1;
	 		// 	result.attach_url = "http://101.200.61.252:8080/teacher/2017_2/3/1452792_施峰.pdf";
	 		// 	showReport(result.attach_url);
	 		// }
	 		showReport("http://101.200.61.252:8080"+result.attach_url);
            if(result.attach_url == null){
                $('#score-box').hide();
            }else{
                $('#score-box').show();
	 		if(result.score == null){
	 				$("#score-box input").attr("placeholder","分数: "+result.score);
	 				$("#score_confirm").hide();
	 			} else{
	 				$("#score-box input").attr("placeholder","请输入实验报告分数");
	 				$("#score_confirm").show();
	 			}
            }
	 	},
	 	error: function (errorMsg) {
	 		alert('fail');
	 	}
	 });
}

function showReport(pdf){
	$("#report").attr("href",pdf);
}

function scoreConfirmClick(){
    $("#score_confirm").click(function(){
        var score = $("#score_input").val();
        $.ajax({
            type: "POST",
            async: true,            //异步请求（同步请求将会锁住浏览器，用户其他操作必须等待请求完成才可以执行）
            url: 'http://101.200.61.252:8080/teacher/mark?answer_id=' + answer.id + "&score=" + score,    //请求发送到TestServlet处
            data: {},
            dataType: "json",        //返回数据形式为json
            success: function (result) {
                //请求成功时执行该函数内容，result即为服务器返回的json对象
                if (result) {
                    getReport(nowid);
                }
            },
            error: function (errorMsg) {
            	alert('fail');
            }
        });
    })
}

function myinit(){
	$("#studentList").append("<div class='chat-user'>	\
                        <div class='chat-user-name student'>施峰	\
                            <span style='display:none'>5</span>	\
                            </div>	\
                        </div>	\
	");
	setAction();
}

function gohome(){
    if (top == this) {
    var gohome = '<div class="gohome"><a class="animated bounceInUp" href="view.html?id=' + teacher_id + '&name=' + escape(name) + '"title="返回首页"><i class="fa fa-home"></i></a></div>';
    $('body').append(gohome);
}
}












