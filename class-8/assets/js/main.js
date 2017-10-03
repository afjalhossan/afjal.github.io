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
        $(".logo-carousel").owlCarousel({
            items:6,
            loop:true,
            dots:false,
            nav:false,
        });
        $(".testimonial-carousel-home-2").owlCarousel({
            items:1,
            loop:true,
            dots:false,
            nav:false,
            autoplay:true,
        });
        

    });


    jQuery(window).load(function(){

        
    });


}(jQuery));	