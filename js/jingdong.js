 window.onload = function (){
    var imgList = document.getElementById("imgList");
    // console.log("imgList");
    var imgArr =  document.getElementById("imgList").getElementsByTagName("li");
    // console.log(imgArr.length);
    imgList.style.width = 590*imgArr.length + "px";
    var navDiv = document.getElementById("navDiv");
    // console.log("navDiv");
    var outer = document.getElementById("outer");
    navDiv.style.left = (outer.offsetWidth - navDiv.offsetWidth)/1.5 + "px";
    // 上面是设置导航按钮居中
    var index = 0;
    var allLi = document.getElementById("navDiv").getElementsByTagName("li");
    // console.log(allLi.length);
    allLi[index].style.backgroundColor = "black";
    // 上面几行代码是设置默认第一张导航按钮颜色
    for( var i = 0 ; i < allLi.length;i++){
      // alert(i)
      allLi[i].num= i;
      allLi[i].onclick = function(){
        // alert(this.num);
        clearTimeout(timer);
         index =  this.num;
        //  imgList.style.left = -590*index + "px";
        setA();
        move(imgList , "left" ,-590*index ,200 ,function(){
          autoChange();
        })
         
      }
}
autoChange();
function setA(){
    if(index >= imgArr.length-1){

          index = 0;
          imgList.style.left = 0*index + "px";
      };
    for(var i=0; i<allLi.length ; i++){
        allLi[i].style.backgroundColor ="";
    };
    allLi[index].style.backgroundColor = "red";
  };
  var timer;
  function autoChange(){
    timer = setInterval(function(){
      index++;
      index %= imgArr.length;
      move(imgList , "left" , -590*index , 30 , function(){
        setA();
       });
     },2000);
  };

}
