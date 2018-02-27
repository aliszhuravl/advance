(function($) {

    $(window).on('load resize', function () {

        /**
         *  set adaptive viewport on screens smaller then 640 and bigger than 1200
         *  set static viewport on screens between 641px and 1199
         */

        var mediaCheckMobile = window.matchMedia('(max-width: 640px)');
        var mediaCheckTablet = window.matchMedia('(min-width: 641px) and (max-width: 1199px)');
        var mediaCheckDesktop = window.matchMedia('(min-width: 1200px)');
        var viewport = document.getElementById('viewport');

        if (mediaCheckMobile.matches) {
            viewport.setAttribute('content', 'width=device-width, initial-scale=1.0');
        } else if (mediaCheckTablet.matches) {
            viewport.setAttribute('content', 'width=device-width');
        } else if (mediaCheckDesktop.matches) {
            viewport.setAttribute('content', 'width=device-width, initial-scale=1.0');
        }
    });
})(jQuery);
window.onload = function() {

    function GetIEVersion() {
        var sAgent = window.navigator.userAgent;
        var Idx = sAgent.indexOf("MSIE");

        // If IE, return version number.
        if (Idx > 0)
            return parseInt(sAgent.substring(Idx + 5, sAgent.indexOf(".", Idx)));

        // If IE 11 then look for Updated user agent string.
        else if (!!navigator.userAgent.match(/Trident\/7\./))
            return 11;

        else
            return 0; //It is not IE
    }

    if (GetIEVersion() > 0) {
        $('body').addClass('internet-explorer');
    } else {
        return;
    }
};
(function($) {

    function smoothScroll(link) {

        $(link).click(function () {
            if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                if (target.length) {
                    $('html, body').animate({
                        scrollTop: target.offset().top - 80
                    }, 600);
                    return false;
                }
            }
        });
    }

    smoothScroll( '#link-to-block' );

})(jQuery);
(function($) {
    var Accordion = function(el, multiple) {
        this.el = el || {};
        this.multiple = multiple || false;

        // Variable
        var links = this.el.find('.accordion__btn');
        // Event
        links.on('click', {
            el: this.el,
            multiple: this.multiple
        }, this.dropdown)
    };

    Accordion.prototype.dropdown = function(e) {
        var $el = e.data.el;
        $this = $(this);
        $next = $this.next();

        $next.slideToggle(150);
        $this.parent().toggleClass('accordion__item_open');

        // collapse other accordions
        if (!e.data.multiple) {
            $el.find('.accordion__content').not($next).slideUp().parent().removeClass('accordion__item_open');
        };
    };

    var accordion = new Accordion($('.accordion'), false);

})(jQuery);
(function($) {

    $('.tabs').each( function() {

        $('.tabs__buttons').on('click', '.tabs__btn:not(.tabs__btn_active)', function () {
            $(this).addClass('tabs__btn_active').siblings().removeClass('tabs__btn_active');
            $(this).closest('.tabs').find('.tabs__item').removeClass('active').eq($(this).index()).addClass('active');
        });
    });
})(jQuery);
$(document).ready(function(){
    $('.gb_animate').viewportChecker({
        classToAdd: 'visible animated fadeInUp',
        offset: 300
    });
    $('.uv_animate').viewportChecker({
        classToAdd: 'visible animated fadeInLeft',
        offset: 300
    });
    $('.cr_animate').viewportChecker({
        classToAdd: 'visible animated fadeInRight',
        offset: 300
    });
});
/* hamburger hide show */
(function($) {
    var hamburger = $('.hamburger');
    var body = $('body');

    function hamburgerOpen() {
        hamburger.addClass('hamburger_active');
        body.addClass('menu-mobile_opened');
    }

    function hamburgerClose() {
        hamburger.removeClass('hamburger_active');
        body.removeClass('menu-mobile_opened');
        body.addClass('menu-mobile_closed');
        setTimeout (function() {
            body.removeClass('menu-mobile_closed');
        }, 200);
    }

    hamburger.on('click', function () {
        if ( $(this).hasClass('hamburger_active') ) {
            hamburgerClose()
        } else {
            hamburgerOpen();
        }
    });

    $('.menu-mobile__close').on('click', function() {
        hamburgerClose();
    });

    $('.menu-mobile__backdrop').on('click', function() {
        hamburgerClose();
    });

    $(document).keyup(function(e) {
        if (e.keyCode == 27 && (body.hasClass('menu-mobile_opened'))) { // escape key
            hamburgerClose()
        }
    });
})(jQuery);
$('.dropdown').each(function () {

    // Cache the number of options
    var $dropdown = $(this),
        $dropdowns = $('.dropdown').not(this),
        $dropdownText = $dropdown.find('.dropdown__text'),
        $dropdownList = $dropdown.find('.dropdown__list'),
        $dropdownListItems = $dropdown.find('.dropdown__item');

    // Show the unordered list when the styled div is clicked (also hides it if the div is clicked again)
    $dropdown.on('click', function(e) {
        e.stopPropagation();
        $dropdowns.removeClass('dropdown_opened');
        $dropdowns.find('.dropdown__list').slideUp(250);

        if ($dropdown.hasClass('dropdown_opened')) {
            $dropdown.removeClass('dropdown_opened');
            $dropdown.find('.dropdown__list').slideUp(250);
        } else {
            $dropdown.addClass('dropdown_opened');
            $dropdown.find('.dropdown__list').slideDown(250);
        }
    });

    // Hides the unordered list when a list item is clicked and updates the styled div to show the selected list item
    // Updates the select element to have the value of the equivalent option
    $dropdownListItems.click(function(e) {
        e.stopPropagation();
        $dropdownText.text($(this).text());
        $dropdown.removeClass('dropdown_opened');
        $dropdownList.slideUp(150);
        if($(this).hasClass('tabs__btn')){
            $(this).addClass('tabs__btn_active').siblings().removeClass('tabs__btn_active');
            $(this).closest('.tabs').find('.tabs__item').removeClass('active').eq($(this).index()).addClass('active');
        }
        if($(this).hasClass('recall_li')) {
            $('.recall_li').each (function() {
                if ($(this).data('id') === 'ans') {
                    $(this).click (function() {$('#modal-answer').modal();});
                }
                if ($(this).data('id') === 'req') {
                    $(this).click (function() {$('#modal-request').modal();});
                }
                if ($(this).data('id') === 'demo') {
                    $(this).click (function() {$('#modal-demo').modal();});
                }
                if ($(this).data('id') === 'rec') {
                    $(this).click (function() {$('#modal-recall').modal();});
                }
                if ($(this).data('id') === 'err') {
                    $(this).click (function() {$('#modal-error').modal();});
                }
                if ($(this).data('id') === 'sale') {
                    $(this).click (function() {$('#modal-sale').modal();});
                }
            });
        }
    });

    // Hides the unordered list when clicking outside of it
    $(document.body).click( function() {
        $dropdown.removeClass('dropdown_opened');
        $dropdownList.slideUp(150);
    });
});
var map1;

