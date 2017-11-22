//nav-fixed-and color changing

$(document).ready(function() {
            $(window).scroll(function() {
                var scroll = $(window).scrollTop();
                if (scroll > 800) {
                    $(".change-logo").css("display", "none");
                    $(".change-logo-1").css("display", "block");
                    $(".nav-text").css("color", "gray");
                } else {
                    $(".change-logo").css("display", "block");
                    $(".change-logo-1").css("display", "none");
                    $(".nav-text").css("color", "white");
                }
            });
        });
//nav-fixed-end

        //text-animating
        $(document).ready(function() {
            $(window).scroll(function() {
                var scroll = $(window).scrollTop();
                if (scroll > 800) {
                    $(".display-none").stop().animate({
                        opacity: '1',
                        top: '0'
                    }, 300);
                } else {
                    $(".display-none").stop().animate({
                        opacity: '0',
                        top: '10'
                    }, 300);
                }
            });
        });
//text-animation-end

        //more-menu

        $(document).ready(function() {
            $("#more-btn").click(function() {
                $(".second-more-wrap-menu").slideToggle("slow");
            })
        });
//more-menu end


        // tab-menu
$(function () {

    $(".tab_content").hide();
    $(".tab_content:first").show();

    $("ul.tabs li").click(function () {
        $("ul.tabs li").removeClass("active").css("color", "#333");
        //$(this).addClass("active").css({"color": "darkred","font-weight": "bolder"});
        $(this).addClass("active").css("color", "#D25252");
        $(".tab_content").hide()
        var activeTab = $(this).attr("rel");
        $("#" + activeTab).fadeIn()
    });
});