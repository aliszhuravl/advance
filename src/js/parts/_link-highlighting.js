(function($) {

        /* highlight active menu item*/
        $('.nav__link').each(function (index) {
            if ($.trim(this.href) == window.location)
                $(this).addClass('link_active');
        });

})(jQuery);
