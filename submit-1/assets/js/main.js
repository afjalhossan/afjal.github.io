(function ($) {
	"use strict";

    jQuery(document).ready(function($){
        
        
        //Scroll paralax

     /*   var s = skrollr.init({
            render: function (data) {
                //Debugging - log the current scroll position.
                Consol.log(data.curTop);
            }
        });*/


        $(".testimonial-list").owlCarousel({
            items:1,
            nav:false,
            dot:false,
            loop:true,
            autoplay:true,
        });
        
        //Sticky-menu
        
        $(".header-area").sticky({topSpacing:0})
        
        
        //eanbling smooth scroll
        
        // jQuery smooth scroll
        $('.smooth-menu a').bind('click', function(event) {
            var $anchor = $(this);
            var headerH = '70';
            $('html, body').stop().animate({
                scrollTop : $($anchor.attr('href')).offset().top - headerH + "px"
            }, 1200, 'easeInOutExpo');

            event.preventDefault();
        }); 
        
        //jQury Scroll spy 
        
        $('body').scrollspy({
            target:'.navbar-collapse',
            offset: 95
        });
        
        
        
        
        $(".hero-text-carousel").owlCarousel({
            items:1,
            loop:true,
            dots:false,
            nav:true,
            autoplay:true,
        });
        
        
        $(".navbar-toggle").click(function(){
            $('body').addClass("mobile-menu")
        });
        
        $(".mainmenu ul.nav.navbar-nav li a").click(function(){
            $(".navbar-collapse").removeClass("in");
        });
        
    });


    jQuery(window).load(function(){
     
        
        
    });


}(jQuery));	