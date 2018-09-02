$(document).ready(function(){

    $('a').click(function(){
        var selected = $(this);
        $('a').removeClass('active');
        $(selected).addClass('active');
    });

    var $a = $('.a'),
    $b = $('.b'),
    $c = $('.c'),
    $d = $('.d'),
    $home = $('.home'),
    $about = $('.about'),
    $portfolio = $('.portfolio'),
    $contact = $('.contact');

    $a.click(function(){
        $home.fadeIn();
        $about.fadeOut();
        $portfolio.fadeOut();
        $contact.fadeOut();
    });

    $b.click(function(){
        $about.fadeIn();
        $home.fadeOut();
        $portfolio.fadeOut();
        $contact.fadeOut();
    });

    $c.click(function(){
        $portfolio.fadeIn();
        $home.fadeOut();
        $about.fadeOut();
        $contact.fadeOut();
    });

    $d.click(function(){
        $contact.fadeIn();
        $home.fadeOut();
        $about.fadeOut();
        $portfolio.fadeOut();
    });

    

});

function myFunction2() {
    document.getElementById("demo2").innerHTML = "Hello World";
}