/**
 * Created by lanou on 16/10/9.
 */
window.onload = function(){
    var warp = document.querySelector(".waibao");
    var small = document.querySelector(".waibao .left");
    var pointer = document.querySelector(".waibao .left .pointer");
    var big = document.querySelector(".waibao .big");
    var bigImg = document.querySelector(".waibao .big img");

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


    small.onmouseover = function(){
        pointer.style.display = "block";
        big.style.display = "block";
    }
    small.onmouseout = function(){
        pointer.style.display = "none";
        big.style.display = "none";
    }

    small.onmousemove = function(event){
        var oEvent = event || window.event;


        var x = oEvent.clientX-warp.offsetLeft;
        var y = oEvent.clientY-warp.offsetTop;


        var l = x - pointer.offsetWidth/2;
        var t = y - pointer.offsetHeight/2;

        if (x <= pointer.offsetWidth/2) {
            l = 0;
        }else if (x >= small.offsetWidth-pointer.offsetWidth/2) {
            l = small.offsetWidth-pointer.offsetWidth;
        }
        if (y <= pointer.offsetHeight/2) {
            t = 0;
        }else if (y >= small.offsetHeight-pointer.offsetHeight/2) {
            t = small.offsetHeight-pointer.offsetHeight;
        }

        // console.log(small.offsetLeft);
        var bigX = (bigImg.offsetWidth-big.offsetWidth)/(small.offsetWidth-pointer.offsetWidth);
        var bigY = (bigImg.offsetHeight-big.offsetHeight)/(small.offsetHeight-pointer.offsetHeight);
        //
        bigImg.style.left = -l*bigX + "px";
        bigImg.style.top = -t*bigY + "px";

        pointer.style.left = l + "px";
        pointer.style.top = t + "px";
    }



}