import './Box.css';

export default function Box({ isActive, toggle }) {
  return (
    <div
      className="Box"
      onClick={toggle}
      style={{ backgroundColor: isActive ? 'red' : 'black' }}
    ></div>
  );
}
