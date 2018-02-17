var body = $('html, body');


	$('#togglebar-line').click(function(){
		$e = this;
		console.log($e.parentNode.classList);
		$e.parentNode.classList.toggle('hide-the-kids');
		}
		);

	function scrollTo(element){
		var ypos = element.offset().top;
		console.log(ypos);

		body.stop().animate({scrollTop:ypos},
				300,
				'swing',
			       	function(){
					console.log('finito')
				});
	}

	function mHideHead(){
	scrollTo($('#page-head'));

	document.body.classList.add('scrolled-past'); //TODO: polyfill
	
	}

		$('#body-butt').click(mHideHead);
		/*TODO: the same on overscroll*/
