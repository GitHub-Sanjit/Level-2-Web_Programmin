import './App.css';

import Counter from './Counter';
import Dumbo from './Dumbo';
import ScoreKeeper from './ScoreKeeper';
import EmojiClicker from './EmojiClicker';
// import Die from './Die';
import Dice from './Dice';
import LuckyN from './LuckyN';
import { sum } from './utils';
import Box from './Box';
import BoxGrid from './BoxGrid';

// function lessThan4(dice) {
//   return sum(dice) < 4;
// }

// function allSameValue(dice) {
//   return dice.every((v) => v === dice[0]);
// }

function App() {
  return (
    <div>
      <BoxGrid></BoxGrid>
      {/* <LuckyN winCheck={lessThan4} title='Roll Less than 4'></LuckyN>
      <LuckyN winCheck={allSameValue} numDice={3} title='Roll the same number'></LuckyN> */}
    </div>
  );
}

export default App;
