$(function(){
  // console.log('DOMを読み込んだよ');

//header ul li aをクリックしたら
$('header ul li a').on('click',function(evt){
  // console.log('ナビクリック');
  evt.preventDefault();
  //リンク先の変数
  var targetName = $(this).attr('href');
  // console.log(targetName);

// targetNameの座標を保存する変数
var targetPos = $(targetName).offset().top;
// console.log(targetPos);
 $('html,body').animate({scrollTop:targetPos },1000);

});

});


