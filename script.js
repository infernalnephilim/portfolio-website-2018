'use strict';

$(window).on('load', function(){
    $(".loader").fadeOut();
    $(".loader-wrapper").delay(350).fadeOut("slow");
});

$(function () {
    $("#s1-text").load("o-mnie.html", function (response, status, xhr) {
        if (status == "error") {
            var msg = "Sorry but there was an error: ";
            $("#error").html(msg + xhr.status + " " + xhr.statusText);
        }
    });
    $("#s2-text").load("umiejetnosci.html");
    $("#s3-text").load("edukacja.html");
    $("#s4-text").load("portfolio.html");
    $("#s5-text").load("kontakt.html");
    $("footer").load("footer.html");
    $("#navbarNav .nav-item:nth-child(1)").addClass("active");
});

$(function () {

    $("#navbarNav .nav-item").on("click", function () {
        $("#navbarNav .nav-item").removeClass("active");
        $(this).addClass("active");
    });

    $('a[href^="#"]').click(function () {

        var the_id = $(this).attr("href");

        $('html, body').animate({
            scrollTop: $(the_id).offset().top - $("#nav").height()
        }, 'slow');

        return false;
    });
});

$(window).bind('scroll', function () {
    navColorChange();
    // highlightNav();
    // var h = $("#grid").height();
    // $("#portfolio").css("min-height:", h);
});

function navColorChange() {
    var top = $(window).scrollTop();
    var height = $("#carousel").height();
    var navheight = $("#nav").height();

    if (top > height - navheight - 10) {
        $("#nav").addClass("nav-change");
    } else {
        $("#nav").removeClass("nav-change");
    }
}

