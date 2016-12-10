var Jason={
	// 获取数据
	$:function(x){
		return document.querySelector(x);	
	  },
	$all:function(x){
			return document.querySelectorAll(x);	
		  },
	//排序 
	sortDown:function(x){
				x.sort(function(a,b){
					return b-a;
				});
				return x;
			},
	//设置css样式
	setStyle:function(){
		if(arguments.length === 3){
			// arguments[0].style.arguments[1] = arguments[2];  用点语法说明arguments[0]是style的属性，重点！！
			arguments[0].style[arguments[1]] = arguments[2]; 
		}else if(arguments.length === 2 ){
			for( var i in arguments[1]){
				arguments[0].style[i] = arguments[1][i];
			}
		}else{
			alert("三个参数 分别是:对象,属性,属性值\n两个参数 分别是:对象,{属性：属性值}");
		}
	},
	//增加class名
	addClass:function(){
		if(arguments.length==2){
			var name = arguments[0].className.split(" ");
			if(name.indexOf(arguments[1]) === -1){
				name.push(arguments[1]);
				arguments[0].className = name.join(" ");
			}
		}else{
			return alert("参一对象，参二是要添加的class名");
		}
		
	},
	//移除class名
	removeClass:function(){
		if(arguments.length==2){
			var name = arguments[0].className.split(" ");
			if(name.indexOf(arguments[1]) !== -1){
				name.splice(name.indexOf(arguments[1]),1);
				arguments[0].className = name.join(" ");
			}
		}else{
			return alert("参一对象，参二是要删除的class名");
		}
		
	},
	//随机数
	random:function(m,n){  // m -n 的随机数
		var num = Math.max(m,n) - Math.min(m,n);
		return Math.round(Math.random()*num+Math.min(m,n)); 
	},

















};