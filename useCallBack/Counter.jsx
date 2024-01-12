import React, { useRef, useState } from "react";

const Counter = () => {
  const [seconds, setSeconds] = useState(0);
  const renders = useRef(0)
  const timerId = useRef();
  
  const startTimer = () => {
    timerId.current = setInterval(()=>{
        renders.current++;
        setSeconds(prev => prev +1);
    },1000);
  }

  const stopTimer = () => {
    clearInterval(timerId.current);
    timerId.current = 0;
  }

  const resetTimer =() => {
    stopTimer();
    if(seconds) {
        renders.current++;
        setSeconds(0);
    }
  }

  return <div>
    <div>{renders.current}</div>
    
    <button onClick={startTimer}>start</button>
    <button onClick={stopTimer}>stop</button>
    <button onClick={resetTimer}>reset</button>
    
    <div>{seconds}</div>
  </div>;
};

export default Counter;
