/*!
 * Copyright
 * To use this theme you must have a license purchased at WrapBootstrap (https://wrapbootstrap.com)
 */


if(document.addEventListener){
	document.addEventListener("DOMContentLoaded", function(){
		loaded();
	});
} else if(document.attachEvent){
	document.attachEvent("onreadystatechange", function(){
		loaded();
	});
}

function loaded(){
	
	setInterval(loop, 600);

}

<!-- CODE FROM sklz.io -->
var x = 0;

var titleText = [ "HDF.SERVICES", "BEST", "GAMESENSE", "LUA", ];

function loop(){

	document.getElementsByTagName("title")[0].innerHTML = titleText[x++%titleText.length];

}
<!-- CODE FROM sklz.io -->

// jQuery to collapse the navbar on scroll
$(window).scroll(function() {
    if ($(".navbar").offset().top > 50) {
        $(".navbar-fixed-top").addClass("top-nav-collapse");
    } else {
        $(".navbar-fixed-top").removeClass("top-nav-collapse");
    }
});

function load(){
	var videoAmount = 3;
	var video = document.getElementsByTagName("video")[0];
	video.src = "video"+Math.ceil(Math.random()*videoAmount)+".mp4";
	video.volume = 0.3;
	video.load();
	setInterval(loop, 1000);
	}
// jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: ($($anchor.attr('href')).offset().top - 64)
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});

// Highlight the top nav as scrolling occurs
$('body').scrollspy({
    target: '.navbar-fixed-top',
    offset: 65
})

// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function() {
    $('.navbar-toggle:visible').click();
});