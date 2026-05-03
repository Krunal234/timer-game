import {  useRef, useImperativeHandle } from "react";

const ResultModal = ({ref, result, targetTime, remainingTime, onReset}) => {
  const dialogRef = useRef();
    useImperativeHandle(ref, () => ({
        Open: () => {
            dialogRef.current.showModal();
        }
    }));

    const formattedRemainingTime = (remainingTime / 1000).toFixed(2);

    return (
       <dialog ref={dialogRef} className="result-modal">
        <h2>You {remainingTime <= 0 ? 'lost' : 'won'}</h2>
        <p>The target time was <strong>{targetTime}</strong> seconds.</p>
        <p>You stopped the timer with <strong>{formattedRemainingTime}</strong> seconds remaining.</p>
        <form method='dialog' onSubmit={onReset}>
          <button type='submit'>Close</button>
        </form>
       </dialog>
    );
}

export default ResultModal;