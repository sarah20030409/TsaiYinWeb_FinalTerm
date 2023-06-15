// 抓抓按鈕class
// 左箭頭
var arrowLeftBTN = document.getElementsByClassName('arrowLeftBTN');
// 右箭頭
var arrowRightBTN = document.getElementsByClassName('arrowRightBTN');
// 圖片
var info_SingleImg = document.getElementsByClassName('info_SingleImg');

// 滾輪移動距離
var Scroll_LeftPX = 450;

// 全局宣告
var newLeft,newRight;

// 迴圈寫寫輪播
         // ======= 左 ========
    arrowLeftBTN[0].addEventListener('click',(e) => {
      // 用迴圈是為了讓每個class一起動
      for (var i = 0 ; i < 6 ; i++){

//parseInt(info_SingleImg[i].style.left) 失败的原因是
//，style.left 只能获取内联样式（即在HTML中直接指定的样式）
//，而无法获取通过CSS样式表或内部样式表定义的样式。
      
//getComputedStyle 函数只是用于获取元素的计算样式（computed style），而不能直接用于修改样式。
      var currentLeft = parseInt(getComputedStyle(info_SingleImg[i]).left);
      newLeft = currentLeft + Scroll_LeftPX; // 增加200px

      info_SingleImg[i].style.left = newLeft + 'px';
      }
      console.log(currentLeft);

      
      if(newLeft > -440){
        Scroll_LeftPX = 0;
       }
       else {
         Scroll_LeftPX = 450;
       }

      CheckScroll();
})



 // ======= 右 ========
 arrowRightBTN[0].addEventListener('click',(e) => {

  // 用迴圈是為了讓每個class一起動
  for (var i = 0 ; i < 6 ; i++){
  var currentLeft = parseInt(getComputedStyle(info_SingleImg[i]).left);
  newRight = currentLeft - Scroll_LeftPX; // 增加200px

  info_SingleImg[i].style.left = newRight + 'px';
  }
  console.log(currentLeft);

  
  if(newRight < -1000){
    Scroll_LeftPX = 0;
   }
   else {
     Scroll_LeftPX = 450;
   }
  CheckScroll();

})


function CheckScroll(){
  // if(newLeft > -440){
  //  Scroll_LeftPX = 0;
  // }
  // else if(newLeft < -450){
  //   Scroll_LeftPX = 450;
  // }
}