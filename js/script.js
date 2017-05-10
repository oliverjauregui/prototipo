$(document).ready(function(){

	$("#banner").css({"height":$(window).height() + "px"});

	var flag = false;
	var scroll;

	$(window).scroll(function(){
		scroll = $(window).scrollTop();

		if(scroll > 200){
			if(!flag){
				$("header").css({"background-color": "#22242b"});
				flag = true;
			}
		}else{
			if(flag){
				$("header").css({"background-color": "transparent"});
				flag = false;
			}
		}


	});

});

var container = document.getElementById('container');
setTimeout(function() {
	container.classList.add('cerrar');
  document.body.style.overflowY= "visible";
}, 5000);
