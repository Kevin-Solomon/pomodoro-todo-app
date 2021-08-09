//start button
const startBtn = document.getElementById("start-btn");
const stopBtn = document.getElementById("stop-btn");
const timerEl = document.querySelector(".timer");
const todoItemsEl = document.querySelector(".todo-items");
const plusBtn = document.querySelector(".plus-button")
let inputText = document.querySelector("#user-input")
const ulEl = document.querySelector(".list")
startBtn.addEventListener('click', timer)
plusBtn.addEventListener('click', addTodo)
todoItemsEl.addEventListener('click', sike)
ulEl.contenteditable=true;

let currentTime = (25*60)-1;
function sike(e){
  console.log(e.target.className)
  if (e.target.className === "far fa-trash-alt"){
    console.log(e.target.parentElement.remove())
  }
  if (e.target.className === "far fa-check-circle"){
    console.log(e.target.parentElement.classList.add("completed"))
    // console.log(e.target.parentElement)
  }
  
  if (e.target.className === "far fa-edit"){
    console.log(e.target.parentElement.innerText)
    inputText.value = e.target.parentElement.innerText;
    e.target.parentElement.remove();
    // e.target.parentElement.innerText = inputText.value  ;
    
    // console.log(e.target.parentElement)
  }

}

function timer(){
  // let endTime = new Date().getTime() + 25*60*1000;
  // console.log(stop)
  let stop = setInterval(() => {

    if(currentTime === 0){
      console.log("sup")
      clearInterval(stop)
    }
    let seconds = currentTime%60;
    let minutesLeft = Math.floor(currentTime/60);
    // let seconds = secondsLeft%60;
    console.log(minutesLeft)
    console.log(seconds)
    seconds=seconds<10?`0${seconds}`:seconds;
    minutesLeft=minutesLeft<10?`0${minutesLeft}`:minutesLeft;
    timerEl.innerHTML=` ${minutesLeft}  :  ${seconds}`;
    currentTime--;
    // console.log(stop)
  },1000)
  
}  
function addTodo(event){
  console.log(inputText.value);
  let newLi = document.createElement("li");
  newLi.innerHTML = `${inputText.value} <i class="far fa-check-circle"></i><i class="far fa-trash-alt"></i> <i class="far fa-edit"></i>`;
  ulEl.appendChild(newLi)
  inputText.value=""
}
