// One page scroll

$(".main").onepage_scroll({
   sectionContainer: "section",     // sectionContainer accepts any kind of selector in case you don't want to use section
   easing: "ease",                  // Easing options accepts the CSS3 easing animation such "ease", "linear", "ease-in",
                                    // "ease-out", "ease-in-out", or even cubic bezier value such as "cubic-bezier(0.175, 0.885, 0.420, 1.310)"
   animationTime: 1000,             // AnimationTime let you define how long each section takes to animate
   pagination: true,                // You can either show or hide the pagination. Toggle true for show, false for hide.
   updateURL: true,                // Toggle this true if you want the URL to be updated automatically when the user scroll to each page.
   beforeMove: function(index) {},  // This option accepts a callback function. The function will be called before the page moves.
   afterMove: function(index) {},   // This option accepts a callback function. The function will be called after the page moves.
   loop: false,                     // You can have the page loop back to the top/bottom when the user navigates at up/down on the first/last page.
   keyboard: true,                  // You can activate the keyboard controls
   responsiveFallback: false,        // You can fallback to normal page scroll by defining the width of the browser in which
                                    // you want the responsive fallback to be triggered. For example, set this to 600 and whenever
                                    // the browser's width is less than 600, the fallback will kick in.
   direction: "vertical"            // You can now define the direction of the One Page Scroll animation. Options available are "vertical" and "horizontal". The default value is "vertical".  
});


// For wow.js

new WOW().init();


// For video in youtube

var tag = document.createElement('script');
tag.src = "http://www.youtube.com/player_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

var player;
function onYouTubePlayerAPIReady() {
	player = new YT.Player('player', {
		playerVars: { 'autoplay': 1, 'controls': 0,'autohide':1,'wmode':'opaque', 'loop': 1, 'rel': 0, 'showinfo': 0, 'wmode': 'transperant', 'hd': 1, 'start': 20 },
		videoId: 'M3lOwDnRXjg',
		events: {
		'onReady': onPlayerReady}
	});
}

// 4. The API will call this function when the video player is ready.
function onPlayerReady(event) {
	event.target.mute();
}

//for resizing video
function videoResize() {
	var w = $(document).width()*1.35;
	$("#player").css('width', ''+w+'px').css('height', ''+w/1.77778+'px');
	console.log($(document).width());
}
videoResize();
$(window).resize(function() {
	videoResize();
});


// SLIDER

$('.right-arrow').click(function() {
	$('.white-chair').removeClass('animated').removeClass('fadeInLeft');
	$('.white-chair').addClass('fadeInLeft').addClass('animated');
});

