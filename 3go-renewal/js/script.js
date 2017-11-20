 $(document).ready(function () {
     $(window).scroll(function () {
         var scroll = $(window).scrollTop();
         if (scroll > 800) {
             $(".change-logo").css("display", "none");
             $(".change-logo-1").css("display", "block");
             $(".nav-text").css("color", "gray");
         } 
         else 
         {
             $(".change-logo").css("display", "block");
             $(".change-logo-1").css("display", "none");
             $(".nav-text").css("color", "white");
         }
     });
 });


 $(document).ready(function () {
     $(window).scroll(function () {
         var scroll = $(window).scrollTop();
         if (scroll > 800) {
             $(".display-none").animate({
                 opacity: '1',
                 top: '0'
             }, "slow");
         }
     });
 })
