import { useState } from "react";
const TimerChallenge = ({ title, targetTime }) => {
    const [timerActive, setTimerActive] = useState(false);
    const [timerExpired, setTimerExpired] = useState(false);
    const handleStartTimer = () => {
        setTimerExpired(false);
        setTimerActive(true);
        setTimeout(() => {
            setTimerExpired(true);
            setTimerActive(false);
        }, targetTime * 1000);
    }
  return (
    <section className="challenge">
      <h2>{title}</h2>
      {timerExpired && <p>You lost</p>}
      <p className="challenge-time">{targetTime} second{targetTime !== 1 ? 's' : ''}</p>
      <p>
        <button onClick={handleStartTimer}>
            {timerActive ? 'Stop' : 'Start'} Challenge
        </button>
      </p>
      <p className={timerActive ? 'active' : ''}>
        {timerActive ? 'Timer is running...' : 'Timer is Inactive'}
      </p>
    </section>
  );
};

export default TimerChallenge;