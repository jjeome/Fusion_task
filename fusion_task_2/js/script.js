$('dd').hide();
$('dt').on('click', function () {
    if ($(this).hasClass('on')) {
        slideUp();
        changeIMG2();
    } else {
        slideUp();
        changeIMG();
        $(this).addClass('on').next().slideDown();
        changeIMG();
    }
    function slideUp() {
        $('dt').removeClass('on').next().slideUp();
        changeIMG();
    };
})

function changeIMG(){
    $("#fst-arrow").attr("src","/img/arrow-top.png");
}

function changeIMG2(){
    $("#fst-arrow").attr("src","/img/arrow-bottom.png");
}
