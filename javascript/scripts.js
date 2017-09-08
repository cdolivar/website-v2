function myFunction() {
    var x = document.getElementById("topnav");
    console.log("clicked");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}

var scrolltime = 500;

$(document).ready(function() {
    // $(".section-heading").css("color", "blue");
    $("#home").click(function() {
        $('html, body').animate({
            scrollTop: $("#home_link").offset().top
        }, scrolltime);
    });

    $("#about").click(function() {
        $('html, body').animate({
            scrollTop: $("#about_link").offset().top
        }, scrolltime);
    });

    $("#uiux").click(function() {
        $('html, body').animate({
            scrollTop: $("#uiux_link").offset().top
        }, scrolltime);
    });

    $("#design").click(function() {
        $('html, body').animate({
            scrollTop: $("#design_link").offset().top
        }, scrolltime);
    });

    $("#contact").click(function() {
        $('html, body').animate({
            scrollTop: $("#contact_link").offset().top
        }, scrolltime);
    });

});