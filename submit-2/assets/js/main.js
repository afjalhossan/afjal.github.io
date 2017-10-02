(function ($) {
	"use strict";

    jQuery(document).ready(function($){
        
        
      // Add hover effect to menus
        $('ul.nav li.dropdown').hover(function() {
          $(this).find('.dropdown-menu').stop(true, true).delay(200).fadeIn();
        }, function() {
          $(this).find('.dropdown-menu').stop(true, true).delay(200).fadeOut();
        }); 
        //Sticky-menu
        
        $(".header-area").sticky({topSpacing:0});
        
       new WOW().init();
        
        
        
       
        
        
        
        
        
    });


    jQuery(window).load(function(){
     
        
        
    });


}(jQuery));	