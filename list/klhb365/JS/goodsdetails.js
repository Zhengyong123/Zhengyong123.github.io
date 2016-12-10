/***********  无缝轮播  钱建波 ********/
var oPicList = document.getElementById("scrollpic");
var oUl = oPicList.getElementsByTagName("ul")[0];
var aLi = oUl.getElementsByTagName("li");
var aPrev = document.getElementById("prev");
var aNext = document.getElementById("next");
var  html="";
for( var i=0;i<5;i++){
	html +='<li><a href="#"><img src="../images/tp1.png"/></a></li>';
}
oUl.innerHTML = html;
oUl.innerHTML=oUl.innerHTML + oUl.innerHTML;
oUl.style.width = (aLi[0].offsetWidth+10) * aLi.length + "px";
var speed = 1;

//控制滚动
function movePic(){
	if(oUl.offsetLeft<=-oUl.offsetWidth/2){
		oUl.style.left = 0;
	}
	if(oUl.offsetLeft>0){
		oUl.style.left = -oUl.offsetWidth/2+"px";
	}
	oUl.style.left = oUl.offsetLeft + speed +"px";
}
var timer = setInterval(movePic,10);


//鼠标操作 暂停/滚动
oUl.onmouseover = function(){
	clearInterval(timer);
}
oUl.onmouseout = function(){
	timer = setInterval(movePic,10);
}


//控制图片左右滚动
aPrev.onmouseover=function(){
	speed=1;
}
aNext.onmouseover=function(){
	speed=-1;
 }


/****** 产品展示 赵兴籽 *********/
function $(x){
	return document.querySelector(x);
}
function $s(x){
	return document.querySelectorAll(x);
}
var span = $(".product-body ul");
var pop = $(".product-body  ol");
var square =$s(".product-body ul li .square");
var strul="";
var Str1="";
var Str="";
for(var i=0;i<6;i++){
	Str1+='<div class="box">'+
			'<a href="javascript:void(0)">'+									
			'<div class="smallbox"></div></a>'+
			'<span>户外垃圾桶果皮</span></div>';
}
var Str1='<li>'+Str1+'</li>';

for(var i=0;i<15;i++){
	Str +=Str1;
} 
for(var i=0;i<15;i++){
	strul +='<li><div class="square wrap"></div>'+
			'<span><a href="javascript:void(0)">不锈钢垃圾桶</a></span>'+
			'<div class="underline"></div></li>';
}
pop.innerHTML=Str;
span.innerHTML=strul;


var rot =$s(".product-body ul li");
var pic = $s(".product-body  ol li");
var color=$s(".product-body  ul li span a");
var square =$s(".product-body ul li .square");
var length=rot.length;
for(var i=0;i<length;i++){
 rot[i].index=i;
 color[i].index=i;
 color[0].style.color="#029501";
 rot[i].onclick=function(){
 	for(var j=0;j<length;j++){
 		color[j].style.color="";
 		pic[j].style.display="none";
 		square[j].style.transform="";
 	}
 	color[this.index].style.color="#029501";
 	pic[this.index].style.display="block";
 	pic[this.index].style.zIndex="3";
 	square[this.index].style.transform="rotateZ(135deg)";
	}
}


/****放大镜     王健   ****/
/**封装函数获取obj距离、屏幕左，上的距离**/
function getLeft (obj) {
	var ileft=0
	while(obj){
		ileft+=obj.offsetLeft
		obj=obj.offsetParent
	}
	return ileft
}
function getTop (obj) {
	var scrollTop=document.documentElement.scrollTop||document.body.scrollTop;
	var itop=0
	while(obj){
		itop+=obj.offsetTop
		obj=obj.offsetParent
	}
	return itop-scrollTop
}
var odiv=document.querySelector('.ppr_tu');
var omove=document.querySelector('.enlarge_box');
var ohide=document.querySelector('.enlarge_img_div');
var oimg=document.querySelector('#enlarge_img_img')
document.onmousemove=function  (ev) {
	var ev=event||ev
	/*检测是否进入图片区*/
	if (ev.clientX<getLeft(odiv)||ev.clientX>getLeft(odiv)+odiv.offsetWidth||ev.clientY<getTop(odiv)||ev.clientY>getTop(odiv)+odiv.offsetHeight) {
		omove.style.display='none';
		ohide.style.display='none';
		return;
	}else{
		omove.style.display='block';
		ohide.style.display='block';
		omove.style.cursor='move';
		var x=ev.clientX-getLeft(odiv)
		var y=ev.clientY-getTop(odiv)
		if (ev.clientX-getLeft(odiv)-115<0) {
			x=0;
		}else{x-=115}
		if (ev.clientX>odiv.offsetWidth+getLeft(odiv)-115) {
			x=odiv.offsetWidth-230;
		}
		if (ev.clientY-getTop(odiv)-115<0) {
			y=0;
		}else{y-=115}
		if (ev.clientY>odiv.offsetHeight+getTop(odiv)-140){
			y=odiv.offsetHeight-250;
		}
		omove.style.left=x+'px'
		omove.style.top=y+'px'
		oimg.style.left=-1.7*x+'px'
		oimg.style.top=-2*y+'px'
	}
				
}