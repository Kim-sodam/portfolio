// header 스크롤시 drop 클래스 실행됨
// header 제자리로 돌아올 경우 undrop 클래스 실행됨
let header = document.querySelector("#header");
let headerHeight = header.offsetHeight;

window.onscroll = function () {
    let windowTop = window.scrollY;
    if (windowTop >= headerHeight) {
        header.classList.add("drop");
        header.classList.remove("undrop");
    } else {
        header.classList.remove("drop");
        header.classList.add("undrop");
    }
}