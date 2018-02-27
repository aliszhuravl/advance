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