$(document)
.ready(function(){
	var default_setting = 's1',
		hash = window.location.hash.substr(1) || default_setting;
	$('body').attr('id',hash);
	console.log(hash);

	function get_font(){
		$font_id=$('.example small');
		$font_id.each(function(){
			font = 'Font: '+$(this).parent().css('font-family');
			$(this).html(font);
		});
	}
	get_font();

	$('.navbar-nav a').each(function(){
		$(this).bind('click', function(evt){
			var data_id = $(this).attr('data-id') || default_setting;
			$('body').attr('id',data_id);
			get_font();
		})
	})
}); //end ready