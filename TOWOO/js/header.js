jQuery(document).ready(function () {
  //header의 메뉴 텍스트에 마우스 커서 호버하면
  //header 로고 검정색, 배경색 흰색, 글자색 검정색으로 변경
  $(".depth2").hide(); // 하위 메뉴 기본적으로 숨김
  $(".gnb-wrap li")
    .mouseenter(function () {
      $(this).find(".depth2").show();
      $("header").mouseenter().css({
        color: "#2f2f2f",
        backgroundColor: "#fdfdfd",
      });
      $(".logo-wrap img").attr({
        src: "./logo/logo_b.png",
        alt: "TOWOO 로고",
      });
      // header의 메뉴 텍스트에 마우스 커서 아웃하면
      // header 원래대로 돌아옴
    })
    .mouseleave(function () {
      $(this).find(".depth2").hide();
      $("header").mouseleave().css({
        color: "#fdfdfd",
        backgroundColor: "transparent",
      });
      $(".logo-wrap img").attr({
        src: "./logo/logo_wh.png",
        alt: "TOWOO 로고",
      });
    });

  // 햄버거메뉴 클릭시 풀 페이지로 메뉴 전체 팝업됨
  // 닫기 버튼 누르면 풀 페이지 메뉴 사라짐
  $("#allmenu").hide();
  $("#header .gnb-right i").click(function () {
    $("#allmenu").toggle();
  });
  $(".close-btn a").click(function () {
    $("#allmenu").css({
      display: "none",
    });
  });

  // 햄버거 메뉴의 각 메뉴 클릭시 하위 메뉴(.menu02) 팝업 기능
  $(".menu02").hide();
  $(".menu01").click(function () {
    $(this).find(".menu02").toggle();
  });

  // 햄버거메뉴의 각 메뉴 클릭시 배경 색상 파란색으로 변경
  // 햄버거메뉴의 각 메뉴 클릭하면 하위 메뉴(.menu02) 그대로 고정
  $(".menu01 h2").click(function () {
    $(this).addClass("menu_color");
  });
  $(".menu01 h2").blur(function () {
    $(this).removeClass("menu_color");
  });

  //네비게이션 -> 페이지 스크롤시 흰색으로 색상 변경, 원래 자리로 돌아오면 원상태로 됨

  ///////////////////////////
});
