import {  useRef, useImperativeHandle } from "react";

const ResultModal = ({ref, result, targetTime, remainingTime, onReset}) => {
  const dialogRef = useRef();
    useImperativeHandle(ref, () => ({
        Open: () => {
            dialogRef.current.showModal();
        }
    }));

    const userLost = remainingTime <= 0;
    const formattedRemainingTime = (remainingTime / 1000).toFixed(2);
    const score = Math.round((1 - (remainingTime / (targetTime * 1000))) * 100);

    return (
       <dialog ref={dialogRef} className="result-modal">
        {userLost ? <h2>You lost the game!</h2> : <h2>Your Score: {score}</h2>}

        <p>The target time was <strong>{targetTime}</strong> seconds.</p>
        {userLost ? <p>You didn't stop the timer in time!</p> : <p>You stopped the timer with <strong>{formattedRemainingTime}</strong> seconds remaining.</p>}
        <form method='dialog' onSubmit={onReset}>
          <button type='submit'>Close</button>
        </form>
       </dialog>
    );
}

export default ResultModal;