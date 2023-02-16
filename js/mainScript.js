//header
//페이지 스크롤시 헤더 색상 변경 및 폰트 색상 변경
let header = document.querySelector("#header");
let headerHeight = header.offsetHeight;

window.onscroll = function () {
  let windowTop = window.scrollY;
  if (windowTop >= headerHeight) {
    header.classList.add("drop");
  } else {
    header.classList.remove("drop");
  }
};

//header - 햄버거 메뉴
const toggleBtn = document.querySelector(".nav-right>a>i");
const popUp = document.querySelector(".popup-menu-wrap");
const xMark = document.querySelector(".popup-menu-header>a>i");
//햄버거 아이콘 클릭시 화면 전체에 메뉴 뜸
toggleBtn.addEventListener("click", (ev) => {
  ev.preventDefault();
  popUp.classList.toggle("active");
});
//닫기버튼 누르면 팝업 메뉴 닫힘
//ev와  ev.preventDefault();를 입력해야 햄버거 메뉴에서 메뉴 클릭시 해당 섹션으로 이동 후 닫기 버튼을 눌렀을 때 화면의 상단으로 이동되지 않는다!!!
xMark.addEventListener("click", (ev) => {
  ev.preventDefault();
  popUp.classList.remove("active");
});

//도넛 차트
//해당 부분에 도달하면 작동함
function ActiveOnVisible__init() {
  $(window).resize(ActiveOnVisible__initOffset);
  ActiveOnVisible__initOffset();

  $(window).scroll(ActiveOnVisible__checkAndActive);
  ActiveOnVisible__checkAndActive();
}

function ActiveOnVisible__initOffset() {
  $(".active-on-visible").each(function (index, node) {
    let $node = $(node);

    let offsetTop = $node.offset().top;
    $node.attr("data-active-on-visible-offsetTop", offsetTop);

    if (!$node.attr("data-active-on-visible-diff-y")) {
      $node.attr("data-active-on-visible-diff-y", "0");
    }

    if (!$node.attr("data-active-on-visible-delay")) {
      $node.attr("data-active-on-visible-delay", "0");
    }
  });

  ActiveOnVisible__checkAndActive();
}

function ActiveOnVisible__checkAndActive() {
  $(".active-on-visible:not(.actived)").each(function (index, node) {
    let $node = $(node);

    let offsetTop = $node.attr("data-active-on-visible-offsetTop") * 1;
    let diffY = parseInt($node.attr("data-active-on-visible-diff-y"));
    let delay = parseInt($node.attr("data-active-on-visible-delay"));

    let callbackFuncName = $node.attr(
      "data-active-on-visible-callback-func-name"
    );

    if ($(window).scrollTop() + $(window).height() + diffY > offsetTop) {
      $node.addClass("actived");

      setTimeout(function () {
        $node.addClass("active");
        if (window[callbackFuncName]) {
          window[callbackFuncName]($node);
        }
      }, delay);
    }
  });
}

$(function () {
  ActiveOnVisible__init();
});
/* 발견되면 활성화시키는 라이브러리 끝 */
function Circle__run() {
  $(".second.circle").each(function (index, node) {
    let perNum = $(node).attr("circleProgress");

    $(this)
      .circleProgress({
        value: perNum / 100,
        startAngle: 300,
        thickness: 10,
        fill: {
          gradient: ["#FFFACD", "#FFFACD"],
          gradientAngle: Math.PI / 2,
        },
        animation: {
          duration: 2200,
          easing: "swing",
        },
        lineCap: "butt",
        reverse: true,
      })
      .on("circle-animation-progress", function (event, progress) {
        $(this)
          .find(".circle-percent")
          .html(Math.round(perNum * progress) + "<i>%</i>");
      });
  });
}

//main-visual 텍스트 타이핑 효과
//원하는 텍스트 입력
//\n을 이용하여 줄바꾸기가 가능하다!
const content =
  "Web Publisher";
const text = document.querySelector(".main-text p");
let i = 0;

function typing() {
  let txt = content[i++];
  text.innerHTML += txt === "\n" ? "<br/>" : txt;
  if (i > content.length) {
    text.textContent = "";
    i = 0;
  }
}

setInterval(typing, 400);

//페이지 스크롤 이벤트(opacity가 변하면서 섹션별로 나타나는 효과)
const scrollTrigger = new ScrollTrigger.default();
scrollTrigger.add("[data-scroll]", {
  offset: {
    x: 0,
    y: 250,
  },
  toggle: {
    class: {
      //클래스 명. 클래스로 opacitiy 조절
      in: "animateIn",
      out: "animateOut",
    },
  },
  // trigger: {
  //   once: true
  // }
});

//섹션별 제목 애니메이션 스크롤 이벤트
let mainText1 = document.querySelector(".slide-wrap>h2");
window.addEventListener('scroll', function(){
  let value1 = window.scrollY;
  //console.log("scrollY", value1);
  if(value1>100) {
    mainText1.style.animation='slide 1s ease-out'; 
  }else {
    mainText1.style.animation='disappear 1s ease-out';
  }
});

let mainText2 = document.querySelector(".abilities>h2");
window.addEventListener('scroll', function(){
  let value2 = window.scrollY;
//console.log("scrollY", value2);
  if(value2>900) {
    mainText2.style.animation='slide-left 1s ease-out'; 
  }else {
    mainText2.style.animation='disappear-left 1s ease-out';
  }
});

let mainText3 = document.querySelector(".about-me>h2");
window.addEventListener('scroll', function(){
  let value3 = window.scrollY;
  //console.log("scrollY", value3);
  if(value3>1400) {
    mainText3.style.animation='slide 1s ease-out forwards'; 
  }else {
    mainText3.style.animation='disappear 1s ease-out';
  }
});