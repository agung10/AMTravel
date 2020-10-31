// Navigation
let about   = $('#about').offset().top - 51;
let branch  = $('#branch').offset().top - 51;
let package = $('#package').offset().top - 51;
let gallery = $('#gallery').offset().top - 51;
let contact = $('#contact').offset().top - 51;

// ScrollChangedBGNav
window.addEventListener("scroll", function () {
    var nav = document.querySelector("nav");
    nav.classList.toggle("sticky", window.scrollY > 0);
});

// ChangedNav On Load
$(window).on('load', function () {
    var lastPosition = sessionStorage.getItem("lastPosition");
    if (lastPosition != null || lastPosition != undefined) {
        if (lastPosition < about) {
            $('li:nth-child(1)').addClass('active');
            setSection("home");
        }
        else if (lastPosition >= about && lastPosition < branch) {
            $('li:nth-child(2)').addClass('active');
            setSection("about");
        }
        else if (lastPosition >= branch && lastPosition < package) {
            $('li:nth-child(3)').addClass('active');
            setSection("branch");
        }
        else if (lastPosition >= package && lastPosition < gallery) {
            $('li:nth-child(4)').addClass('active');
            setSection("package");
        }
        else if (lastPosition >= gallery && lastPosition < contact) {
            $('li:nth-child(5)').addClass('active');
            setSection("gallery");
        }
        else if (lastPosition >= contact) {
            $('li:nth-child(6)').addClass('active');
            setSection("contact");
        }
    }
    else {
        $('li:nth-child(1)').addClass('active');
        setSection("home");
    }

})

// Slide
// $(document).ready(function () {
//     $('li').on('click', function() {
//         $(this).siblings().removeClass('active');
//         $(this).addClass('active');
//     });
// });

// Toggle
const menuToggle = document.querySelector('.menu-toggle input');
const nav = document.querySelector('nav ul');

menuToggle.addEventListener('click', function () {
    nav.classList.toggle('slide');
});

//function setSection
function setSection(pageSection) {
    switch (pageSection) {
        case "about":
            $('html, body').animate({
                scrollTop: about
            }, 1000, 'easeInOutExpo');
            break;
        case "branch":
            $('html, body').animate({
                scrollTop: branch
            }, 1000, 'easeInOutExpo');
            break;
        case "package":
            $('html, body').animate({
                scrollTop: package
            }, 1000, 'easeInOutExpo');
            break;
        case "gallery":
            $('html, body').animate({
                scrollTop: gallery
            }, 1000, 'easeInOutExpo');
            break;
        case "contact":
            $('html, body').animate({
                scrollTop: contact
            }, 1000, 'easeInOutExpo');
            break;
        default:
            $('html, body').animate({
                scrollTop: 0
            }, 1000, 'easeInOutExpo');
            break;
    }
}

// Scroll
$('.page-scroll').on('click', function (e) {
    var href = $(this).attr('href');
    var elementHref = $(href);

    $('html, body').animate({
        scrollTop: elementHref.offset().top - 50
    }, 1250, 'easeInOutExpo');

    e.preventDefault();
});

// Paralax 
$(window).scroll(function () {
    var scroll = $(this).scrollTop();
    
    // ChangedNav On Scroll
    if (scroll) {
        $('li').removeClass('active');
        sessionStorage.setItem("lastPosition", scroll);
        if (scroll < about) {
            $('li:nth-child(1)').addClass('active');
        }
        else if (scroll >= about && scroll < branch) {
            $('li:nth-child(2)').addClass('active');
        }
        else if (scroll >= branch && scroll < package) {
            $('li:nth-child(3)').addClass('active');
        }
        else if (scroll >= package && scroll < gallery) {
            $('li:nth-child(4)').addClass('active');
        }
        else if (scroll >= gallery && scroll < contact) {
            $('li:nth-child(5)').addClass('active');
        }
        else if (scroll >= contact) {
            $('li:nth-child(6)').addClass('active');
        }
    }

    // About
    $('.paragraf').addClass('pView');
    $('aside.profile').addClass('profileView');

    // Jumbotron
    $('.jumbotron .divider').css({
        'transform': 'translate(0, ' + scroll / 7 + '%)'
    });

    $('.jumbotron h1').css({
        'transform': 'translate(0, ' + scroll / 6.8 + '%)'
    });

    $('.jumbotron p').css({
        'transform': 'translate(0, ' + scroll / 6.8 + '%)'
    });

    $('.jumbotron .order, a').css({
        'transform': 'translate(0, ' + scroll / 6.8 + '%)'
    });

    // Branch
    if (scroll > $('.branch').offset().top - 220) {
        $('.branch .thumbnail-img').each(function (i) {
            setTimeout(function () {
                $('.branch .thumbnail-img').eq(i).addClass('bView');
            }, 450 * (i + 1));
        });
    }

    // Gallery
    if (scroll > $('.gallery').offset().top - 220) {
        $('.gallery .grid-container').each(function (i) {
            setTimeout(function () {
                $('.gallery .grid-container').eq(i).addClass('gView');
            }, 450 * (i + 1));
        });
    }
});