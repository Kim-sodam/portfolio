$(function () {
  // header scroll시 로고 색상 변경
  // 로고 검정색으로 변경
  $(window).on("scroll", function () {
    if ($(window).scrollTop()) {
      $("#header").addClass("active");
      $("#header .logo img").attr({
        src: "./logo/logo-black.png",
      });
      // 로고 흰색으로 변경
    } else {
      $("#header").removeClass("active");
      $("#header .logo img").attr({
        src: "./logo/logo-white.png",
      });
    }
  });

  //햄버거 메뉴 아이콘 클릭시 풀페이지로 all-menu 보임
  $("#all-menu").hide();
  $(".gnb-right-list i").click(function () {
    $("#all-menu").toggle();
  });
  $(".close-btn img").click(function () {
    $("#all-menu").css({
      display: "none",
    });
  });

  //화면 오른쪽 하단의 예약하기 버튼 클릭시 예약창 뜸
  $(".reservation-icon").click(function () {
    $(".form-layer").fadeIn();
    $(".reservation-form").fadeIn();
  });
  $(".reservation-form-top a").click(function () {
    $(".form-layer").fadeOut();
    $(".reservation-form").fadeOut();
  });

  //반응형 햄버거 메뉴 예약 버튼 클릭시 예약창 뜸
  $(".gnb-right .gnb-right-list li:first-child").click(function () {
    $(".form-layer").fadeIn();
    $(".reservation-form").fadeIn();
  });
  $(".reservation-form-top a").click(function () {
    $(".form-layer").fadeOut();
    $(".reservation-form").fadeOut();
  });

  /////////////////////////////////////////////////////
});
