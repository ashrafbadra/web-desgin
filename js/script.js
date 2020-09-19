$(document).ready(function(){
    
    
    // Show Navbar when Click on icon
    $('i.icon').click(function(){
        $('.nav-list').slideToggle()
    });
    
    // when scroll body .. sticky navbar
    $(window).scroll(function(){
        var sc = $(this).scrollTop();
        if(sc > 50){  // Show Sticky Navbar
            $('header').addClass('sticky');
        }
        else {
            $('header').removeClass('sticky');
        }
        
        if( sc > 1840) {
            $('.time').countTo(); // Run Count To Plugin
			$(window).off('scroll');
            
        }
        
        
        
    });
    
    // Portfolio Buttons Change bg 
    $('.buttons button').click(function(){
        
        $(this).addClass('active_btn').siblings().removeClass('active_btn');
        
        var CSSFilter = $(this).attr('id');
        
        if( CSSFilter === "all"){
            $('.Images > div ').fadeIn();
        } else {
            $('.Images > div ').fadeOut();
            $('.Images ').contents().filter('.' + CSSFilter).fadeIn();
            
        } 
        
    });
    
 
    
 

  
    
   
});