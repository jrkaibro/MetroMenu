// Type : JavaScript
// Autor: Antonio Kaibro 
// Email: antonio.kaibro@abaco.com.br
// Data : 13/10/2012
// Site : www.KnetApp.com.br 

function Resize(){
	var tiles_area = 0;
	$(".tile-group").each(function(){
		tiles_area += $(this).outerWidth() + 80;

	});

	$(".tiles").css("width", 120 + tiles_area + 20);

	$(".page").css({
		height: $(document).height() - 20,
		width: $(document).width()
	});
}

function AddMouseWheel(){
	$("body").mousewheel(function(event, delta){
		var scroll_value = delta * 50;
		if (!jQuery.browser.chrome) {
			document.documentElement.scrollLeft -= scroll_value;
		} else {
			this.scrollLeft -= scroll_value;
		}
		return false;
	});
}

$(function(){

	Resize();
	AddMouseWheel();

})