function initMap() {

    //var mapStyles = [{"featureType":"administrative","elementType":"labels.text.fill","stylers":[{"visibility":"on"},{"hue":"#008eff"},{"invert_lightness":true},{"lightness":"-64"}]},{"featureType":"administrative.country","elementType":"all","stylers":[{"visibility":"on"}]},{"featureType":"administrative.country","elementType":"geometry.fill","stylers":[{"visibility":"on"},{"lightness":"-70"}]},{"featureType":"landscape","elementType":"all","stylers":[{"visibility":"off"},{"hue":"#ff0000"}]},{"featureType":"poi","elementType":"all","stylers":[{"visibility":"on"},{"hue":"#008bff"}]},{"featureType":"poi","elementType":"labels.text","stylers":[{"visibility":"simplified"},{"lightness":"30"},{"gamma":"1.00"}]},{"featureType":"poi.attraction","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"poi.business","elementType":"all","stylers":[{"visibility":"on"}]},{"featureType":"poi.government","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"poi.medical","elementType":"all","stylers":[{"visibility":"simplified"}]},{"featureType":"poi.park","elementType":"all","stylers":[{"visibility":"on"}]},{"featureType":"poi.place_of_worship","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"poi.school","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"poi.sports_complex","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"road","elementType":"all","stylers":[{"saturation":-100},{"lightness":45},{"visibility":"simplified"}]},{"featureType":"road.highway","elementType":"all","stylers":[{"visibility":"on"},{"hue":"#ff0000"},{"lightness":"-10"},{"saturation":"100"},{"gamma":"1"}]},{"featureType":"road.highway","elementType":"labels","stylers":[{"visibility":"on"},{"hue":"#008eff"},{"saturation":"0"},{"lightness":"0"},{"gamma":"1"}]},{"featureType":"road.highway","elementType":"labels.icon","stylers":[{"visibility":"on"}]},{"featureType":"road.highway.controlled_access","elementType":"all","stylers":[{"visibility":"on"}]},{"featureType":"road.highway.controlled_access","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"road.arterial","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"road.arterial","elementType":"geometry.stroke","stylers":[{"visibility":"simplified"}]},{"featureType":"road.arterial","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"road.local","elementType":"all","stylers":[{"visibility":"on"}]},{"featureType":"road.local","elementType":"geometry.fill","stylers":[{"visibility":"on"}]},{"featureType":"road.local","elementType":"geometry.stroke","stylers":[{"visibility":"on"}]},{"featureType":"road.local","elementType":"labels","stylers":[{"visibility":"simplified"},{"lightness":"-15"}]},{"featureType":"road.local","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"transit","elementType":"all","stylers":[{"visibility":"on"}]},{"featureType":"transit","elementType":"geometry.fill","stylers":[{"visibility":"on"}]},{"featureType":"transit","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"transit.line","elementType":"all","stylers":[{"visibility":"simplified"}]},{"featureType":"transit.station","elementType":"all","stylers":[{"visibility":"on"}]},{"featureType":"transit.station.airport","elementType":"all","stylers":[{"visibility":"on"}]},{"featureType":"transit.station.bus","elementType":"all","stylers":[{"visibility":"on"}]},{"featureType":"transit.station.rail","elementType":"all","stylers":[{"visibility":"on"}]},{"featureType":"water","elementType":"all","stylers":[{"visibility":"on"},{"hue":"#008eff"},{"saturation":"-69"},{"lightness":"-27"}]}]

    if (document.getElementById('map1')) {
        map1 = new google.maps.Map(document.getElementById('map1'), {
            center: {lat: 30.278001, lng: 120.156992},
            zoom: 10,
            zoomControl: true,
            mapTypeControl: false,
            streetViewControl: false,
            scrollwheel: false
        });

        google.maps.event.addDomListener(window, 'resize', function () {
            var center1 = map1.getCenter();
            google.maps.event.trigger(map1, 'resize');
            map1.setCenter(center1);
        });

        //map1.setOptions({styles: mapStyles});
    }

    var geomarkGold = {
        url: 'img/mark-2.png',
        size: new google.maps.Size(22, 35)
    };
    var geomarkBlack = {
        url: 'img/mark-1.png',
        size: new google.maps.Size(22, 35)
    };

    var markOffice1 = new google.maps.Marker({
        position: {lat: 30.278001, lng: 120.156992},
        map: map1,
        icon: geomarkGold
    });

    var markOffice2 = new google.maps.Marker({
        position: {lat: 30.085305, lng: 120.203589},
        map: map1,
        icon: geomarkBlack
    });

    var markOffice3 = new google.maps.Marker({
        position: {lat: 30.009687, lng: 119.964001},
        map: map1,
        icon: geomarkGold
    });

    var markOffice4 = new google.maps.Marker({
        position: {lat: 30.166443, lng: 120.207688},
        map: map1,
        icon: geomarkGold
    });

}

