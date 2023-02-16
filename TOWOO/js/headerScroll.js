// header 스크롤 이벤트
// 스크롤시 헤더 색상 변경
// 원래자리로 헤더 위치하면 다시 원래대로 돌아옴
const Header = document.querySelector('#header')

document.addEventListener('scroll', function(){
    let scroll = window.scrollY
    if(scroll > 50) {
        Header.classList.add('active')
    } else {
        Header.classList.remove('active')
    }
})