//유저가 값을 입력한다.
//+ 버튼을 클릭하면, 할일이 추가된다.
//delete 버튼을 누르면, 할일이 삭제된다.
//check 버튼을 누르면, 할일이 끝나면서 해당 문장의 가운데에 줄이 그어진다.
    //1. check 버튼을 클릭하는 순간 true를 false로 변경
    //2. true이면 끝난 것으로 간주하고 문장의 가운데에 줄 그어짐
    //3. false이면 안 끝난 것으로 간주하고 그대로 놔두기
//진행중 끝남 탭을 누르면, 언더바가 이동한다.
//끝남 탭은 끝난 아이템만, 진행중 탭은 진행중인 아이템만 나타낸다.
//전체 탭을 누르면 다시 전체 아이템이 표시되는 곳으로 돌아온다.

let taskInput = document.getElementById("task-input");//인풋 창
let addButton = document.getElementById("add-button");//+버튼
let tabs = document.querySelectorAll(".task-tabs div");//tabs 
let taskList = [];//Todo List 목록
let mode ="all";//mode의 첫 셋팅값을 all로 해야 UI 표현됨
let filterList = [];
//let dateInfo = document.getElementById("date-info");//날짜

//+버튼 클릭 이벤트
//버튼에 클릭 이벤트 주는 첫번째 방법 addEventListener
//버튼에 클릭 이벤트 주는 두번째 방법 onclick="함수명()"
addButton.addEventListener("click", addTask);

//tabs
for(let i=1;i<tabs.length;i++){
    tabs[i].addEventListener("click", function(event){filter(event)});
}

function addTask() {
   // task는 객체! 객체는 필요한 관련 정보를 하나로 묶어주는 것
   let task = {
        id: randomIDGenerate(), //데이터에 아이디 값 부여하는 것은 중요! 마치 주민번호와 같은 역할을 한다!
        taskContent: taskInput.value,
        isComplete:false //끝나지 않았다 알려주는 용도
   }
   taskList.push(task);
   console.log(taskList);
   render(); //render함수 선언!
}

//데이터 입력
function render() {
    let list = [];
    if(mode == "all") {
        list = taskList;
    }else if(mode == "ongoing" || mode == "done") {
        list = filterList;
    }

    let resultHTML = "";
    for(let i = 0; i < list.length; i++) {
        if(list[i].isComplete == true) {
            resultHTML += `<div class="task">
            <div class="task-done">${list[i].taskContent}</div>
            <div>
                <button onclick="toggleComplete('${list[i].id}')">Check</button>
                <button onclick="deleteTask('${list[i].id}')">Delete</button>
            </div>
        </div>`;
        } else {
            resultHTML += `<div class="task">
            <div>${list[i].taskContent}</div>
            <div>
                <button onclick="toggleComplete('${list[i].id}')">Check</button>
                <button onclick="deleteTask('${list[i].id}')">Delete</button>
            </div>
        </div>`;
        }   
    }

    document.getElementById("task-board").innerHTML = resultHTML;
}

//check버튼
function toggleComplete(id) {
    console.log("id:",id);
    for(let i=0; i<taskList.length; i++) {
        if(taskList[i].id == id){
            //check버튼 클릭 시 가운데 줄 그어짐
            //!는 NOT을 의미 (스위치처럼 왔다 갔다 하는 경우 사용하면 됨)
            taskList[i].isComplete = !taskList[i].isComplete;
            break;
        }
    }
    render();
    console.log(taskList);
}

//delete버튼
//배열의 인덱스 값을 찾아서 삭제
function deleteTask(id) {
    console.log("삭제", id);
    for(let i=0;i<taskList.length;i++){
        if(taskList[i].id == id){
            taskList.splice(i,1)
            break;
        }
    }
    render();//UI 업데이트!
}

//tabs
function filter(event) {
    mode = event.target.id;
    filterList = [];

    //바 움직이는 효과
    //document.getElementById()
    if(mode == "all") {
        render();
    }else if(mode == "ongoing"){
        for(let i=0;i<taskList.length;i++){
            if(taskList[i].isComplete == false) {
                filterList.push(taskList[i])
            }
        }
        render();
    }else if (mode == "done") {
        for(let i=0;i<taskList.length;i++){
            if(taskList[i].isComplete == true) {
                filterList.push(taskList[i]);
            }
        }
        render();
    }
  
}


//id값 랜덤으로 겹치지 않게 생성해주는 함수
function randomIDGenerate() {
    //return은 함수의 결과물이 다른 곳에서 쓰일 때 사용
    return '__' + Math.random().toString(36).substr(2, 9);
}

//enter키 눌렀을 때 등록되도록 하기
document.querySelector('#task-input').addEventListener('keyup', (e)=>{
    if (e.keyCode === 13) {
        document.getElementById("add-button").click();
  }  
});

// //날짜 표시
// let today = new Date(); //현재 날짜 및 시간
// let year = today.getFullYear(); // 년도
// let month = today.getMonth() + 1;  // 월
// let date = today.getDate();  // 날짜

// document.write(year+'.'+month+'.'+date);



