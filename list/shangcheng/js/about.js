/**
 * Created by lanou on 16/10/9.
 */
window.onscroll = function(){
    var warp = document.querySelector(".waibu .warp");
    var scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
    var center = "50%";


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



    if(scrollTop >= 275){
        warp.style.position = "fixed";
        warp.style.top = 0 + "px";
        warp.style.left = center;
        warp.style.marginLeft = -215 + "px";
    }else if(scrollTop <= 275){
        warp.style.position = "relative";
        warp.style.top = 0 + "px";
        warp.style.left = center;
        warp.style.marginLeft = -215 + "px";
    }
}



