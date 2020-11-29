var logo_orizzontale = "https://francescasperati.github.io/witcare-frontend/images/logo-orizzontale.png";

var Access_and_Support = "Access-and-Support-Program.html";
var Visitation = "Visitation-Program.html";
var Social_Support = "Social-Support-Groups.html";
var Care_For_Carers = "Flexible-Respite-Care-For-Carers.html";
var Homecare = "homecare-package.html";

var Domande_di_pensione = "Domande-di-pensione.html";
var Variazione_di_residenza = "Variazione-di-residenza.html";
var Variazione_coordinate_bancarie = "Variazione-coordinate-bancarie.html";
var Modello_RED_estero = "Modello-RED.html";
var Esistenza_in_vita = "Esistenza-in-Vita.html";






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

    // // carousel hero
    $('.fs-carousel').slick({
        autoplay:true,
        dots: false,
        arrows: false,
        focusOnSelect: true,
        fade: true,
        speed: 100,
        pauseOnHover: false,
        adaptiveHeight: true
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

    // what we offer card links
    $( "#card-home-care" ).click(function() {
        window.open(Homecare, '_blank');
    });
    $( "#card-access-and-support" ).click(function() {
        window.open(Access_and_Support, '_blank');
    });
    $( "#card-visitation" ).click(function() {
        window.open(Visitation, '_blank');
    });
    $( "#card-social-support" ).click(function() {
        window.open(Social_Support, '_blank');
    });
    $( "#card-flexible-respite-care-for-carers" ).click(function() {
        window.open(Care_For_Carers, '_blank');
    });
    $( "#card-Domande-di-pensione" ).click(function() {
        window.open(Domande_di_pensione, '_blank');
    });
    $( "#card-Variazione-di-residenza" ).click(function() {
        window.open(Variazione_di_residenza, '_blank');
    });
    $( "#card-Variazione-coordinate-bancarie" ).click(function() {
        window.open(Variazione_coordinate_bancarie, '_blank');
    });
    $( "#card-Modello-RED-estero" ).click(function() {
        window.open(Modello_RED_estero, '_blank');
    });
    $( "#card-Esistenza-in-vita" ).click(function() {
        window.open(Esistenza_in_vita, '_blank');
    });

    /* parte con i pdf */
    // $( "#card-home-care" ).click(function() {
    //     window.open("documents/Home-Care-Packages.pdf", '_blank');
    // });
    // $( "#card-access-and-support" ).click(function() {
    //     window.open("documents/Access-and-Support-Program.pdf", '_blank');
    // });
    // $( "#card-visitation" ).click(function() {
    //     window.open("documents/Visitation-Program.pdf", '_blank');
    // });
    // $( "#card-social-support" ).click(function() {
    //     window.open("documents/Social-Support-Group.pdf", '_blank');
    // });
    // $( "#card-flexible-respite-care-for-carers" ).click(function() {
    //     window.open("documents/Flexible-Respite-Care-For-Carers.pdf", '_blank');
    // });
   

    
    
});

// window scroll event functions
$(window).scroll(function(){   

    //navbar appears only on scroll
    if( window.scrollY > 100 ){
        $('#myNavbar').addClass("w3-card w3-animate-top w3-white fs-navbar-trasparent");
        $('#fs-logo-img').attr("src",logo_orizzontale);
    } else {
        $('#myNavbar').removeClass("w3-card w3-animate-top w3-white fs-navbar-trasparent");
        $('#fs-logo-img').attr("src",logo_orizzontale);
    }

});

// window resize event functions
$(window).on('resize', function(){

    fullscreenImages();    

});

