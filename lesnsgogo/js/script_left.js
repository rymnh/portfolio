/*메뉴*/
$(document).ready(function(){
    $('.gnb_btn').click(function(){
    var hidden = $('.gnb_list');
    if (hidden.hasClass('visible')){
        hidden.animate({"left":"-330px"}, "fast").removeClass('visible');
    } else {
        hidden.animate({"left":"0px"}, "fast").addClass('visible');
    }
	});
	

});
