function myFunction() {
    var x = document.getElementById("topnav");
    console.log("clicked");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}

$(document).ready(function() {
    // $(".section-heading").css("color", "blue");
});