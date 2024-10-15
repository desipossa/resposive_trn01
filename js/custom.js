$(function () {
    $('.mopen').on('click', function () {
        $('.gnb').toggleClass('on');
        $(this).toggleClass('on');
    });

    $('.hamburger').on('click', function () {
        $(this).toggleClass('is-active')
    })
})