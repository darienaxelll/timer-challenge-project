import { useState, useRef } from "react";

const TimerChallenge = ({ title, targetTime }) => {
  const timer = useRef();

  const [timerStarted, setTimerStarted] = useState(false);
  const [timerExpire, setTimerExpire] = useState(false);

  const handleStart = () => {
    timer.current = setTimeout(() => {
      setTimerExpire(true);
    }, targetTime * 1000);

    setTimerStarted(true);
  };

  const handleStop = () => {
    clearTimeout(timer.current);
  };

  return (
    <section className="challenge">
      <h2>{title}</h2>
      {timerExpire && <p>You lost!</p>}
      <p className="challenge-time">
        {targetTime} second{targetTime > 1 ? "s" : ""}
      </p>
      <p>
        <button onClick={timerStarted ? handleStop : handleStart}>
          {timerStarted ? "Stop Timer" : "Start Timer"}
        </button>
      </p>
      <p className={timerStarted ? "active" : undefined}>
        {timerStarted ? " Time is running ..." : "Timer Inactive"}
      </p>
    </section>
  );
};

export default TimerChallenge;
