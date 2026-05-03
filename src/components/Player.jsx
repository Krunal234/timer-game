import { useState } from "react";

export default function Player() {
  const [playerName, setPlayerName] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const userInputHandler = (username) => {
    setSubmitted(false);
    setPlayerName(username);
  }
  const HandleSubmit = () => {
    setSubmitted(true);
  }
  return (
    <section id="player">
      <h2>Welcome {submitted ? playerName : "Guest"}</h2>
      <p>
        <input type="text" onChange={(e) => userInputHandler(e.target.value)} value={playerName} />
        <button onClick={HandleSubmit}>Set Name</button>
      </p>
    </section>
  );
}
