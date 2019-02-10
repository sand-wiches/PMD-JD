 /*1.获取当前banner的高度*/
var bannerH = document.querySelector(".jd_banner").offsetHeight;
   //bannerH = bannerH.offsetHeight;
console.log(bannerH);
/*获取header搜索块*/
var searchColor = document.querySelector(".jd_search");


/*头部搜索块的js效果*/
window.onscroll = function(){
	//不同的浏览器下，兼容性问题会返回0,所以两个条件都是用
	 /*2.获取当前屏幕滚动时，banner滚动出屏幕的距离*/
	 var offsetTop =  document.body.scrollTop ;
		console.log(offsetTop);
     /*3.计算比例值，获取透明度，设置背景颜色的样式*/
	 	var a = 0;
	 /*判断，如果当banner还没有完全 滚出屏幕，那么才有必要计算透明度和设置透明度*/
	 if (offsetTop < bannerH)
	 {
	    a = offsetTop / bannerH;
		 /*设置样式*/
	    searchColor.style.backgroundColor="rgba(233,35,34," + a + ")";
	 }	
}

/*倒计时效果*/
timeback()
function timeback(){
		/*1.获取用于展示时间的span*/
	var span = document.querySelector(".jd_sk_time").querySelectorAll("span");
	 /*2.设置初始的倒计时时间,以秒做为单位*/
	var totalTime = 3700;
	 // console.log(totalTime);
	  /*3.开启定时器*/
	var timerId = setInterval(function(){

			totalTime--;
			//console.log(totalTime);
	/*判断倒计时时间是否已经完成*/
   if (totalTime < 0){ clearInterval(timerId); return;}

        /*得到剩余时间中的  时  分  秒*/
        /*获取时*/			
		var hour =	Math.floor(totalTime/3600);
		/*获取分*/
		var minute = Math.floor((totalTime%3600)/60);
		/*获取秒*/
		var second = Math.floor(totalTime%60);
		//console.log(hour);
		//console.log(minute);
		//console.log(second);
		/*赋值，将时间填充到span中  12*/
		span[0].innerHTML = Math.floor(hour/10);
		span[1].innerHTML = Math.floor(hour%10);

		span[3].innerHTML = Math.floor(minute/10);
		span[4].innerHTML = Math.floor(minute%10);

		span[6].innerHTML = Math.floor(second/10);
		span[7].innerHTML = Math.floor(second%10);
	},1000)
}

/*轮播图*/
bannerEffect();
function bannerEffect(){
	 /*1.设置修改轮播图的页面结构
    * a.在开始位置添加原始的最后一张图片
    * b.在结束位置添加原始的第一张图片*/
    /*1.1.获取轮播图结构*/
	var banner = document.querySelector(".jd_banner");
	/*1.2.获取图片容器*/
	var imgBox = document.querySelector("ul:first-of-type");
	/*1.3.获取原始的第一张图片*/
	var first = imgBox.querySelector("li:first-of-type");
	/*1.4.获取原始的最后一张图片*/
	var last = imgBox.querySelector("li:last-of-type");
	imgBox.appendChild(first.cloneNode(true));
	imgBox.insertBefore(last.cloneNode(true),imgBox.firstChild);

	/*2.设置对应的样式*/
	/*2.1获取所有li元素*/
var lis = imgBox.querySelectorAll("li");
/*2.2 获取li元素的数量*/
var count = lis.length;
/*2.3.获取banner的宽度*/
var bannerWidth = document.querySelector(".jd_banner").offsetWidth;
/*2.4 设置图片盒子的宽度*/
    var percent = imgBox.style.width = count*100 +"%";
	count = Number(count);//parseInt或者parseFloat
	var transform = parseFloat(percent)/count;
	console.log(count);
	console.log(transform);
	ratio = 100/count;
	console.log(ratio);
/*2.5 设置每一个li(图片)元素的宽度*/
	for(var i=0;i<lis.length;i++){
            lis[i].style.width=ratio+"%";
        }
		/*4.4重新设置定位值*/
        imgBox.style.left=-transform +"%";

/*5.实现自动轮播*/
		var index = 1;
		setInterval(function(){
			/*5.1 变换索引*/
			index++;
			/*5.2.添加过渡效果*/
			imgBox.style.transition="left .5s ease-in-out";
			/*5.3 设置偏移*/
			imgBox.style.left=(-index*transform) +"%";
			/*5.4 判断是否到最后一张，如果是则重新计算*/
			setTimeout(function(){
				//console.log("setTimeout");
				if(index == count-1){
				index = 1;
				console.log("setTimeout");
				/*如果一个元素的某个属性之前添加过过渡效果，那么过渡属性会一直存在，如果不想要，则需要清除过渡效果*/
                 /*关闭过渡效果*/
				imgBox.style.transition="none";
				imgBox.style.left=(-index*transform) +"%";
			}
			//console.log("setTimeout");
			},1000)
		},2000)
}


