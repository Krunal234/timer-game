import { useRef, useState } from "react";

export default function Player() {
  const playerNameRef = useRef();
  const [playerName, setPlayerName] = useState(null);

  const HandleSubmit = () => {
    setPlayerName(playerNameRef.current.value);
  }
  return (
    <section id="player">
      <h2>Welcome {playerName ?? "Guest"}</h2>
      <p>
        <input ref={playerNameRef} type="text" />
        <button onClick={HandleSubmit}>Set Name</button>
      </p>
    </section>
  );
}
