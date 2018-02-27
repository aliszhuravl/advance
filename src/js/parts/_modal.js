
$(document).ready(function() {
    $(".btn_show").click(function () {
        $(".popup_wrapper").fadeIn(500);
    });

    $(".cross-pop").click(function () {
        $(".popup_wrapper").fadeOut(500);
    });

});