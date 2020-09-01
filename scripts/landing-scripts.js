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
        naturalWidth: 1920,
        naturalHeight: 1080
    });

    /* carousel meet producers */
    $('.fs-producers-carousel').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        dots: false,
        arrows: false,
        autoplaySpeed: 2000,
        pauseOnHover: false,
        mobileFirst: true,
        responsive: [
            {
                breakpoint: 1500,
                settings: {
                    slidesToShow: 6
                }
            },{
                breakpoint: 1400,
                settings: {
                    slidesToShow: 5
                }
            },
            {
                breakpoint: 1300,
                settings: {
                    slidesToShow: 4
                }
            },
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 700,
                settings: {
                    slidesToShow: 2
                }
            }
    
      ]
    });

    /* carousel people say */
    $('.fs-contacts-carousel').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        dots: false,
        autoplaySpeed: 2000,
        pauseOnHover: false,
        mobileFirst: true,
        responsive: [
            {
                breakpoint: 1000,
                settings: {
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 700,
                settings: {
                    slidesToShow: 2
                }
            }
    
      ]
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
        $('#fs-logo-img').attr("src","images/logo.png");
    } else {
        $('#myNavbar').removeClass("w3-card w3-animate-top w3-white fs-navbar-trasparent");
        $('#fs-logo-img').attr("src","images/logo.png");
    }

});

// window resize event functions
$(window).on('resize', function(){

    fullscreenImages();    

});

