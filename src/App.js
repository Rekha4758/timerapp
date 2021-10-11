import React,{useState} from 'react';
import Timer from './component/Timer';
import './App.css';



function App() {

  let currHour = new Date().getHours().toString();
  let currMinute = new Date().getMinutes().toString();
  let currSecond = new Date().getSeconds().toString();
  
const [Hour, setHour] = useState(currHour); 
const [Minute, setMinute] = useState(currMinute); 
const [Second, setSecond] = useState(currSecond); 

const startTimer = ()=>{
   currHour = new Date().getHours().toString();
   currMinute = new Date().getMinutes().toString();
   currSecond = new Date().getSeconds().toString();
  if( currHour.length === 1){
    currHour = '0' +  currHour;
  }
  if( currMinute.length === 1){
    currMinute = '0' +  currMinute;
  }
  if( currSecond.length === 1){
    currSecond = '0' +  currSecond;
  }
  setHour(currHour);
  setMinute(currMinute);
  setSecond(currSecond);
}
setInterval(startTimer,1000);
  return (
     <>
     <Timer hour={Hour} minute={Minute} second={Second}/>
     </>
    
  );
}

export default App;
