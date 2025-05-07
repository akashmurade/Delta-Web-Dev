import { useState } from "react";
import { generateNRandom, sum } from "./helper";
import Ticket from "./Ticket";

export default function Lottery({ n = 3, winningSum = 15 }) {
  let [ticket, setTicket] = useState(generateNRandom(n));
  let isWon = sum(ticket) === winningSum;

  let buyTicket = () => {
    setTicket(generateNRandom(n));
  };

  return (
    <div>
      <h1>Lottery Game</h1>
      {isWon && <h2>Congratulations! You have won the lottery.</h2>}

      <Ticket ticket={ticket} />

      <button onClick={buyTicket}>Get New Ticket</button>
    </div>
  );
}
