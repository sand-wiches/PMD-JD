 /*1.��ȡ��ǰbanner�ĸ߶�*/
var bannerH = document.querySelector(".jd_banner").offsetHeight;
   //bannerH = bannerH.offsetHeight;
console.log(bannerH);
/*��ȡheader������*/
var searchColor = document.querySelector(".jd_search");


/*ͷ���������jsЧ��*/
window.onscroll = function(){
	//��ͬ��������£�����������᷵��0,������������������
	 /*2.��ȡ��ǰ��Ļ����ʱ��banner��������Ļ�ľ���*/
	 var offsetTop =  document.body.scrollTop ;
		console.log(offsetTop);
     /*3.�������ֵ����ȡ͸���ȣ����ñ�����ɫ����ʽ*/
	 	var a = 0;
	 /*�жϣ������banner��û����ȫ ������Ļ����ô���б�Ҫ����͸���Ⱥ�����͸����*/
	 if (offsetTop < bannerH)
	 {
	    a = offsetTop / bannerH;
		 /*������ʽ*/
	    searchColor.style.backgroundColor="rgba(233,35,34," + a + ")";
	 }	
}

/*����ʱЧ��*/
timeback()
function timeback(){
		/*1.��ȡ����չʾʱ���span*/
	var span = document.querySelector(".jd_sk_time").querySelectorAll("span");
	 /*2.���ó�ʼ�ĵ���ʱʱ��,������Ϊ��λ*/
	var totalTime = 3700;
	 // console.log(totalTime);
	  /*3.������ʱ��*/
	var timerId = setInterval(function(){

			totalTime--;
			//console.log(totalTime);
	/*�жϵ���ʱʱ���Ƿ��Ѿ����*/
   if (totalTime < 0){ clearInterval(timerId); return;}

        /*�õ�ʣ��ʱ���е�  ʱ  ��  ��*/
        /*��ȡʱ*/			
		var hour =	Math.floor(totalTime/3600);
		/*��ȡ��*/
		var minute = Math.floor((totalTime%3600)/60);
		/*��ȡ��*/
		var second = Math.floor(totalTime%60);
		//console.log(hour);
		//console.log(minute);
		//console.log(second);
		/*��ֵ����ʱ����䵽span��  12*/
		span[0].innerHTML = Math.floor(hour/10);
		span[1].innerHTML = Math.floor(hour%10);

		span[3].innerHTML = Math.floor(minute/10);
		span[4].innerHTML = Math.floor(minute%10);

		span[6].innerHTML = Math.floor(second/10);
		span[7].innerHTML = Math.floor(second%10);
	},1000)
}

/*�ֲ�ͼ*/
bannerEffect();
function bannerEffect(){
	 /*1.�����޸��ֲ�ͼ��ҳ��ṹ
    * a.�ڿ�ʼλ�����ԭʼ�����һ��ͼƬ
    * b.�ڽ���λ�����ԭʼ�ĵ�һ��ͼƬ*/
    /*1.1.��ȡ�ֲ�ͼ�ṹ*/
	var banner = document.querySelector(".jd_banner");
	/*1.2.��ȡͼƬ����*/
	var imgBox = document.querySelector("ul:first-of-type");
	/*1.3.��ȡԭʼ�ĵ�һ��ͼƬ*/
	var first = imgBox.querySelector("li:first-of-type");
	/*1.4.��ȡԭʼ�����һ��ͼƬ*/
	var last = imgBox.querySelector("li:last-of-type");
	imgBox.appendChild(first.cloneNode(true));
	imgBox.insertBefore(last.cloneNode(true),imgBox.firstChild);

	/*2.���ö�Ӧ����ʽ*/
	/*2.1��ȡ����liԪ��*/
var lis = imgBox.querySelectorAll("li");
/*2.2 ��ȡliԪ�ص�����*/
var count = lis.length;
/*2.3.��ȡbanner�Ŀ��*/
var bannerWidth = document.querySelector(".jd_banner").offsetWidth;
/*2.4 ����ͼƬ���ӵĿ��*/
    var percent = imgBox.style.width = count*100 +"%";
	count = Number(count);//parseInt����parseFloat
	var transform = parseFloat(percent)/count;
	console.log(count);
	console.log(transform);
	ratio = 100/count;
	console.log(ratio);
/*2.5 ����ÿһ��li(ͼƬ)Ԫ�صĿ��*/
	for(var i=0;i<lis.length;i++){
            lis[i].style.width=ratio+"%";
        }
		/*4.4�������ö�λֵ*/
        imgBox.style.left=-transform +"%";

/*5.ʵ���Զ��ֲ�*/
		var index = 1;
		setInterval(function(){
			/*5.1 �任����*/
			index++;
			/*5.2.��ӹ���Ч��*/
			imgBox.style.transition="left .5s ease-in-out";
			/*5.3 ����ƫ��*/
			imgBox.style.left=(-index*transform) +"%";
			/*5.4 �ж��Ƿ����һ�ţ�����������¼���*/
			setTimeout(function(){
				//console.log("setTimeout");
				if(index == count-1){
				index = 1;
				console.log("setTimeout");
				/*���һ��Ԫ�ص�ĳ������֮ǰ��ӹ�����Ч������ô�������Ի�һֱ���ڣ��������Ҫ������Ҫ�������Ч��*/
                 /*�رչ���Ч��*/
				imgBox.style.transition="none";
				imgBox.style.left=(-index*transform) +"%";
			}
			//console.log("setTimeout");
			},1000)
		},2000)
}


