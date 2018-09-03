

function myFunction2() {
    document.getElementById("demo2").innerHTML = "I have collaborated with a team of web developers to develop the Judiciary Payroll and Funds Management System using HTML5, CSS, PHP (Laravel), MySQL, and jQuery. Lead a team of four that developed a custom Human Resource system for the National Industrial Court of Nigeria. ";
}

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