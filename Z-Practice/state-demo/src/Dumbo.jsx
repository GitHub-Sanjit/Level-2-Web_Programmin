import { useState } from 'react';

function generateGameBoard() {
  console.log('MAKING THE INITIAL GAME BOARD');
  return Array(5000);
}

export default function Dumbo() {
  const [board, setBoard] = useState(generateGameBoard);
  return (
    <button onClick={() => setBoard('hello!')}>
      Click me to Change state!
    </button>
  );
}
