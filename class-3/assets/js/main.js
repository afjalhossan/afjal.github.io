(function ($) {
	"use strict";

    jQuery(document).ready(function($){

        $(".case-study-carousel").owlCarousel({
            items:3,
            loop:true,
            dots:true,
            nav:false,
            margin:30,
        });
        $(".testimonial-slide").owlCarousel({
            items:1,
            loop:true,
            dots:true,
            nav:false,
        });
        

    });


    jQuery(window).load(function(){

        
    });


}(jQuery));	