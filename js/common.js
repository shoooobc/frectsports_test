// ヘッダーについて
$(function(){
    $("#header").load("templates/header.html");
});

// フッターについて
$(function(){
    $("#footer").load("templates/footer.html");
});

////////////////////////////
////////// フワッと /////////
////////////////////////////
$(function(){
    load_effect();
    $(window).scroll(function (){
        scroll_effect();
    });
});

//ふわっとロード
function load_effect(){
    var tt = $(window).scrollTop();
    var hh = $(window).height();
    $('.load-fade').each(function(){
        var yy = $(this).offset().top;
        if (tt > yy - hh){
            $(this).addClass('done');
        }
    });
    $('.load-up').each(function(){
        var yy = $(this).offset().top;
        if (tt > yy - hh){
            $(this).addClass('done');
        }
    });
}

//ふわっとスクロール
function scroll_effect(){
    var tt = $(window).scrollTop();
    var hh = $(window).height();
    $('.scroll-fade').each(function(){
        var yy = $(this).offset().top + 150;//効果発生開始タイミングを操作したい場合は数値を変更する
        if (tt > yy - hh){
            $(this).addClass('done');
        }
    });
    $('.scroll-up').each(function(){
        var yy = $(this).offset().top + 150;//効果発生開始タイミングを操作したい場合は数値を変更する
        if (tt > yy - hh){
            $(this).addClass('done');
        }
    });
}

function hamburgerMenu(){
    if($('.menu-trigger').hasClass('active')){
        $('.menu-trigger').removeClass('active');
        $('main').removeClass('open');
        $('nav').removeClass('open');
        $('.overlay').removeClass('open');
        $('#fixed').fadeIn(750);
    } else {
        $('.menu-trigger').addClass('active');
        $('main').addClass('open');
        $('nav').addClass('open');
        $('.overlay').addClass('open');
        $('#fixed').fadeOut(100);
    }
}