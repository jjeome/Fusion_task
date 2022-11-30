$('dd').hide();

$('dt').on('click', function () {
    if ($(this).hasClass('on')) {
        slideUp();
        changeIMG(this);
    } else {
        slideUp();
        $(this).addClass('on').next().slideDown();
        changeIMG(this);
    }
});

function slideUp() {
    $('.arrow').children('.arr-img').attr("src","/img/arrow-bottom.png");
    $('dt').removeClass('on').next().slideUp();
};

function changeIMG(toggle){
    if($(toggle).hasClass('on')){
        $(toggle).children('.arrow').children('.arr-img').attr("src","/img/arrow-top.png");
    } else{
        $(toggle).children('.arrow').children('.arr-img').attr("src","/img/arrow-bottom.png");
    }
};

