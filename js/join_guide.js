function showAnswer(number){
    $(".answer"+number).slideToggle(400);
    var toggles = $('.plus-minus-'+number+' .menu-icon .accordion span');
    toggles.toggleClass("on");
}