function fullscreenImages(){
    var theWindow        = $(window),
        $bg              = $(".fs-carousel-item img"),
        aspectRatio      = $bg.width() / $bg.height();
    if ( (theWindow.width() / theWindow.height()) < aspectRatio ) {
        $bg.removeClass().addClass('bgheight');
    } else {
        $bg.removeClass().addClass('bgwidth');
    }
}

// document ready event functions 
$(document).ready(function() {

    // carousel hero
    $('.fs-carousel').slick({
        autoplay:true,
        dots: false,
        arrows: false,
        focusOnSelect: true,
        fade: true,
        speed: 100,
        pauseOnHover: false
    });
    // parallax carousel on hero
    $('.parallax-window').parallax({
        overScrollFix: true
    });

    // toggles the menu and hamburger menu
    $('.fire-toggle-menu').click(function() {
        var x = document.getElementById("navDemo");
        if (x.className.indexOf("w3-show") == -1) {
            x.className += " w3-show";
        } else {
            x.className = x.className.replace(" w3-show", "");
        }
    });

    fullscreenImages();   
});

// window scroll event functions
$(window).scroll(function(){   

    //navbar appears only on scroll
    if( window.scrollY > 100 ){
        $('#myNavbar').addClass("w3-card w3-animate-top w3-white fs-navbar-trasparent");
    } else {
        $('#myNavbar').removeClass("w3-card w3-animate-top w3-white fs-navbar-trasparent");
    }

});

// window resize event functions
$(window).on('resize', function(){

    fullscreenImages();    

});

