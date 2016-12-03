var dian = all(".dian li");
var tu = all(".tu li");
var left = ll(".left");
var right = ll(".right");
var index = 0;
var length = tu.length;
var but = all(".but");
var tab = ll(".tab");


var caidan = all(".caidan li")
var cediv = all(".cediv")
var timer = null; 
function ll(x){
		return document.querySelector(x);
	}
function all(x){
		return document.querySelectorAll(x);
	}

for (var i = 0;i<dian.length;i++) {
	dian[i].index = i;
	dian[i].onmouseover = function() {
		clearInterval(timer);
		for(var i = 0;i<dian.length;i++){
			dian[i].className="";
			tu[i].className="";
		}
		index = this.index;
		dian[this.index].className="onclick";
		tu[this.index].className="onclick";

	}
	dian[i].onmouseout = function(){
			timer = setInterval(xiaYiGe,3000);
		}
}

right.onclick=function(){
	clearInterval(timer);
	xiaYiGe();
	}
right.onmouseout=function(){
	timer = setInterval(xiaYiGe,3000);
}
function xiaYiGe(){
		index ++;
		if(index > dian.length-1){
			index = 0;
		}
		for(var i = 0;i<dian.length;i++){
				dian[i].className = "";
				tu[i].className = "";

		}
		dian[index].className="onclick";
		tu[index].className="onclick";

	}

left.onclick= function(){
	clearInterval(timer);
	shangYiGe();
	}
left.onmouseout=function(){
	timer = setInterval(xiaYiGe,3000);
}
function shangYiGe(){
	index --;
	if (index<0) {
		index = tu.length -1;
	}
	for(var i = 0;i<dian.length;i++){
		dian[i].className="";
		tu[i].className="";
	}
	dian[index].className="onclick";
	tu[index].className="onclick";
}

timer = setInterval(xiaYiGe,3000);

// left.onclick=function(){
// 	index --;
// 	if (index<0) {
// 		index = tu.length -1;
// 	}
// 	for(var i = 0;i<dian.length;i++){
// 		dian[i].className="";
// 		tu[i].className="";
// 	}
// 	dian[index].className="onclick";
// 	tu[index].className="onclick";
// }

// right.onclick=function(){
// 	index ++;
// 	if (index>length -1) {
// 		index = 0;
// 	}
// 	for(var i = 0;i<dian.length;i++){
// 		dian[i].className="";
// 		tu[i].className="";
// 	}
// 	dian[index].className="onclick";
// 	tu[index].className="onclick";
// }


for (var i = 0;i<7;i++) {
	caidan[i].index = i;
	caidan[i].onmouseover = function() {
		for(var i = 0;i<7;i++){
			cediv[i].style.display = "none";
		}
		cediv[this.index].style.display = "block";
	}
	caidan[i].onmouseout = function() {
		cediv[this.index].style.display = "none";
	}
}
for (var i = 0;i<7;i++) {
	cediv[i].index = i;
	cediv[i].onmouseover = function() {
		cediv[this.index].style.display = "block";
	}
	cediv[i].onmouseout = function() {
		cediv[this.index].style.display = "none";
	}
}
