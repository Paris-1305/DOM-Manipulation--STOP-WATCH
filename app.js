//DOM by using 
const startStopButton=document.querySelector('#startStopButton');
const resetbutton=document.querySelector('#resetButton');
//Variables for time values
let hours=0;
let minutes=0;
let seconds=0;
//variables for leading zeros

let leadingseconds=0;
let leadingminutes=0;
let leadinghours=0;

//let interval=null;
let timerInterval=null;
let timerStatus="stopped";
//function for stopwatch
let displayTimer;
function stopWatch(){
    seconds++
    if(seconds/60===1){
        seconds=0;
        minutes++;
        if(minutes/60===1){
            minutes=0;
            hours++;
        }
    }
    if(seconds<10){
        leadingseconds="0"+ seconds.toString();
    }else{
        leadingseconds=seconds;
    }
    if(minutes<10){
        leadingminutes="0"+ minutes.toString();
    }else{
        leadingminutes=minutes;
    }
    if(hours<10){
        leadinghours="0"+ hours.toString();
    }else{
        leadinghours=hours;
    }
 displayTimer=document.getElementById('timer').innerText=leadinghours + ":" + leadingminutes + ":" + leadingseconds;
};

//window.setInterval(stopWatch,1000);
//AddEventListeners
startStopButton.addEventListener('click',function(){
    if(timerStatus==="stopped"){
        timerInterval=window.setInterval(stopWatch,1000);
        document.getElementById('startStopButton').innerHTML=`<i class="fa-solid fa-pause" id="pause"></i>`
        timerStatus="started";
    }else{
        window.clearInterval(timerInterval);
        document.getElementById('startStopButton').innerHTML=`<i class="fa-solid fa-play" id="play"></i>`;
        timerStatus="stopped";
    }
})

resetbutton.addEventListener('click',function(){
    window.clearInterval(timerInterval);
    seconds=0;
    minutes=0;
    hours=0;
    document.getElementById('timer').innerHTML="00:00:00";
})
