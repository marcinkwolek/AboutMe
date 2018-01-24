$(document).ready(function () {

    $('.overlay').on('click', function () {
        $('.overlay').css({
            top: -974
        });
        welcomeAsync();
        mainSlide();
    });


function welcomeAsync() {
    setTimeout( function() {
        $('.welcome_page_left').css({
            left: -50 + '%'
        });
        $('.welcome_page_right').css({
            right: -50 + '%'
        })
    }, 400 );
}

function mainSlide() {
    setTimeout(function () {
        $('.header-bar').css({
            top: 0
        });
        $('.my-card').css({
            top: 0
        })
    },1800)
}});


