/**
 * Created by lanou on 16/10/8.
 */
window.onload = function(){
    var div = document.querySelector(".xunhuan");
    var box = document.querySelector(".xunhuan .box");
    var ul = document.querySelector(".xunhuan .box ul");

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


    var width = div.clientWidth;
    box.style.width = width*2 + "px";
    var html = ul.cloneNode(true);
    box.appendChild(html);
    var left = 0;
    var timer = null;
    timer = setInterval(function(){
        left --;
        if(Math.abs(left) >= div.clientWidth) {
            left = 0;
        }
        box.style.left = left + "px";
    },10);
}

