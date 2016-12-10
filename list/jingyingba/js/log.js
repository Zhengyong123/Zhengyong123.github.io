/**
 * Created by lanou on 16/9/19.
 */
var log = document.querySelectorAll(".title a");
var login = document.querySelector(".warp_log");
var regin = document.querySelector(".warp_reg");


log[0].onclick = function () {
    log[0].className = "on";
    log[1].className = "";
    login.style.display = "block";
    regin.style.display = "none";
}
log[1].onclick = function () {
    log[1].className = "on";
    log[0].className = "";
    login.style.display = "none";
    regin.style.display = "block";
}

var one = document.querySelectorAll(".warp_log .error");
var two = document.querySelectorAll(".warp_reg .error");
var logPhone = document.querySelector(".log_phone input");
var logPass = document.querySelector(".log_pass input");
var logYanzheng = document.querySelector(".log_yanzheng input");
var regPhone = document.querySelector(".reg_phone input");
var regYanzheng1 = document.querySelector(".reg_yanzheng1 input");
var regYanzheng2 = document.querySelector(".reg_yanzheng2 input");
var regPass = document.querySelector(".reg_pass input");
var regPass2 = document.querySelector(".reg_pass2 input");

logPhone.onblur = function () {
    var text = logPhone.value;
    if(!text){
        one[0].style.display = "block";
        one[0].innerHTML= "<em></em> 手机号码不能为空";
    }else if(isNaN(text)){
        one[0].innerHTML= "<em></em> 请输入数字";
        one[0].style.display = "block";
    }else if(text.length!=11){
        one[0].innerHTML = "<em></em> 请输入11位数";
        one[0].style.display = "block";
    }else {
        one[0].style.display = "";
    }
}
logPass.onblur = function () {
    var text = logPass.value;
    if(!text){
        one[1].style.display = "block";
        one[1].innerHTML= "<em></em> 密码不能为空";
    }else {
        one[1].style.display = "";
    }
}
logYanzheng.onblur = function () {
    var text = logYanzheng.value;
    if(!text){
        one[2].style.display = "block";
        one[2].innerHTML= "<em></em> 验证码不能为空";
    }else {
        one[2].style.display = "";
    }
}



regPhone.onblur = function () {
    var text = regPhone.value;
    if(!text){
        two[0].style.display = "block";
        two[0].innerHTML= "<em></em> 手机号码不能为空";
    }else if(isNaN(text)){
        two[0].innerHTML= "<em></em> 请输入数字";
        two[0].style.display = "block";
    }else if(text.length!=11){
        two[0].innerHTML = "<em></em> 请输入11位数";
        two[0].style.display = "block";
    }else {
        two[0].style.display = "";
    }
}

regYanzheng1.onblur = function () {
    var text = regYanzheng1.value;
    if(!text){
        two[1].style.display = "block";
        two[1].innerHTML= "<em></em> 验证码不能为空";
    }else {
        two[1].style.display = "";
    }
}
regYanzheng2.onblur = function () {
    var text = regYanzheng2.value;
    if(!text){
        two[2].style.display = "block";
        two[2].innerHTML= "<em></em> 验证码不能为空";
    }else {
        two[2].style.display = "";
    }
}
regPass.onblur = function () {
    var text = regPass.value;
    if(!text){
        two[3].style.display = "block";
        two[3].innerHTML= "<em></em> 密码不能为空";
    }else {
        two[3].style.display = "";
    }
}
regPass2.onblur = function () {
    var text = regPass2.value;
    if(!text){
        two[4].style.display = "block";
        two[4].innerHTML= "<em></em> 密码不能为空";
    }else if(text === regPass.value){
        two[4].style.display = "";
    }else {
        two[4].style.display = "block";
        two[4].innerHTML= "<em></em> 两次密码输入不同";
    }
}