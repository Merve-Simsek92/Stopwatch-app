let k=00;
let s=00;
let m=00;
const result=document.querySelector(".result");

result.innerHTML="00:00:00";


const startBtn=document.querySelector(".start");
const stopBtn=document.querySelector(".stop")
const resetBtn=document.querySelector(".reset")

startBtn.addEventListener("click",timer)
    

function timer(){

    x=setInterval(stopWatch,10)
}

function stopWatch(){
    k++;
    if(k==100){s++;
   k=0;}
    k=k<10  ? "0"+ k : k ;
   if(s==60){
    m++;
    s=0;
   }
   s= s<10  ? String(s).padStart(2,"0") : s;
   m=m<10  ? String(m).padStart(2,"0") : m ;
    result.innerText=`${m }:${s}:${k}`
}

    
  function stopbutton(){
      clearInterval(x)
  } 
      
    
resetBtn.addEventListener("click",()=>{

s=0;
k=0;
m=0;
result.innerText="00:00:00"
stopbutton();

})  
   
stopBtn.addEventListener("click",stopbutton)

