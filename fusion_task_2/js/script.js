$(".accordian").click(function() {
    $(this).next(".anw").stop().slidToggle(300);
    $(this).toggleClass('on').siblings().removeClass('on');
    $(this).next(".anw").siblings(".anw").slideUp(300);
});