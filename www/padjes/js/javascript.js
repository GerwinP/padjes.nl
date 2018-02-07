/**
 * Created by Gerwin on 24-2-2017.
 */

$(function() {

    init_gallery(['.popup-gallery1', '.popup-gallery2']);

    var $menu = $('#menu');
    var $header = $('#header');
    var addOrRemove = true;

    $menu.on('click', function() {
        if (addOrRemove) {
            $header.addClass("toggle-red");
            addOrRemove = false;
        } else {
            setTimeout(function() {
                $header.removeClass("toggle-red");
            }, 300);
            addOrRemove = true;
        }
        //$header.toggleClass("toggle-red");
    });

    $menu.mouseup(function() {
        $menu.blur();
    });
});

// jQuery to collapse the navbar on scroll
function collapseNavbar() {
    if ($(".navbar").offset().top > 50) {
        $(".navbar-fixed-top").addClass("top-nav-collapse");
    } else {
        $(".navbar-fixed-top").removeClass("top-nav-collapse");
    }
}

$(window).scroll(collapseNavbar);
$(document).ready(collapseNavbar);

function init_gallery(elements) {
    for (i=0; i < elements.length; i++) {
        $(elements[i]).magnificPopup({
            delegate: 'a',
            type: 'image',
            tLoading: 'Loading image #%curr%...',
            mainClass: 'mfp-img-mobile',
            gallery: {
                enabled: true,
                navigateByImgClick: true,
                preload: [0, 1] // Will preload 0 - before current, and 1 after the current image
            },
            image: {
                tError: '<a href="%url%">The image #%curr%</a> could not be loaded.'
            }
        })
    }
}

	    // Initialize and Configure Magnific Popup Lightbox Plugin
    // $('.popup-gallery1').magnificPopup({
    //     delegate: 'a',
    //     type: 'image',
    //     tLoading: 'Loading image #%curr%...',
    //     mainClass: 'mfp-img-mobile',
    //     gallery: {
    //         enabled: true,
    //         navigateByImgClick: true,
    //         preload: [0, 1] // Will preload 0 - before current, and 1 after the current image
    //     },
    //     image: {
    //         tError: '<a href="%url%">The image #%curr%</a> could not be loaded.'
    //     }
    // });
    //
    // $('.popup-gallery2').magnificPopup({
    //     delegate: 'a',
    //     type: 'image',
    //     tLoading: 'Loading image #%curr%...',
    //     mainClass: 'mfp-img-mobile',
    //     gallery: {
    //         enabled: true,
    //         navigateByImgClick: true,
    //         preload: [0, 1] // Will preload 0 - before current, and 1 after the current image
    //     },
    //     image: {
    //         tError: '<a href="%url%">The image #%curr%</a> could not be loaded.'
    //     }
    // });