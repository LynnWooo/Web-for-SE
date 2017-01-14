var status = false;
var exp_detail;
var exper_id;
var teacher_id;
var exper;
var name;
$(window).load(function(){

    exper = args();
    exper_id = args().exper_id;
    teacher_id = args().teacher_id;
    name = args().name;
    gohome();
    //初始化实验详情
    $.ajax({
        url:'http://101.200.61.252:8080/student/experdetail?exper_id='+exper_id,
        dataType:'json',
        cache:false,
        data:'',
        type:'POST',
        success:function(result){
            exp_detail = result;
            writeExpDetail(exp_detail);
        },error:function(result){
        }
    });

    getStep();
    
});


function addConfirm(){
    var name = $('#cname').val();
    var formData = new FormData();
    formData.append("image_list",$('#file')[0].files[0]);
    formData.append("name", $('#cname').val());
    formData.append("suggest_time", $("#suggest_time").val() + ":00");
    formData.append("content", $("#content").val());
    formData.append("question_list", $("#question_list").val());
    formData.append("exper_id", exper_id);
    formData.append("note", $("#note").val());

    
    $.ajax({
        url:'http://101.200.61.252:8080/exper/insertstep',
        type:'POST',
        cache: false,
        data:formData,
        processData: false,
        contentType: false,
        beforeSend:function(){
        },
        success : function(responseStr){
        },error : function(responseStr){
        }
    });

    resetInput();
    getStep();
}

function resetInput(){
    $('#cname').val("");    //步骤名称   
    $("#suggest_time").val("5")   //建议时长
    $("#content").val("");  //步骤内容
    $("#note").val("");    //注意事项
    $("#question_list").val("");   //问题列表
    $("#file").val("");
}


function args(params){
    var a = {};
    params = params || location.search;
    if(!params)return{};
    params = unescape(params);
    params.replace(/(?:^\?|&)([^=&]+)(?:\=)([^=&]+)(?=&|$)/g,function(m,k,v){  a[k] = v; });
    return a;
}

function student(){
    var params = function(args){
        var p = [];
        for(var n in args)
            p.push( n + '=' + escape(args[n]));
        return ('?' + p.join('&'));
    };
    location.href = 'studentReport.html' + params(exper);
}

function init(result){
    var s = ["a", "s"];
    for(var i in result){
        $("#stepBox").append(" \
    <div class='col-sm-8' id='step_detail'> \
        <div class='wrapper wrapper-content animated fadeInUp'> \
                <div class='ibox'>  \
                    <div class='ibox-content'>  \
                        <div class='row'>   \
                            <div class='col-sm-12'> \
                                <div class='m-b-md'>    \
                                    <h2>" + result[i].name + "</h2>   \
                                </div>  \
                                <dl class='dl-horizontal'>  \
                                    <dt>建议时间：</dt>  \
                                    <dd><span class='label label-primary'>" + result[i].suggest_time + "Min</span>   \
                                    </dd>   \
                                </dl>   \
                            </div>  \
                        </div>  \
                        <div class='row'>   \
                            <div class='col-sm-5'>  \
                                <dl class='dl-horizontal'>  \
                                    <dt>步骤内容：</dt>  \
                                    <dd>" + result[i].content + "</dd>    \
                                    <dt>注意事项：</dt>  \
                                    <dd>" + result[i].note +"</dd>    \
                                </dl>   \
                            </div>  \
                            <div class='col-sm-7' id='cluster_info'>    \
                                <dl class='dl-horizontal'>  \
                                    <dt>问题列表：</dt>  \
                                    <dd>" + result[i].question_list + "</dd>  \
                                    <dt>图片列表：</dt>  \
                                    <dd><img src='http://101.200.61.252:8080/" + result[i].image_list + "'></dd>   \
                                </dl>   \
                            </div>  \
                        </div>  \
                    </div>  \
                </div>  \
            </div> \
        </div>  \
    ");
    }
}

function writeExpDetail(result){
    $("#experiment_name").html(result.name);
    $("#experiment_begin_time").html(result.time);
    $("#experiment_description").html(result.descbibe);
    $("#experiment_attach_url").attr('href', 'http://101.200.61.252:8080/'+result.attach_url);
    $("#experiment_pic_url").attr('src','http://101.200.61.252:8080/'+result.pic_url);
    $("#experiment_pic_url").css("width", "50px");
}

function getStep(){
    $.ajax({
        url:'http://101.200.61.252:8080/student/enterexper?exper_id='+exper_id,
        dataType:'json',
        cache:false,
        data:'',
        type:'POST',
        success:function(result){
            setStep(result);
            $("#number").html(result.length);
        },error:function(result){
        }
    });
}

//初始化实验步骤信息列表
function setStep(result){
    for(var i in result){
        $("#stepBox").append(" \
    <div class='col-sm-6' id='step_detail'> \
        <div class='wrapper wrapper-content animated fadeInUp'> \
                <div class='ibox'>  \
                    <div class='ibox-content'>  \
                        <div class='row'>   \
                            <div class='col-sm-12'> \
                                <div class='m-b-md'>    \
                                    <h2>" + result[i].name + "</h2>   \
                                </div>  \
                                <dl class='dl-horizontal'>  \
                                    <dt>建议时间：</dt>  \
                                    <dd><span class='label label-primary'>" + result[i].suggest_time + "Min</span>   \
                                    </dd>   \
                                </dl>   \
                            </div>  \
                        </div>  \
                        <div class='row'>   \
                            <div class='col-sm-5'>  \
                                <dl class='dl-horizontal'>  \
                                    <dt>步骤内容：</dt>  \
                                    <dd>" + result[i].content + "</dd>    \
                                    <dt>注意事项：</dt>  \
                                    <dd>" + result[i].note +"</dd>    \
                                </dl>   \
                            </div>  \
                            <div class='col-sm-7' id='cluster_info'>    \
                                <dl class='dl-horizontal'>  \
                                    <dt>问题列表：</dt>  \
                                    <dd>" + result[i].question_list + "</dd>  \
                                    <dt>图片列表：</dt>  \
                                    <dd><img src='http://101.200.61.252:8080/" + result[i].image_list + "'></dd>   \
                                </dl>   \
                            </div>  \
                        </div>  \
                    </div>  \
                </div>  \
            </div> \
        </div>  \
    ");
    }
}


function test(){
     var stepInfo = 'exper_id=' + '1'
             + '&name=' + 'name'
             + '&suggest_time=' + '10:00'
             + '&content=' + '1'
             + '&note=' + '1'
             + '&question_list=' + '11'
             + '&image_list=' + '';
    $.ajax({
        url: 'http://101.200.61.252:8080/exper/insertstep?',

        type: 'POST',
        success: function(){
        },error: function(){
        }
    });
}


function gohome(){
    if (top == this) {
    var gohome = '<div class="gohome"><a class="animated bounceInUp" href="view.html?id=' + teacher_id + '&name=' + escape(name) + '"title="返回首页"><i class="fa fa-home"></i></a></div>';
    $('body').append(gohome);
}
}






































