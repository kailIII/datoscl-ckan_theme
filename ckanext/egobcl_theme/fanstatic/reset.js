

$(document).ready(function(){

	var re = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
	var ep = "/api/reset/email_search";
	var validRut = false;

	$("#field-rut").Rut({
		on_success: function(){ 
			validRut = true; 
		},
	  on_error: function(){
	  	alert('Por favor, ingrese un RUT chileno válido');
	  	validRut = false; 
	  	$("#field-rut").val('').focus();
	  }
	});

	$('button.check[name=check]').on('click', function(event){
		event.preventDefault();
		var em = $('#field-email' ).val()
			, rut = $('#field-rut' ).val()
		if ( re.test(em) ) {
			$.ajax({
				"url": [ep, em, rut].join('/'),
				"method": "GET",
				"success": function(response){
					if (response.success && validRut) {
						$('#field-username').val(response.user.name).removeAttr('readonly');
						$('button.reset[name=reset]').show();
					} else {
						alert("Usuario no encontrado");
					}
				},
				"error": function(error){
					console.log(error);
				}
			})
		} else {
			console.log('false');
		}
			
	});
	
	


})