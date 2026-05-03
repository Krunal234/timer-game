import { useRef, useState } from "react";
import ResultModal from "./ResultModal";

const TimerChallenge = ({ title, targetTime }) => {

  const timer = useRef();
  const dialogRef = useRef();

  const [timeRemaining, setTimeRemaining] = useState(targetTime * 1000);

  const timerActive = timeRemaining < targetTime * 1000 && timeRemaining > 0;

  if (timeRemaining <= 0) {
    clearInterval(timer.current);
    // setTimeRemaining(targetTime * 1000);
    dialogRef.current.Open();
  }

  const handleStartTimer = () => {
    timer.current = setInterval(() => {
      setTimeRemaining((prev) => prev - 10);
    }, 10);
  }

  const handleStopTimer = () => {
    clearInterval(timer.current);
    // setTimeRemaining(targetTime * 1000);
    dialogRef.current.Open();
  }

  const handleResetTimer = () => {
    // clearInterval(timer.current);
    setTimeRemaining(targetTime * 1000);
  };

  return (<>
    <ResultModal onReset={handleResetTimer} ref={dialogRef} result={timeRemaining <= 0 ? 'lost' : 'won'} targetTime={targetTime} remainingTime={timeRemaining} />
    <section className="challenge">
      <h2>{title}</h2>
      {/* {timerExpired && <p>You lost</p>} */}
      <p className="challenge-time">{targetTime} second{targetTime !== 1 ? 's' : ''}</p>
      <p>
        <button onClick={timerActive ? handleStopTimer : handleStartTimer}>
          {timerActive ? 'Stop' : 'Start'} Challenge
        </button>
      </p>
      <p className={timerActive ? 'active' : ''}>
        {timerActive ? 'Timer is running...' : 'Timer is Inactive'}
      </p>
    </section>
  </>
  );
};

export default TimerChallenge;