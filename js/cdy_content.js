var btn_type = ["btn-default", "btn-primary", "btn-success", "btn-info",
"btn-warning", "btn-danger", "btn-white", "btn-link"]; 
$(function(){
	$("#specification  .btn-w-m").click(function(){
		$(this).hide();
	}); 

	$("#addSpecification button").click(function(){
		var specification = $("#addSpecification input");
		if(specification.val() == "")
			alert('null');
		else {
			var random = Math.floor((Math.random()*7)+1);
			var specification_detail = $("#specification_detail");
			var newSpecification = "<button type='button' class='btn btn-w-m " + btn_type[random] + "'>"  + specification.val() + "</button>";
			specification_detail.append(newSpecification);
			$("#specification  .btn-w-m").click(function(){
				$(this).hide();
			}); 
			specification.val("");
		}
	});

});