initMap();

	$('.qa_slider').slick({
		arrows: false,
		dots: true,
		slidesToShow: 1,
		slidesToScroll: 1
	});

	$('.fab_slider').slick({
		arrows: false,
		dots: true,
		slidesToShow: 1,
		slidesToScroll: 1
	});
	$('.sticky').hcSticky({
		top: 80,
		bottomEnd: 0,
		className: 'is-sticky',
		wrapperClassName: 'wrapper-sticky'
	});
(function($) {

        /* highlight active menu item*/
        $('.nav__link').each(function (index) {
            if ($.trim(this.href) == window.location)
                $(this).addClass('link_active');
        });

})(jQuery);

$(document).ready(function() {
    $(".btn_show").click(function () {
        $(".popup_wrapper").fadeIn(500);
    });

    $(".cross-pop").click(function () {
        $(".popup_wrapper").fadeOut(500);
    });

});
$(document).ready(function() {
    $(".act_list").click(function () {
        $(".down_window").toggleClass('vis_down');
    });
});

$(document).ready(function() {
    $("#msearch").click(function () {
        $(".search_box").toggleClass('vis_search');
    });
});
$('.fab_slider').on('beforeChange', function(event, slick, currentSlide, nextSlide) {
    var indexSlide = nextSlide + 1;
    $('.slide-number').text(indexSlide);
});


(function($) {

    function smoothScroll(link) {

        $(link).click(function () {
            if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                if (target.length) {
                    $('html, body').animate({
                        scrollTop: target.offset().top - 100
                    }, 600);
                    return false;
                }
            }
        });
    }

    smoothScroll( '.link' );

})(jQuery);