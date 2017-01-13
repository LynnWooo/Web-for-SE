  var courseList=new Array();
    var idList=new Array();
    var userList=new Array();
    var timeList=new Array();
    var statusList=new Array();
    var login_id;
    var login_name;

$(document).ready(function(){
    var a=GetRequest();
    login_id=a.id;
    login_name=unescape(a.name);
    // $.ajax({
    //     url:'http://101.200.61.252:8080/user/login',       //undefined
    //     dataType:'json',
    //     cache:false,
    //     data:null,
    //     type:'POST',
    //     success:function(data){
    //         alert(data);
    //         login_id=data.identify;
    //         login_name=data.name;
    //     },
    //     error:function(){
    //         alert('123');
    //     }
    // });
    //alert(login_id+login_name);
    initData();
    initPage();
});
    
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
//init data
function initData(){
    // for(var i=0;i<15;i++){
    //     courseList[i]=i;
    //     idList[i]=i*200;
    //     userList[i]=i+10083;
    //     timeList[i]=new Date();
    // }
    $.ajax({
        url:'http://101.200.61.252:8080/teacher/courselist',       //untested
        dataType:'json',
        cache:false,
        data:'teacher_id='+login_id,
        type:'POST',
        success:function(data){
            if(data.length==0)
            {
                $("#table_top_guide").html("您还未创建任何课程！");
                return;
            }
            for (var i = 0; i < data.length; i++) {
                courseList[i]=data[i].courseName;
                idList[i]=data[i].id;
                userList[i]=login_id;
                timeList[i]=data[i].time_list;
                statusList[i]=data[i].status;
            }
            for (var i = 0; i < courseList.length; i++) {
                $("#course_table").append(createDiv(courseList[i],idList[i],userList[i],timeList[i],statusList[i]));
            }

        },
        error:function(){
            alert('error');
        }
    });
}


//end init

function initPage(){
    $("#header_message").html("欢迎，"+login_name);
    $("#info_list_name").html("姓名："+login_name);
    $("#info_list_id").html("工号："+login_id);

    
}



function createDiv(name,id,user,time,status){
    var temp=$("<div></div>");
    temp.attr("id",name+"_course");
    temp.attr("class",'table_line');

    var c_name=$("<div></div>");
    c_name.html(name);
    c_name.attr("class","table_name");

    var c_user=$("<div></div>");
    c_user.html(user);
    c_user.attr("class","table_user");


    var c_time=$("<div></div>");
    if(time.length==1)
    c_time.html(time[0]);
    else{
        c_time.html(time[0]+'/'+time[1]);
    }
    c_time.attr("class","table_time");

    var c_status=$("<div></div>");
    if(status==0)
        c_status.html("开放中");
    else if(status==1)
        c_status.html("暂时关闭");
    c_status.attr('class','table_status');


    var c_button=$("<div></div>");
    if(status==0)
    c_button.html("<button onclick='delCourse("+id+")'>close</button> <button onclick='courseDetail("+id+")'>detail</button>");
    else if(status==1)
        c_button.html("<button onclick='rejoin("+id+")'>Reopen</button> <button onclick='courseDetail("+id+")'>detail</button>");
    c_button.attr('class','table_button');


    $(temp).append(c_name);
    $(temp).append(c_user);
    $(temp).append(c_time);
    $(temp).append(c_status);
    $(temp).append(c_button);

    return temp;
}
function jump_add_course(){
    window.location.assign("Add course.html?id="+login_id+'&name='+escape(login_name));
}
function delCourse(id){
    $.ajax({
        url:'http://101.200.61.252:8080/teacher/cancel',     //tested
        cache:false,
        data:'teacher_id='+login_id+'&course_id='+id,
        type:'POST',
        success:function(data){
            if(data.status==0){
                alert('删除成功!');
                window.location.assign("view.html?id="+login_id+"&name="+escape(login_name));
            }

            else
                alert('错误!');
        }
    });

}

function courseDetail(id){
    window.location.assign("course.html?teacher_id="+login_id+"&course_id="+id+"&name="+escape(login_name));
}

function rejoin(id){
    $.ajax({
        url:'http://101.200.61.252:8080/teacher/reinsert',       //tested
        dataType:'json',
        cache:false,
        data:'teacher_id='+login_id+'&course_id='+id,
        type:'POST',
        success:function(data){
            if(data.status==0){
                alert('重新开放成功!');
                window.location.assign("view.html?id="+login_id+"&name="+escape(login_name));
            }

            else
                alert('错误!');
        }
    });
}