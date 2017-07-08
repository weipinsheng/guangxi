function $(id) {
	return document.getElementById(id)
}
var w_slider=$("w_slider");
var main_slider = $("main_slider");
var ctrl_slider = $("ctrl_slider");
var js_slider = $("js_slider");
var ctrl_slider_spans = ctrl_slider.children;
var slider_imgs = main_slider.children;
for (var i = 0; i < main_slider.children.length; i++) {
	var ctrl_slider_con = document.createElement("span");
	ctrl_slider_con.setAttribute("class", "ctrl-slider-con");
	ctrl_slider.insertBefore(ctrl_slider_con, ctrl_slider.children[1]);
	ctrl_slider_con.innerHTML = main_slider.children.length - i;
}
ctrl_slider_spans[1].setAttribute("class","ctrl-slider-con current");
for (var i = 1; i < slider_imgs.length; i++) {
	slider_imgs[i].style.left = js_slider.clientWidth + "px";
}
var iNow = 0;
for (var k in ctrl_slider_spans) {
	ctrl_slider_spans[k].onclick = function() {
		if (this.className == "ctrl-slider-next") {
            autoPlay();
		} else if (this.className == "ctrl-slider-prev") {
			animate(slider_imgs[iNow], {
				left: js_slider.clientWidth
			});
			iNow--;
			if (iNow < 0) {
				iNow = slider_imgs.length - 1;
			}
			slider_imgs[iNow].style.left = -js_slider.clientWidth + "px";
			animate(slider_imgs[iNow], {
				left: 0
			})
			setCurrent();
		} else {
			var that = this.innerHTML - 1;
			if (that > iNow) {
				animate(slider_imgs[iNow], {
					left: -js_slider.clientWidth
				});
				slider_imgs[that].style.left = js_slider.clientWidth + "px";
				animate(slider_imgs[that], {
					left: 0
				})
			} else if (that < iNow) {
				animate(slider_imgs[iNow], {
					left: js_slider.clientWidth
				});
				slider_imgs[that].style.left = -js_slider.clientWidth + "px";
				animate(slider_imgs[that], {
					left: 0
				})
			}
			iNow = that;
			setCurrent();
		}
	}
}
var timer=null;
timer=setInterval(autoPlay,2000);
w_slider.onmouseover=function(){
	clearInterval(timer);
}
w_slider.onmouseout=function(){
	clearInterval(timer);
	timer=setInterval(autoPlay,2000);
}
function setCurrent(){
	for(var i=1;i<ctrl_slider_spans.length-1;i++){
				ctrl_slider_spans[i].className="ctrl-slider-con";
			}
			ctrl_slider_spans[iNow+1].className="ctrl-slider-con current";
}
function autoPlay(){
	animate(slider_imgs[iNow], {
				left: -js_slider.clientWidth
			});
			iNow++;
			if (iNow > slider_imgs.length - 1) {
				iNow = 0;
			}
			slider_imgs[iNow].style.left = js_slider.clientWidth + "px";
			animate(slider_imgs[iNow], {
				left: 0
			});
			setCurrent();
}