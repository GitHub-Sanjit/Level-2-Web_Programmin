// function handleClick() {
//   console.log('Clicked The Button!');
// }

// function handleHover() {
//   console.log('Hovered!');
// }

export default function Clicker({ buttonText, message }) {
  const handleClick = () => {
    alert(message);
  };
  return <button onClick={handleClick}>{buttonText}</button>;
}
