$(document).ready(function(){
	$('[data-toggle="tooltip"]').tooltip();
	var actions = $("#tabela-pensamento td:last-child").html();
	// Append table with add row form on add new button click
    $(".novo-pensamento").click(function(){
		$(this).attr("disabled", "disabled");
		var index = $("#tabela-pensamento > tbody > tr:last-child").index();
        var row = '<tr>' +
            '<td><input type="text" class="form-control" name="nome" id="name"></td>' +
			'<td>' + actions + '</td>' +
		'</tr>';
		
		$("#tabela-pensamento").append(row);
		$("#tabela-pensamento tbody tr").eq(index + 1).find(".add, .edit").toggle();
        $('[data-toggle="tooltip"]').tooltip();
    });
	// Add row on add button click
	$(document).on("click", ".add", function(){
		var empty = false;
		var input = $(this).parents("tr").find('input[type="text"]');
        input.each(function(){
			if(!$(this).val()){
				$(this).addClass("error");
				empty = true;
			} else{
                $(this).removeClass("error");
            }
		});
		$(this).parents("tr").find(".error").first().focus();
		if(!empty){
			input.each(function(){
				$(this).parent("td").html($(this).val());
			});			
			$(this).parents("tr").find(".add, .edit").toggle();
			$(".novo-pensamento").removeAttr("disabled");
		}		
    });
	// Edit row on edit button click
	$(document).on("click", ".edit", function(){		
        $(this).parents("tr").find("td:not(:last-child)").each(function(){
			$(this).html('<input type="text" class="form-control" value="' + $(this).text() + '">');
		});		
		$(this).parents("tr").find(".add, .edit").toggle();
		$(".novo-pensamento").attr("disabled", "disabled");
    });
	// Delete row on delete button click
	$(document).on("click", ".delete", function(){
        $(this).parents("tr").remove();
		$(".novo-pensamento").removeAttr("disabled");
    });
});
