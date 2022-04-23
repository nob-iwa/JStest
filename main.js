const start = document.getElementById('start');
const stop = document.getElementById('stop');
const reset = document.getElementById('reset');
let timeElement = document.getElementById('time');

let time=0;
let intervalId=null;

function formatTime(time){
  let min=Math.floor(time/60000);
  let tsec=(Math.floor(time/10000))%60;
  let sec=Math.floor((time%10000)/1000);
  let msec=Math.floor((time%1000)/100);
  
  return min+":"+tsec+":"+sec+":"+msec;
}

start.addEventListener('mousedown',(event)=>{
  if(intervalId !== null){return;}
  intervalId=setInterval(()=>{
    time += 100;
    timeElement.innerHTML=formatTime(time);
  },100);
  start.setAttribute("disabled",true);
  stop.removeAttribute("disabled");
  reset.setAttribute("disabled",true);
});

stop.addEventListener('mousedown',(event)=>{
  clearInterval(intervalId);
  intervalId=null;
  start.removeAttribute("disabled");
  stop.setAttribute("disabled",true);
  reset.removeAttribute("disabled")
});

reset.addEventListener('mousedown',(event)=>{
  time=0;
  timeElement.innerHTML="0:0:0:0";
  start.removeAttribute("disabled");
  stop.removeAttribute("disabled");
  reset.setAttribute("disabled",true);
})