// header scroll event javascript
// header scroll하면 active class의 효과 적용
// header 제자리로 오면 원상태로 복구됨

const Header = document.querySelector('#header')

document.addEventListener('scroll', function(){
    let scroll = window.scrollY
    if(scroll > 50) {
        Header.classList.add('active');
        //Header.innerHTML = '스크롤을 내리면 나옵니다.'
    } else {
        Header.classList.remove('active');
        Header.classList.add('deactive');
        //Header.innerHTML = '헤더 내용입니다.'
    }
})