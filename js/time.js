var header_time = document.getElementById("header_time");
var dayOfweek = ["星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"];
setTime();
function setTime(){
var now = new Date();
var year = now.getFullYear();
var month = now.getMonth() + 1;
var day = now.getDate();
var week = now.getDay();
var h = "0" + now.getHours();
var m = "0" + now.getMinutes();
var s = "0" + now.getSeconds();
if (h > 9) {
	h = now.getHours()
}
if (m > 9) {
	m = now.getMinutes()
}
if (s > 9) {
	s = now.getSeconds()
}
header_time.innerHTML=
year+"年 "
+month+"月 "
+day+"日 "
+dayOfweek[week]+" "
+h+":"+m+":"+s;
setTimeout("setTime()", 500);
}
