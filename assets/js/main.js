(function ($) {
	"use strict";

    jQuery(document).ready(function($){


        $(".embed-responsive iframe").addClass("embed-responsive-item");
        $(".carousel-inner .item:first-child").addClass("active");
        
        $('[data-toggle="tooltip"]').tooltip();
        
        //MagneficPopup
        
        $(".intro-play-btn").magnificPopup({
            type:'video',
        });

        $(".apps-screen-items").owlCarousel({
            items:1,
            autoplay:true,
            loop:true,
            nav:true,
            navText:['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
        });
        
        //Testimonial Slide
        
        $(".testimonial-slider").owlCarousel({
            items:1,
            nav:true,
            navText:['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
            loop:true,
        }); 
        
        //Testimonial Slide
        
        $(".blog-slide").owlCarousel({
            items:1,
            nav:false,
            autoplay:true,
            dots:true,
        });

        //Sticky menu
       $(window).on('scroll',function() {    
       var scroll = $(window).scrollTop();
       if (scroll < 10) {
        $("#fixed-menu").removeClass("sticky");
       }else{
        $("#fixed-menu").addClass("sticky");
       }
      });
        
        //ScrollTo
        
         $(window).scroll(function(){
            if ($(this).scrollTop() > 100) {
                $('.scrollToTop').fadeIn();
            } else {
                $('.scrollToTop').fadeOut();
            }
        });

        //Click event to scroll to top
        $('.scrollToTop').click(function(){
            $('html, body').animate({scrollTop : 0},800);
            return false;
        });
        
        
        var overlay = document.getElementById("overlay");

            window.addEventListener('load', function(){
              overlay.style.display = 'none';
        });
        

    });


    jQuery(window).load(function(){

        
    });


}(jQuery));	