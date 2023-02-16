// header와 footer의 반복 작업을 줄이기 위해 
// header.html 파일과 footer.html 파일을 따로 만들어
// 각 html 파일에 연결하여 작업할 수 있도록 함
// 아래는 header와 footer 연결!!!
$(function () {
  $("#header").load("header.html");
  $("#footer").load("footer.html");
  /* id 지정을 통해서도 가능
    $("#header").load("header.html #navbar") */

////////////////////////////////////
});
