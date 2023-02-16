$(function(){
  //요소 변수 저장
  let $slideShow = $('.slide-wrap'),
      $slideGroup = $slideShow.find('.slide-area'),
      $slides = $slideGroup.find('.slide'),
      $nav = $slideShow.find('.slideNav'),
      $indicator = $slideShow.find('.slideIndicator'),
      slideCount = $slides.length,
      indicatorHTML = '',//인디케이터
      curIndex = 0, //제일 처음 보는 이미지 인덱스 순서 의미
      timer;

  //HTML 요소 배치 및 삽입
  //각 슬라이드의 위치 결정(가로 배열)
  //인디케이터 생성
  $slides.each(function(i){
    $(this).css({
      left:100 * i + '%'
    });
    indicatorHTML +='<a href="#">'+ (i+1) +'</a>' //복합대입연산자 사용해야 함,이미지 개수에 맞춰서 인디케이터 생성됨
  });
  $indicator.html(indicatorHTML);



  //슬라이드 이동 함수
  function gotoSlide(index){
    $slideGroup.animate({left:-100 * index +'%'});
    curIndex = index;

    updateNav();
  }

  //슬라이드 상태에 따라 탐색 및 표시를 업데이트하는 함수
  function updateNav(){
    let $navPrev = $nav.find('.prev');
    let $navNext = $nav.find('.next'); 

  //처음 슬라이드 curIndex = 0이 되어지면, prev버튼 안보이도록
  //마지막 슬라이드 curIndex = slideCount-1이 되어지면, next버튼 안보이도록

  //만약 첫번째 슬라이드라면 prev탐색 해제
  if(curIndex === 0){
    $navPrev.addClass('disabled');
  }else{
    $navPrev.removeClass('disabled');
  }

  //만약 마지막 슬라이드라면 next탐색 해제
  if(curIndex === slideCount-1){
    $navNext.addClass('disabled');
  }else{
    $navNext.removeClass('disabled');
  }

  //현재슬라이드 표시 해제
  $indicator.find('a').removeClass('active').eq(curIndex).addClass('active');

}

  //내비게이션(좌우버튼) 클릭시 해당 슬라이드 표시
  $nav.find('a').click(function(e){
    e.preventDefault();
    if($(this).hasClass('prev')){
      gotoSlide(curIndex - 1)
    }else{
      gotoSlide(curIndex + 1)
    }
  });


  //인디케이터 클릭시 해당 슬라이드 표시
  $indicator.find('a').click(function(e){
    e.preventDefault();
    if(!$(this).hasClass('active')){
      gotoSlide($(this).index());
    }
  });

  //자동 슬라이드 함수
  function startTimer(){
    timer = setInterval(function(){
      let lastIndex = (curIndex + 1) % slideCount;
      gotoSlide(lastIndex);
    }, 3000)
  }

  //자동 슬라이드 중지
  function stopTimer(){
    clearInterval(timer);
  }
  
  //자동 슬라이드 시작
  startTimer();//함수 호출!

  //마우스 호버시 타이머 함수 중지, 마우스 벗어나면 타이머함수 실행
  $slideShow.mouseenter(function(){
    stopTimer();
  }).mouseleave(function(){
    startTimer();
  });


  //첫 번째 슬라이드 표시
  gotoSlide(curIndex);

//////////////////////////////////////////////////////////////  
});