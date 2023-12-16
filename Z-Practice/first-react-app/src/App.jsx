import Slots from './Slots';
import './App.css';
import ShoppingList from './ShoppingList';
import PropertyList from './PropertyList';
import Clicker from './Clicker';
import Form from './Form';

// const data = [
//   { id: 1, item: 'eggs', quantity: 12, completed: false },
//   { id: 2, item: 'milk', quantity: 1, completed: true },
//   { id: 3, item: 'chicken breasts', quantity: 4, completed: false },
//   { id: 4, item: 'carrots', quantity: 6, completed: true },
//   { id: 5, item: 'apple', quantity: 8, completed: false },
// ];

// const properties = [
//   { id: 129031, name: 'Desert Yurt', rating: 4.9, price: 150 },
//   { id: 129331, name: 'Lone Mountain Cabin', rating: 4.8, price: 250 },
//   { id: 129032, name: 'Cactus Retreat', rating: 4.75, price: 300 },
//   { id: 129033, name: 'Redwood Treehopper Escape', rating: 4.9, price: 120 },
//   { id: 129034, name: 'Oceanic Condo', rating: 4.7, price: 140 },
//   { id: 129035, name: 'Gold Miner Campground', rating: 4.69, price: 96 },
// ];

function App() {
  return (
    <div>
      {/* <Form></Form> */}
      <Clicker message="HI!!!!" buttonText="Please Click Me"></Clicker>
      <Clicker
        message="Please Stop Clicking Me!"
        buttonText="do not Click"
      ></Clicker>
      {/* <PropertyList properties={properties}></PropertyList> */}
      {/* <ShoppingList items={data}></ShoppingList> */}
      {/* <Slots val1="🍌" val2="🍌" val3="🍌" />
      <Slots val1="🍌" val2="🍌f" val3="🍌" /> */}
    </div>
  );
}

export default App;
