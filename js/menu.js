$(function () {

    $('.header .gnb>ul>li>a').on('click', function (e) {
        e.preventDefault();
        $(this).next().slideToggle();
    })
})