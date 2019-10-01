var $window = $(window);

var scrollTime = 1;
var scrollDistance = 170;		//Distance. Use smaller value for shorter scroll and greater value for longer scroll

$window.on("mousewheel DOMMouseScroll", function(event){

	event.preventDefault();

	var delta = event.originalEvent.wheelDelta/120 || -event.originalEvent.detail/3;
	var scrollTop = $window.scrollTop();
	var finalScroll = scrollTop - parseInt(delta*scrollDistance);

	TweenLite.to($window, scrollTime, {
		scrollTo : { y: finalScroll, autoKill:true },
			ease: Power1.easeOut,	//For more easing functions see https://api.greensock.com/js/com/greensock/easing/package-detail.html
			autoKill: true,
			overwrite: 5
		});

});

$("#scroll").click(function(){
  TweenLite.to(window, 1, {scrollTo:{y:"#content", offsetY:-70}});
});