var setLtAvatarInterval;

$(document).ready(function(){
	setInterval(function(){
		$('#tl').find('>div.tl-bar').height($('#tl').outerHeight() - 30);
	}, 500);
	
	if($(window).width() > 768)
	{
		$('#tl').find('>div.tl-bar').hide().delay(2000).slideDown(5000);
	}
	else
	{
		$('#tl').find('>div.tl-bar').hide().delay(5000).slideDown(5000);
	}
	calAvatarPosition();

	$(window).resize(function(){
		calAvatarPosition();
	})

	$(document).on('click', 'p.tl-content', function(){
		$(this).next().slideToggle(1000);
	})
})

function calAvatarPosition(){
	setLtAvatarInterval = setInterval(function(){
		$('.litte-avatar-frame').css('margin-top', $('.litte-avatar-frame').prev().outerHeight() - $('.litte-avatar-frame').outerHeight());
		if($('.litte-avatar-frame').outerHeight() == $('.litte-avatar-frame').parent().outerHeight())
		{
			//setLtAvatarInterval.clearInterval();
		}
	}, 200);

	if($(window).width() > 768)
	{
		$('div.avatar-frame').css('margin-top', $('div.info-wrapper').outerHeight() - $('div.avatar-frame').outerHeight());
	}
	else
	{
		var allTL = $('#tl>div.row');

		$.each(allTL, function(index, item){
			$(item).find('.tl-timer').parent().hide();
			var timer = $(item).find('.tl-timer span').text();
			var icon = $(item).find('span.glyphicon').attr('class');

			var content = $(item).find('.tl-content').parent();
			if(content.find('i').length == 0)
			{
				var strong = document.createElement('strong');
				$(strong).text(timer);
				content.prepend(strong);
				var i = document.createElement('i');
				$(i).addClass(icon);
				content.prepend(i);
			}
		})
	}
}