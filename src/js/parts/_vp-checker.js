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