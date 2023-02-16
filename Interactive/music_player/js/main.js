const frame = document.querySelector("section");
const lists = frame.querySelectorAll("article");
const deg = 45; //각각의 article 요소가 회전할 각도
const len = lists.length-1; //순번이 0부터 시작하므로 전체 개수에서 1을 뺌
let i = 0;

//article의 개수만큼 반복
for(let el of lists){
    let pic = el.querySelector(".pic")
    //각 article 요소를 45도씩 회전하고 아래로 배치
    el.style.transform = `rotate(${deg*i}deg) translateY(-100vh)` ;
    pic.style.backgroundImage = `url(../img/member${i+1}.jpg)`;  //배경이미지 추가
    i++;

    //각 article요소 안쪽의 재생, 정지, 처음부터 재생 버튼을 변수에 저장
    let play = el.querySelector(".play");
    let pause = el.querySelector(".pause");
    let load = el.querySelector(".load");

    //play버튼 클릭시 
    play.addEventListener("click", e=>{        
        let isActive = e.currentTarget.closest("article").classList.contains("on");
        if(isActive){
        //paly버튼부터 .pic 요소까지 탐색한 뒤 클래스 on 추가하여 활성화
        e.currentTarget.closest("article").querySelector(".pic").classList.add("on");
        //play버튼부터 audio요소까지 탐색한 뒤 음악 재생
        e.currentTarget.closest("article").querySelector("audio").play();
        }
    });

    //pause 버튼 클릭 시
    pause.addEventListener("click", e=>{
        let isActive = e.currentTarget.closest("article").classList.contains("on");
        if(isActive){
        //pause버튼부터 .pic요소까지 탐색한 뒤 클래스 on 제거하여 비활성화
        e.currentTarget.closest("article").querySelector(".pic").classList.remove("on");
         //pause버튼부터 audio요소까지 탐색한 뒤 음악 정지
         e.currentTarget.closest("article").querySelector("audio").pause();
        }
    });

    //load버튼 클릭 시
    load.addEventListener("click", e=>{
        let isActive = e.currentTarget.closest("article").classList.contains("on");
        if(isActive){
        //load버튼부터 .pic요소까지 탐색한 뒤 클래스 on 추가하여 활성화
        e.currentTarget.closest("article").querySelector(".pic").classList.add("on");
        //load버튼부터 audio요소까지 탐색한 뒤 음악 다시 로드하고 재생
        e.currentTarget.closest("article").querySelector("audio").load();
        e.currentTarget.closest("article").querySelector("audio").play();
        }
    });

    const prev = document.querySelector(".btnPrev");
    const next = document.querySelector(".btnNext");
    let num = 0;

    //prev버튼을 클릭할 때마다
    prev.addEventListener("click", ()=>{
        //음악 초기화 함수 호출
        initMusic();
        //num값을 1씩 증가시켜서 아래 transform 연산식에 적용
        num++;
        frame.style.transform = `rotate(${deg * num}deg)`;

        //현재 패널의 순번이 0이면 다시 마지막 패널 순번으로 변경하고
        //그렇지 않으면 현재 패널 순번에서 1씩 감소시켜서 activation 함수 호출
        (active == 0) ? active = le : active--;
        activation(active, lists);
    });

    //next버튼을 클릭할 때마다
    next.addEventListener("click", ()=>{
        //음악 초기화 함수 호출
        initMusic();
        //num값을 1씩 감소시켜서 아래 transform 연산식에 적용
        num--;
        frame.style.transform = `rotate(${deg * num}deg)`;

        //현재 패널의 순번이 마지막 순번이면 다시 처음 패널 순번으로 변경하고
        //그렇지 않으면 현재 패널 순번에서 1씩 증가시켜서 activation 함수 호출
        (active == len) ? active = 0 : active++;
        activation(active, lists);
    });

    let active = 0;

    function activation(index, lists){
        for(let el of lists){
            el.classList.remove("on");
        }
        lists[index].classList.add("on");
    }

    const audio = frame.querySelectorAll("audio");

    //모든 오디오 요소를 반복하면서 정지시키고 .pic요소의 모션을 중지해서 초기화하는 함수
    function initMusic(){
        for(let el of audio){
            el.pause();
            el.load();
            el.parentElement.previousElementSibling.classList.remove("on");
        }
    }


    

//////////////////////////////////////////////////////
}
