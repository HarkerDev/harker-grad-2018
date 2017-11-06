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

	function shuffle(array) {
		var currentIndex = array.length, temporaryValue, randomIndex;
	
		while (0 !== currentIndex) {
			randomIndex = Math.floor(Math.random() * currentIndex);
			currentIndex -= 1;
	
			temporaryValue = array[currentIndex];
			array[currentIndex] = array[randomIndex];
			array[randomIndex] = temporaryValue;
		}
	
		return array;
	}

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
		{ src: "asset/images/slides/48.jpg" },
		{ src: "asset/images/slides/49.jpg" },
		{ src: "asset/images/slides/50.jpg" },
		{ src: "asset/images/slides/51.jpg" },
		{ src: "asset/images/slides/52.jpg" },
		{ src: "asset/images/slides/53.jpg" },
		{ src: "asset/images/slides/54.jpg" },
		{ src: "asset/images/slides/55.jpg" },
		{ src: "asset/images/slides/56.jpg" },
		{ src: "asset/images/slides/57.jpg" },
		{ src: "asset/images/slides/58.jpg" },
		{ src: "asset/images/slides/59.jpg" },
		{ src: "asset/images/slides/60.jpg" },
		{ src: "asset/images/slides/61.jpg" },
		{ src: "asset/images/slides/62.jpg" },
		{ src: "asset/images/slides/63.jpg" },
		{ src: "asset/images/slides/64.jpg" },
		{ src: "asset/images/slides/65.jpg" },
		{ src: "asset/images/slides/66.jpg" },
		{ src: "asset/images/slides/67.jpg" },
		{ src: "asset/images/slides/68.jpg" },
		{ src: "asset/images/slides/69.jpg" },
		{ src: "asset/images/slides/70.jpg" },
		{ src: "asset/images/slides/71.jpg" },
		{ src: "asset/images/slides/72.jpg" },
		{ src: "asset/images/slides/73.jpg" },
		{ src: "asset/images/slides/74.jpg" },
		{ src: "asset/images/slides/75.jpg" },
		{ src: "asset/images/slides/76.jpg" },
		{ src: "asset/images/slides/77.jpg" },
		{ src: "asset/images/slides/78.jpg" },
		{ src: "asset/images/slides/79.jpg" },
		{ src: "asset/images/slides/80.jpg" },
		{ src: "asset/images/slides/81.jpg" },
		{ src: "asset/images/slides/82.jpg" },
		{ src: "asset/images/slides/83.jpg" },
		{ src: "asset/images/slides/84.jpg" },
		{ src: "asset/images/slides/85.jpg" },
		{ src: "asset/images/slides/86.jpg" },
		{ src: "asset/images/slides/87.jpg" },
		{ src: "asset/images/slides/88.jpg" },
		{ src: "asset/images/slides/89.jpg" },
		{ src: "asset/images/slides/90.jpg" },
		{ src: "asset/images/slides/91.jpg" },
		{ src: "asset/images/slides/92.jpg" },
		{ src: "asset/images/slides/93.jpg" },
		{ src: "asset/images/slides/94.jpg" },
		{ src: "asset/images/slides/95.jpg" },
		{ src: "asset/images/slides/96.jpg" },
		{ src: "asset/images/slides/97.jpg" },
		{ src: "asset/images/slides/98.jpg" },
		{ src: "asset/images/slides/99.jpg" },
		{ src: "asset/images/slides/100.jpg" },
		{ src: "asset/images/slides/101.jpg" },
		{ src: "asset/images/slides/102.jpg" },
		{ src: "asset/images/slides/103.jpg" },
		{ src: "asset/images/slides/104.jpg" },
		{ src: "asset/images/slides/105.jpg" },
		{ src: "asset/images/slides/106.jpg" },
		{ src: "asset/images/slides/107.jpg" },
		{ src: "asset/images/slides/108.jpg" },
		{ src: "asset/images/slides/109.jpg" },
		{ src: "asset/images/slides/110.jpg" },
		{ src: "asset/images/slides/111.jpg" },
		{ src: "asset/images/slides/112.jpg" },
		{ src: "asset/images/slides/113.jpg" },
		{ src: "asset/images/slides/114.jpg" },
		{ src: "asset/images/slides/115.jpg" },
		{ src: "asset/images/slides/116.jpg" },
		{ src: "asset/images/slides/117.jpg" },
		{ src: "asset/images/slides/118.jpg" },
		{ src: "asset/images/slides/119.jpg" },
		{ src: "asset/images/slides/120.jpg" },
		{ src: "asset/images/slides/121.jpg" },
		{ src: "asset/images/slides/122.jpg" },
		{ src: "asset/images/slides/123.jpg" },
		{ src: "asset/images/slides/124.jpg" },
		{ src: "asset/images/slides/125.jpg" },
		{ src: "asset/images/slides/126.jpg" },
		{ src: "asset/images/slides/127.jpg" },
		{ src: "asset/images/slides/128.jpg" }
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