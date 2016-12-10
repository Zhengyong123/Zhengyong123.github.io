/**
 * Created by lanou on 16/10/10.
 */
window.onload = function () {
    var login = document.querySelector(".login");
    var zhuce = document.querySelector(".goin .zhuce");
    var kuang = document.querySelector(".login .kuang");
    var loging = document.querySelector(".loging");
    var kuanging = document.querySelector(".loging .kuang");
    var denglu = document.querySelector(".goin .denglu");

    var left = document.querySelectorAll(".vip_warp ul li");
    var right = document.querySelectorAll(".vip_warp ol li");

    var kuangbbc = document.querySelector(".vip_bao .kuangbbc");
    var tian = document.querySelector(".vip_warp ol li .bbc");
    var bao = document.querySelector(".vip_bao");

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



    for (i = 0;i < 4;i++) {
        left[i].index=i;
        left[i].onclick = function () {
            for(i = 0;i < 4;i++) {
                right[i].style.display = "none";
            }
            right[this.index].style.display = "block";
        }
    }

    tian.onclick = function () {
        bao.style.display = "block";
    }
    bao.onclick = function () {
        bao.style.display = "none";
    }
    kuangbbc.onclick = function () {
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
}