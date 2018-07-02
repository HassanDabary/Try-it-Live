$(document).ready(function () {
	 $('#htmlTextArea').text(null);
	 $('#cssTextArea').text(null);
	 $('#jsTextArea').text(null);


	$('#cssTextArea').bind('input propertychange', function() {
        var x = $('#cssTextArea').text();
		$('#myStyle').html(x);

     });

	$('#jsTextArea').bind('input propertychange', function() {
        var z =$('#jsTextArea').text();
		$('#myJs').html(z);
		

     });

	$('#htmlTextArea').bind('input propertychange', function() {
		
        var y = $('#htmlTextArea').text();
		$('#output').html(y);

     });


});
