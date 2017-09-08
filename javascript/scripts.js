function myFunction() {
    var x = document.getElementById("topnav");
    console.log("clicked");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}



(function($) {

  /**
   * Copyright 2012, Digital Fusion
   * Licensed under the MIT license.
   * http://teamdf.com/jquery-plugins/license/
   *
   * @author Sam Sehnert
   * @desc A small plugin that checks whether elements are within
   *     the user visible viewport of a web browser.
   *     only accounts for vertical position, not horizontal.
   */

   $.fn.visible = function(partial) {

      var $t            = $(this),
      $w            = $(window),
      viewTop       = $w.scrollTop(),
      viewBottom    = viewTop + $w.height(),
      _top          = $t.offset().top,
      _bottom       = _top + $t.height(),
      compareTop    = partial === true ? _bottom : _top,
      compareBottom = partial === true ? _top : _bottom;

      return ((compareBottom <= viewBottom) && (compareTop >= viewTop));

  };

})(jQuery);

var scrolltime = 500;

$(document).ready(function() {

    // Scrolling
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

    // animate in
    $(window).scroll(function(event) {

      $(".module").each(function(i, el) {
        var el = $(el);
        if (el.visible(true)) {
          el.addClass("come-in");
      }
  });

  });

    var win = $(window);
    var allMods = $(".module");

    // Already visible modules
    allMods.each(function(i, el) {
      var el = $(el);
      if (el.visible(true)) {
        el.addClass("already-visible");
    }
    });

    win.scroll(function(event) {

      allMods.each(function(i, el) {
        var el = $(el);
        if (el.visible(true)) {
          el.addClass("come-in");
      }
    });

    });
});