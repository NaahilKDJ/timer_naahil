import React, { useState, useEffect } from "react";
import { submitReactionTime } from "../services/timerService";

function Timer() {
    const [waiting, setWaiting] = useState(false);
    const [startTime, setStartTime] = useState(0);
    const [reactionTime, setReactionTime] = useState(null);
  
    const startTimer = () => {
      setWaiting(true);
      const randomDelay = Math.floor(Math.random() * 3000) + 2000; // un délai de 2 à 5 secondes
      setTimeout(() => {
        setStartTime(Date.now());
        setWaiting(false);
      }, randomDelay);
    };
  
    const stopTimer = () => {
        if(waiting){
            return;
        }   // Empeche de cliquer avant les lumières vertes
        const time = Date.now() - startTime;
        setReactionTime(time);
        submitReactionTime({ time });
    };
  
    return (
      <div className="timer">
        <h2>F1 Reaction Timer</h2>

        <button onClick={startTimer} disabled={waiting}>
          {waiting ? "Wait for Green..." : "Start"}
        </button>
          <br/>
        <button onClick={stopTimer} disabled={waiting || startTime === 0}>
          Stop
        </button>
        {reactionTime !== null && <p>Your reaction time: {reactionTime} ms</p>}
      </div>
    );
  }
  
export default Timer;
