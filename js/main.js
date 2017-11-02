/** 
 * ===================================================================
 * Main js
 *
 * ------------------------------------------------------------------- 
 */ 

(function($) {

	"use strict";

	/* --------------------------------------------------- */
	/* Preloader
	------------------------------------------------------ */ 
   $(window).load(function() {
      // will first fade out the loading animation 
    	$("#loader").fadeOut("slow", function(){

        // will fade out the whole DIV that covers the website.
        $("#preloader").delay(300).fadeOut("slow");

      }); 
  	})


  	/*---------------------------------------------------- */
	/* FitVids
	------------------------------------------------------ */ 
  	/* $(".fluid-video-wrapper").fitVids(); */


	/* --------------------------------------------------- */
	/*  Vegas Slideshow
	------------------------------------------------------ */

	function shuffle(o){
		for(var j, x, i = o.length; i; j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
		return o;
	};

	var bgimages = [
		{ src: "asset/images/slides/01.jpg" },
		{ src: "asset/images/slides/02.jpg" },
		{ src: "asset/images/slides/03.jpg" },
		{ src: "asset/images/slides/04.jpg" },
		{ src: "asset/images/slides/05.jpg" },
		{ src: "asset/images/slides/06.jpg" },
		{ src: "asset/images/slides/07.jpg" },
		{ src: "asset/images/slides/08.jpg" },
		{ src: "asset/images/slides/09.jpg" },
		{ src: "asset/images/slides/10.jpg" },
		{ src: "asset/images/slides/11.jpg" },
		{ src: "asset/images/slides/12.jpg" },
		{ src: "asset/images/slides/13.jpg" },
		{ src: "asset/images/slides/14.jpg" },
		{ src: "asset/images/slides/15.jpg" },
		{ src: "asset/images/slides/16.jpg" },
		{ src: "asset/images/slides/17.jpg" },
		{ src: "asset/images/slides/18.jpg" },
		{ src: "asset/images/slides/19.jpg" },
		{ src: "asset/images/slides/20.jpg" },
		{ src: "asset/images/slides/21.jpg" },
		{ src: "asset/images/slides/22.jpg" },
		{ src: "asset/images/slides/23.jpg" },
		{ src: "asset/images/slides/24.jpg" },
		{ src: "asset/images/slides/25.jpg" },
		{ src: "asset/images/slides/26.jpg" },
		{ src: "asset/images/slides/27.jpg" },
		{ src: "asset/images/slides/28.jpg" },
		{ src: "asset/images/slides/29.jpg" },
		{ src: "asset/images/slides/30.jpg" },
		{ src: "asset/images/slides/31.jpg" },
		{ src: "asset/images/slides/32.jpg" },
		{ src: "asset/images/slides/33.jpg" },
		{ src: "asset/images/slides/34.jpg" },
		{ src: "asset/images/slides/35.jpg" },
		{ src: "asset/images/slides/36.jpg" },
		{ src: "asset/images/slides/37.jpg" },
		{ src: "asset/images/slides/38.jpg" },
		{ src: "asset/images/slides/39.jpg" },
		{ src: "asset/images/slides/40.jpg" },
		{ src: "asset/images/slides/41.jpg" },
		{ src: "asset/images/slides/42.jpg" },
		{ src: "asset/images/slides/43.jpg" },
		{ src: "asset/images/slides/44.jpg" },
		{ src: "asset/images/slides/45.jpg" },
		{ src: "asset/images/slides/46.jpg" },
		{ src: "asset/images/slides/47.jpg" },
		{ src: "asset/images/slides/48.jpg" }
	]

	// Suffle the array
	var bgs = shuffle(bgimages);

	$(".home-slides").vegas({
		transition: 'fade',
		transitionDuration: 2500,
		delay: 5000,
		slides: bgs
	});


	/*-----------------------------------------------------*/
	/* tabs
  	-------------------------------------------------------*/	
	$(".tab-content").hide();
	$(".tab-content").first().show();

	$("ul.tabs li").click(function () {
	   $("ul.tabs li").removeClass("active");
	   $(this).addClass("active");
	   $(".tab-content").hide();
	   var activeTab = $(this).attr("data-id");
	   $("#" + activeTab).fadeIn(700);
	});


	/*----------------------------------------------------*/
  	/* Smooth Scrolling
  	------------------------------------------------------*/
  	$('.smoothscroll').on('click', function (e) {
	 	
	 	e.preventDefault();

   	var target = this.hash,
    	$target = $(target);

    	$('html, body').stop().animate({
       	'scrollTop': $target.offset().top
      }, 800, 'swing', function () {
      	window.location.hash = target;
      });

  	});


  	/* --------------------------------------------------- */
	/*  Placeholder Plugin Settings
	------------------------------------------------------ */
	$('input, textarea, select').placeholder()  


	/*----------------------------------------------------*/
	/* Final Countdown Settings
	------------------------------------------------------ */
	var finalDate = new Date("May 24, 2018 17:00:00");

	$('div#counter').countdown(finalDate)
   	.on('update.countdown', function(event) {

   		$(this).html(event.strftime('<div class=\"half\">' +
   											 '<span>%D <sup>days</sup></span>' + 
   										 	 '<span>%H <sup>hours</sup></span>' + 
   										 	 '</div>' +
   										 	 '<div class=\"half\">' +
   										 	 '<span>%M <sup>mins</sup></span>' +
   										 	 '<span>%S <sup>secs</sup></span>' +
   										 	 '</div>'));

   });     
 

})(jQuery);