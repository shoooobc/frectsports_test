$( document ).ready(function( $ ) {
    $('#wide').sliderPro({
        width: 500,//横幅
        arrows: true,//左右の矢印
        buttons: false,
        slideDistance: 10,//スライド同士の距離
        visibleSize: '100%',//前後のスライドを表示
        breakpoints: {
            600: {
                width: '100%',
                arrows: true,
                buttons: false,
            },
        }
    });
});