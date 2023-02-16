//메인 비주얼 페이지네이션
let swiper = new Swiper(".mySwiper", {
  pagination: {
    // 호출(pager) 여부
    el: ".swiper-pagination", // 버튼(불릿)을 담을 태그 설정
    clickable: true, // 불릿 클릭시 클릭한 불릿의 슬라이드로 이동
  },
  autoplay: {
    // 슬라이드 자동재생
    delay: 3000, // 자동재생 시간 설정
    disableOnInteraction: false, // 스와이프 후 자동재생: true: 스와이프 후 자동재생X, false: 스와이프 후 자동재생O
  },
  loop: true, // 슬라이드 반복 여부 -> 사용하지 않을 시 false로 변경하거나 loop 삭제
});
