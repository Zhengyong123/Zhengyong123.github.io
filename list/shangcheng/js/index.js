/**
 * Created by lanou on 16/10/8.
 */
var btns = document.querySelectorAll(".tu ol li");
var length = btns.length;
var pics = document.querySelectorAll(".tu ul li");
var timer = null;
var index = 0;
var login = document.querySelector(".login");
var zhuce = document.querySelector(".goin .zhuce");
var kuang = document.querySelector(".login .kuang");
var loging = document.querySelector(".loging");
var kuanging = document.querySelector(".loging .kuang");
var denglu = document.querySelector(".goin .denglu");


var logining = document.querySelector(".logining");
var huan = document.querySelector(".login .kuang .top .bottom2");
var kuanger = document.querySelector(".logining .kuang");

logining.onclick = function () {
    logining.style.display = "none";
}

huan.onclick = function () {
    logining.style.display = "block";
    login.style.display = "none";
}
kuanger.onclick = function () {
    stopBubble();
}



zhuce.onclick = function () {
    login.style.display = "block";
}
login.onclick = function () {
    login.style.display = "none";
}
denglu.onclick = function () {
    loging.style.display = "block";
}
loging.onclick = function () {
    loging.style.display = "none";
}



kuanging.onclick = function () {
    stopBubble();
}
kuang.onclick = function () {
        stopBubble();
}
//冒泡
function stopBubble(e){
    if(e&&e.stopPropagation){//非IE
        e.stopPropagation();
    }
    else{//IE
        window.event.cancelBubble=true;
    }
}

for (var i = 0;i<btns.length;i++) {
    btns[i].index = i;
    // btns[i].innerHTML = i+1;
    btns[i].onmouseover = function() {
        for(var i = 0;i<btns.length;i++){
            btns[i].style.backgroundColor="white";
            pics[i].style.opacity="0";
        }
        // index = this.index;
        btns[this.index].style.backgroundColor="red";
        pics[this.index].style.opacity="1";
        clearInterval(timer);
    }
    btns[i].onmouseout = function(){
        timer = setInterval(xiaYiGe,2000);
    }
}

function xiaYiGe(){
    index ++;
    if(index > btns.length-1){
        index = 0;
    }
    for(var i = 0;i<btns.length;i++){
        btns[i].style.backgroundColor= "white";
        pics[i].style.opacity= "0";

    }
    btns[index].style.backgroundColor= "red";
    pics[index].style.opacity= "1";
}
timer = setInterval(xiaYiGe,2000);