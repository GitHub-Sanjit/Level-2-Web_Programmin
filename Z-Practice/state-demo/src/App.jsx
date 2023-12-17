import './App.css';

import Counter from './Counter';
import Dumbo from './Dumbo';
import ScoreKeeper from './ScoreKeeper';
import EmojiClicker from './EmojiClicker';

// function App() {
//   return <div>
//     <EmojiClicker></EmojiClicker>
//     {/* <ScoreKeeper></ScoreKeeper> */}
//     {/* <h1>State Demo!</h1> */}
//     {/* <Counter></Counter> */}
//     {/* <Dumbo></Dumbo> */}
//   </div>;
// }

function App() {
  return (
    <div>
      <ScoreKeeper numPlayer={10} target={3}></ScoreKeeper>
    </div>
  );
}

export default App;
