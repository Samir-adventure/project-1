$(document).ready(function(){ 
    $('.mobile-toggle').click(function () {
        $('.main-menu').toggleClass('active');
        $('.overlay').toggleClass('active');
        $('body,html').toggleClass('scrollno');
    });
    $('.menu-close-btn, .overlay').click(function () {
        $('.main-menu').removeClass('active');
        $('.overlay').removeClass('active');
        $('body,html').removeClass('scrollno');
    });
});
