export default function Greeter({person="everyone",from="anonymous"}) {
    return (
      <div>
        <h1>Hi There, {person} !!!</h1>
            <h2>From { from }</h2>
      </div>
    );
}
