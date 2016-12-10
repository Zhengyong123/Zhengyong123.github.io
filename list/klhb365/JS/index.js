

/*  ******** 首页轮播  王健********/
//		封装的移动函数
		function startMove(obj,json,endFn){
	
		clearInterval(obj.timer);
		
		obj.timer = setInterval(function(){
			
			var bBtn = true;
			
			for(var attr in json){
				
				var iCur = 0;
			
				if(attr == 'opacity'){
					if(Math.round(parseFloat(getStyle(obj,attr))*100)==0){
					iCur = Math.round(parseFloat(getStyle(obj,attr))*100);
					
					}
					else{
						iCur = Math.round(parseFloat(getStyle(obj,attr))*100) || 100;
					}	
				}
				else{
					iCur = parseInt(getStyle(obj,attr)) || 0;
				}
				
				var iSpeed = (json[attr] - iCur)/5;
			iSpeed = iSpeed >0 ? Math.ceil(iSpeed) : Math.floor(iSpeed);
				if(iCur!=json[attr]){
					bBtn = false;
				}
				
				if(attr == 'opacity'){
					obj.style.filter = 'alpha(opacity=' +(iCur + iSpeed)+ ')';
					obj.style.opacity = (iCur + iSpeed)/100;
					
				}
				else{
					obj.style[attr] = iCur + iSpeed + 'px';
				}
				
				
			}
			
			if(bBtn){
				clearInterval(obj.timer);
				
				if(endFn){
					endFn.call(obj);
				}
			}
			
		},30);
	
	}
	
	
	function getStyle(obj,attr){
		if(obj.currentStyle){
			return obj.currentStyle[attr];
		}
		else{
			return getComputedStyle(obj,false)[attr];
		}
}
window.onload=function  () {
	var oul=document.querySelector('#tab ul');
	var oli=oul.querySelectorAll('li');
	var opre=document.querySelector('.pre')
	var onext=document.querySelector('.next')
	var time=null;
	var onoff=true;
	//				初始化nav_li宽度
	var oli_width=window.screen.width 
	for (i=0;i<oli.length;i++) {
		oli[i].style.width=oli_width+'px'
	}
	oul.style.width=oli_width*oli.length+'px';
	
	//				轮播函数
	function tab () {
		var oli=oul.querySelectorAll('li');
		startMove(oul,{left:-oli_width},function  () {
			oul.appendChild(oli[0])
			oul.style.left='0px'
		})
	}
	//				定时器
	time=setInterval(tab,3000)
	//				移入
	document.querySelector('#tab').onmouseover=function  () {
		clearInterval(time)
		opre.style.opacity='0.7';
		onext.style.opacity='0.7';
		//					后退按钮
		opre.onclick=function  () {
			if (onoff) {
				onoff=false;
				var oli=oul.querySelectorAll('li');
				oul.insertBefore(oli[oli.length-1],oul.firstChild)
				oul.style.left=-oli_width+'px'
				startMove(oul,{left:0},function  () {
					setTimeout(function  () {
						onoff=true
					},200)
				})
			}
		}
		onext.onclick=function  () {
			tab()
		}
	}
	//				移出
	document.querySelector('#tab').onmouseleave=function  () {
		time=setInterval(tab,3000)
		opre.style.opacity='0';
		onext.style.opacity='0';
	}
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
 pic[0].style.display="block";
 square[0].style.transform="rotateZ(135deg)";
 color[0].style.color="#029501";
 rot[i].onclick=function(){
 	for(var j=0;j<length;j++){
 		color[j].style.color="";
 		pic[j].style.display="none";
 		square[j].style.transform="";
 	}
 	color[this.index].style.color="#029501";
 	pic[this.index].style.display="block";
 	square[this.index].style.transform="rotateZ(135deg)";
	}
}

//  ********  工程案例      毕俊***********
var engineer_show=document.querySelector(".engineer-show ul");
var show_p=document.querySelectorAll(" .showText");
var fastchannel =document.querySelector(".fastchannel ol");
var friendship_link =document.querySelector(".friendship-link ol"); 
var string1="学校校园垃圾桶哪家强？首次出现";
var string2='户外垃圾桶8X-01450早已在广大校园里使用多时，并成为学校垃圾桶款式的经典之作好';
var l1=12;
var l2=41;

// 文本超出以省略号显示
		function checkString(s,l,tag){
			if(s.length>l){
				return s.substring(0,l)+tag;
			}
		}
// 案例展示 
	for(var i=0;i<6;i++){ 
	engineer_show.innerHTML+="<li>"+
							"<a href=''><div class='engineer-img'>"+
							"<img src='../images/engineer-img1.png' alt=''>"+
							"</div></a>"+
							"<span><a href=''>"+checkString(string1,l1,'...')+"</a></span>"+"<p class='showText'>"+checkString(string2,l2,'...')+"</p>"+
							"</li>";
	}
// 快速通道
	
	fastchannel.innerHTML="<li>"+
	                       "<mark>产品专题</mark>"+
	                       "<p><a href='#'>垃圾转运车</a><a href='#'>新一代环保垃圾桶</a>"+
	                       "<a href='#'>石木休闲椅</a><a href='#'>仿古垃圾桶</a><a href='#'>树围椅子...</a><a href='' class='fastchannel-more'>更多>></a></p>"+
	                   	"</li>"+
	                   	"<li>"+
	                       "<mark>案例专题</mark>"+
	                       "<p><a href=''>公园景区</a><a href=''>地产物业</a><a href=''>园林绿化</a><a href=''>小区街道</a><a href=''>市政环卫</a><a href=''>学校案例...</a><a href='' class='fastchannel-more'>更多>></a></p>"+
	                   	"</li>"+
	                   	"<li>"+
	                       "<mark>地区案例</mark>"+
	                       "<p><a href=''>湖南垃圾桶</a><a href=''>海南果皮箱</a><a href=''>海南果皮箱</a><a href=''>江西垃圾箱</a><a href=''>山西垃圾桶</a><a href=''>安徽垃圾箱</a><a href=''>山东垃圾桶</a><a href=''>贵州休闲椅</a><a href=''>河北果皮箱</a><a href=''>福建垃圾箱...</a><a href='' class='fastchannel-more'>更多>></a></p>"+
	                   	"</li>";

	// 友情链接
	
	friendship_link.innerHTML="<a href='http://www.baidu.com'><li>"+
						"<img src='../images/baiduTu.png' alt=''>"+
						"</li></a>"+
						"<a href='http://www.360.cn'><li>"+
							"<img src='../images/360Tu.png' alt=''>"+
						"</li></a>"+
						"<a href='http://www.yahoo.com'><li>"+
							"<img src='../images/yahooTu.png' alt=''>"+
						"</li></a>"+
						"<a href='http://www.sogou.com'><li>"+
							"<img src='../images/sogouTu.png' alt=''>"+
						"</li></a>"+
						"<a href='http://www.hc360.com'><li>"+
							"<img src='../images/conghuiTu.png' alt=''>"+
						"</li></a>"+
						"<a href='http://www.1688.com'><li>"+
							"<img src='../images/aliTu.png' alt=''>"+
						"</li></a>";







