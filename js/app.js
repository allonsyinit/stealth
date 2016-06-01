$(document).foundation()

$(document).ready(function(){
$('h1').css({ 'width':'100%', 'text-align':'center' });
    var h1 = $('h1').height();
    var h = h1/2;
    var w1 = $(window).height();
    var w = w1/2;
    var m = w - h
/*$('h1').css("margin-top",m + "px")*/
/*$('body').css("height",m + "px")*/
});

$(window).on("orientationchange",function(event){
$('h1').css({ 'width':'100%', 'text-align':'center' });
    var h1 = $('h1').height();
    var h = h1/2;
    var w1 = $(window).height();
    var w = w1/2;
    var m = w - h
/*$('h1').css("margin-top",m + "px")*/
/*$('body').css("height",m + "px")*/
/*$(window).location.reload()*/
});

$(document).ready(function(){
    $('a').smoothScroll();
});

/* Formspree AJAX */

$("#followsubmit").on("click", function() {
    message = $("#follow")
    $.ajax({
        url: "//formspree.io/marc.mosca@gmail.com",
        method: "POST",
        data: {message: message},
        dataType: "json"
    });
});