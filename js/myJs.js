$(document).ready(function () {
	 $('#htmlTextArea').val("");
	 $('#cssTextArea').val("");
	 $('#jsTextArea').val("");


	$('#cssTextArea').bind('input propertychange', function() {
        var x = $('#cssTextArea').val();
		$('#myStyle').html(x);

     });

	$('#jsTextArea').bind('input propertychange', function() {
        var z = $('#jsTextArea').val();
        z = '<script>'+z+'</script>';
        var y = $('#htmlTextArea').val();
		$('#output').html(y+z);
		

     });

	$('#htmlTextArea').bind('input propertychange', function() {
        var y = $('#htmlTextArea').val();
		$('#output').html(y);
     });


});
