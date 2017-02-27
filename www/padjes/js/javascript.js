/**
 * Created by Gerwin on 24-2-2017.
 */

$(function() {
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

