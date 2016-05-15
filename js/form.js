$(document).ready(function () {
	$("#form").submit(function () {
		var data = {
			name : $('input[name="name"]').value,
			email : $('input[name="email"]').value,
			message : $('textarea[name="message"]').value
		};
		$.ajax({
			type: "POST",
			url: "mail.php",
			data: data
		}).done(function (value) {
			$('#mail')[0].innerHTML = value;
			$('#form').addClass('not_visible');
			$('#mail').removeClass('not_visible');
			setTimeout(function () {
				$("#form").trigger("reset");
			}, 500);
		});
	return false;
	});

	// $('.btn').on('click', function(event) {
	// 	event.preventDefault();
	// 	if ( $('.login')[0].value == "podow" && $('.pass')[0].value == "asd" ) {
	// 		$('.enter-form').addClass('not_visible');
	// 		$('.form-wrapper').removeClass('not_visible');
	// 	} else {
	// 		alert('not correct');
	// 	}

	// });

});