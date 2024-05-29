let gameSeq=[];
let userSeq=[];

let btns=["red","yellow","green","purple"];

let started=false;
let level=0;

let h2=document.querySelector("h2")

document.addEventListener("keypress",function(){
    if(started==false){
        console.log("game was started");
        started==true;

        levelUp();
 }
});

function gameFlash(btn){
  btn.classList.add("flash");
  setTimeout(() => {
    btn.classList.remove("flash")
  }, 250);
}

// user flash
function userFlash(btn){
  btn.classList.add("userflash");
  setTimeout(() => {
    btn.classList.remove("userflash")
  }, 250);
}


function levelUp(){
  userSeq=[];
    level++;
    h2.innerText=`level ${level}`;

    let randIdx=Math.floor(Math.random()*3);
        let randcolor=btns[randIdx];
        let randBtn=document.querySelector(`.${randcolor}`)
        gameSeq.push(randcolor);
        console.log(gameSeq);

gameFlash(randBtn);
}

function chekans(idx){
  if (userSeq[idx] === gameSeq[idx]){
    if (userSeq.length == gameSeq.length){
      setTimeout(levelUp,1000);
    }
  }else{
    h2.innerHTML = `Game over! your score was <b>${level}</b> <br> !Press any key to start`;
    document.querySelector("body").style.backgroundColor="red";
    setTimeout(function (){
      document.querySelector("body").style.backgroundColor="white";
    },150);
    reset();
  }
}


function btnpress(){
  // console.log(this)
  let btn=this;
  userFlash(btn);
  usercolor=btn.getAttribute("id");
  userSeq.push(usercolor);
  chekans(userSeq.length-1);
}

let allBtns=document.querySelectorAll(".btn");
for(btn of allBtns){
  btn.addEventListener("click",btnpress);
}

function reset(){
  started=false;
  gameSeq=[];
  userSeq=[];
  level=0;
}


