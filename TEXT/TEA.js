 //获取轮播图容器和图片元素
 var images = document.getElementsByClassName("carImg");
 //定义索引变量
 var ourrontIndex = 0;
 //切换图片的函数
 function showInmage(index){
     //隐藏所有图片
     for(var i=0;i<images.length;i++){
         images[i].style.opacity=0;
     }
     //显示指定索引的图片
     images[index].style.opacity=1;
 }
 //自动切换图片的函数
 function  autoSlide() {
     //切换到下一张图片
     ourrontIndex++;
     if (ourrontIndex>=images.length){
         ourrontIndex=0
     }
     //显示当前图片
     showInmage(ourrontIndex)
 }
 //定时触发自动切换时间
 setInterval(autoSlide,1000)