console.log("Welcome to Tic Tac Toe");
let music = new Audio("music.mp3");


let audioTurn = new Audio("turning.mp3");
let gameover = new Audio("gameover.mp3");
let isgameover = false;

let turn = "X"
// function to change the turn
const changeTurn =()=>{
    return turn ==="X"?"0": "X"
 
}
// function to check for win 
const checkWin =()=>{
    let boxtext = document.getElementsByClassName('boxtext');
let wins =[
    [0,1,2,-26,5,0],
    [3,4,5,-26,15,0],
    [6,7,8,-26,25,0],
    [0,3,6,-37,15,90],
    [1,4,7,-26,15,90],
    [2,5,8,-16,15,90],
    [0,4,8,-26,15,45],
    [2,4,6,-26,15,135],
]
wins.forEach(e =>{
if((boxtext[e[0]].innerText === boxtext[e[1]].innerText) && (boxtext[e[2]].innerText === boxtext[e[1]].innerText) && boxtext[e[0]].innerText !== ''){
document.querySelector('.info').innerText = boxtext[e[0]].innerText + "Won"
isgameover = true;
gameover.play();
document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = "200px"
document.querySelector(".line").style.transform = `translate(${e[3]}vw,${e[4]}vw) rotate(${e[5]}deg)`;
document.querySelector(".line").style.width = "34vw";
}
})
}

// game logic
function playAudio(){
    music.src = 'music.mp3';
    music.autoplay = true;
    music.loop = true;
}

function pauseAudio(){
    music.pause(); 
}
  

 
let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(element=>{
    let boxtext = element.querySelector('.boxtext');
    element.addEventListener('click',()=>{
        if(boxtext.innerText === ''){
            boxtext.innerText = turn;
           turn = changeTurn();
            audioTurn.play();
            checkWin();
            if(!isgameover){
            document.getElementsByClassName("info")[0].innerText = "turn for"+turn;
            }
        }
    })
})

// add onclick listener to reset button
reset.addEventListener('click',()=>{
    let boxtexts = document.querySelectorAll('.boxtext'); 
    Array.from(boxtexts).forEach(element =>{
element.innerText =""
    });
    turn = "X";
    isgameover = false;
    document.querySelector(".line").style.width = "0vw";
    document.getElementsByClassName("info")[0].innerText = "turn for"+turn;
    document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = "0px"
  
    
})


