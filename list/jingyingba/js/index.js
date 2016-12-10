/**
 * Created by lanou on 16/9/14.
 */
var dian = document.querySelectorAll(".drop li");
var tu = document.querySelectorAll(".print li");
var length = tu.length;
var index = 0;
var timer = null;



for (var i = 0;i<dian.length;i++){
    dian[i].index = i;
    dian[i].onmouseover = function () {
        clearInterval(timer);
        for(var i = 0;i<dian.length;i++){
            dian[i].className="";
            tu[i].className="";
        }
        index=this.index;
        dian[this.index].className="onclick";
        tu[this.index].className="onclick";
    }
    dian[i].onmouseout = function(){
        timer = setInterval(xiaYiGe,3000);
    }
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
timer = setInterval(xiaYiGe,3000);

window.onload = function () {
    var div = document.querySelector(".cooperate_warp");
    var box = document.querySelector(".cooperate_warp .cooperate_box");
    var lefter = document.querySelector(".cooperate_warp .cooperate_left");
    var righter = document.querySelector(".cooperate_warp .cooperate_right");
    var one = document.querySelector(".cooperate_warp .cooperate_box .one");
    var two = document.querySelector(".cooperate_warp .cooperate_box .two");

    var width = div.clientWidth;
    box.style.width = width*2 + "px";
    var left = 0;
    var right = 1670;
    lefter.onclick = function () {
        left -= 167;
        if(Math.abs(left) >= 1670) {
            left = 1503;
        }
        right -= 167;
        if(Math.abs(right) >= 1670) {
            right = 1503;
        }
        one.style.left = left + "px";
        two.style.left = right + "px";
    }
    righter.onclick = function () {
        left += 167;
        if(left >= 1670) {
            left = -1503;
        }
        right += 167;
        if(right >= 1670) {
            right = -1503;
        }
        one.style.left = left + "px";
        two.style.left = right + "px";
    }
    var btn = document.querySelector(".up_on");
    var timer = null;
    var top = document.body.scrollTop;
    btn.onclick = function () {
        clearInterval(timer);
        timer = setInterval(fn,30);
        function fn(){
            var top = document.body.scrollTop;
            var sudu = Math.ceil(top/8);
            document.body.scrollTop = top - sudu;
            if(top == 0){
                clearInterval(timer);
            }
        }
    }
    clearInterval(timer);
}
