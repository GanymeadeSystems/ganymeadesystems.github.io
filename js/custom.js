function createProgressBar(progressValue, callback) {
	// Initialize the progress bar
	$("#progress-bar").progressbar({ value: progressValue });
	
	// Callback
	callback();
}

$(document).ready(function() {
	var progress = $("#progress-bar").data('progress-value'),
		progressDescription = $("#progress-bar").data('progress-description');
	
	// Create the progress bar
	createProgressBar(progress, function() {
		// If the progress value is higher than 70, we apply a separate class
		// to the progress bar
		if (progress > 70) {
			$(".ui-progressbar-value").addClass('inwards');
		}
	
		// Append the description to the inner progress bar layer
		$('<div class="progress-description">' + 
			'<p><strong>' +
			progress +
			'%</strong></p><p>' +
			progressDescription +
			'</p></div>').appendTo(".ui-progressbar-value");
	});
	
	
	
	
	
	// Show/hide the footer button
	$(window).scroll(function() {
		if ($(this).scrollTop() > 300) {
			$('.go-top').fadeIn(200);
		} else {
			$('.go-top').fadeOut(200);
		}
	});
	
	
	
	
	// Animate scrolling
	$('.go-top').click(function(e) {
		e.preventDefault();
		
		$('html, body').animate({scrollTop: 0}, 500);
	});
	
	
	
	
	
	// Make the placeholder attribute work for all browsers
	$("[placeholder]").blur(function() {
		var input = $(this);
		
		if (input.val() == '' || input.val() == input.attr('placeholder')) {
			input.addClass('placeholder');
			input.val(input.attr('placeholder'));
		}
	}).focus(function() {
		var input = $(this);
		
		if (input.val() == input.attr('placeholder')) {
			input.val('');
			input.removeClass('placeholder');
		}		
	}).blur();
	
	$("[placeholder]").parents('form').submit(function() {
		$(this).find('[placeholder]').each(function() {
			var input = $(this);
			
			if (input.val() == input.attr('placeholder')) {
				input.val('');
			}
		});
	});
});