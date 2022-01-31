$(document).ready(function() {
    /* start varibale global */


    /* end varibale global */


    /* functio style globale */
    function control_show() {
        if ($(window).width() < 620) {
            $("nav .icon_menu").css("display", "flex");
            $("nav .menu").addClass("sm_menu");
        } else {
            $("nav .icon_menu").css("display", "none");
            $("nav .menu").removeClass("sm_menu");
            $("nav .menu").show();
        }


    }
    /* end function globale */

    /*start appel les fonctuon*/
    control_show();
    $(window).on("resize", function() {
        control_show()
    });
    $("body").css("padding-top", $("nav").innerHeight());
    /*end appel les fonctuon*/

    /* start nav bar */
    //click sur le menu
    $("nav .menu ul li a").click(function(e) {
        e.preventDefault();

    });
    let actv = false
    $("nav .menu ul li").hover(function() {
        if ($(this).hasClass("actv")) {
            actv = true;
        }
        $(this).addClass("actv");
        $(this).find(".hr_menu").css("width", "100%")
        $("nav .menu ul li").click(function(e) {
            e.preventDefault();
            $("nav .menu ul li").removeClass("actv")
            $(".hr_menu").css("width", "0px")
            $(this).addClass("actv");
            $(this).find(".hr_menu").css("width", "100%")
            $("nav .menu").css("right", "-300px");
            $("nav .icon_menu").removeClass("show_menu");
            $("nav .sm_menu").css("right", "-300px")
            $("nav .sm_menu").fadeOut();
            actv = true

            $(window).scrollTop($('#' + $(this).find('a').data("scroll")).offset().top - $("nav").innerHeight());
        });
    }, function() {
        if (!actv) {
            $(this).removeClass("actv")
            $(this).find(".hr_menu").css("width", "0px")
        } else {
            actv = false
        }
    });
    //click show sm_menu
    $("nav .icon_menu").click(function(e) {
        e.preventDefault();
        $(this).toggleClass("show_menu");
        if ($(this).hasClass("show_menu")) {
            $("nav .sm_menu").fadeIn();
            $("nav .sm_menu").css("right", "0px")

        } else {

            $("nav .sm_menu").css("right", "-300px")
            $("nav .sm_menu").fadeOut();

        }
    });
    $(window).scroll(function() {
        $("body > div").each(function() {
            if ($(window).scrollTop() >= $(this).offset().top - $("nav").innerHeight()) {
                let id = $(this).attr('id')
                $("nav .menu ul li").removeClass("actv");
                $(".hr_menu").css("width", "0px")
                $("nav .menu ul li a[data-scroll='" + id + "']").parent().addClass("actv");
                $("nav .menu ul li a[data-scroll='" + id + "']").siblings(".hr_menu").css("width", "100%");

            }
        })
    });
    /* end nav bar */


    /* start header */
    var srv = ["logiciel <img src='images/logiciel.png' > ", "website <img src='images/web.png' >", "mobile application<img src='images/mobile.png' >"]
    var i = 1
    window.setInterval(function() {
        $(".header .contante .srv span").html(srv[i]);

        i++
        if (i == srv.length) {
            i = 0
        }
    }, 2000)

    /* end header */


    /* start services */
    $(".chld:odd").css('transform', 'translateX(450px)')
    $(".chld:even").css('transform', 'translateX(-450px)')

    /* end services */
    var s = 450;
    $(".service .chld").hover(function() {
        $(this).css({ 'transform': "translateY(-10px)" })

    }, function() {
        $(this).css({ 'transform': "translateY(0px)" })
    });
    if ($(window).scrollTop() >= $(".service").offset().top - 600) {
        $(".chld").each(function() {
            if ($(window).scrollTop() >= $(this).offset().top - 500) {
                $(this).css('transform', 'translateX(0px)')
            }

            s = s * -1
        });
    } else {

        $(".chld:odd").css('transform', 'translateX(450px)')
        $(".chld:even").css('transform', 'translateX(-450px)')

    }
    $(window).scroll(function() {

        if ($(window).scrollTop() >= $(".service").offset().top - 600) {
            $(".chld").each(function() {
                if ($(window).scrollTop() >= $(this).offset().top - 500) {
                    $(this).css('transform', 'translateX(0px)')
                }

                s = s * -1
            });
        } else {

            $(".chld:odd").css('transform', 'translateX(450px)')
            $(".chld:even").css('transform', 'translateX(-450px)')

        }
    });

    /* start descreption services */


    /* end descreption services */


    /* start comments*/


    /* end comments*/


    /* start formulair commande */


    /* end formulair commande*/


    /* start footer */


    /* end footer */

});