import "./Button.css";

export default function Button({clickFunc, label = "Click Me"}) {
    return <button onClick={clickFunc} className="Button"> {label}</button>
}