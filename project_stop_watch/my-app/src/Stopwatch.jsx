import React, { useState, useEffect, useRef } from "react";

function Stopwatch() {
  const [isRunning, setIsRunning] = useState(false);
  const [elapsedTime, setElapsedTime] = useState(0);
  const intervalIDRef = useRef(null);
  const startTimeRef = useRef(0);

  useEffect(() => {
    if (isRunning){
        intervalIDRef.current = setInterval(() => {
            setElapsedTime(Date.now() - startTimeRef.current);
        }, 10);
    }
    return () => {
        clearInterval(intervalIDRef.current);
    }
  }, [isRunning]);

  function start() {
    setIsRunning(true);
    startTimeRef.current = Date.now() - elapsedTime;
  }

  function stop() {
    setIsRunning(false);
  }

  function rest() {
    setElapsedTime(0);
    setIsRunning(false);
  }

  function formatTime() {
    const date = new Date(elapsedTime);
    const mm = date.getUTCMinutes().toString().padStart(2, "0");
    const ss = date.getUTCSeconds().toString().padStart(2, "0");
    const ms = Math.floor(date.getUTCMilliseconds() / 10).toString().padStart(2, "0");
    return `${mm}:${ss}:${ms}`;
  }

  const [timer, setTimer] = useState(0);
  return (
    <div className="Stopwatch">
      <div className="display">{formatTime()}</div>
      <div className="controls">
        <button onClick={start} className="start-button">Start</button>
        <button onClick={stop} className="stop-button">Stop</button>
        <button onClick={rest} className="reset-button">Reset</button>
      </div>
    </div>
  );
}

export default Stopwatch;
