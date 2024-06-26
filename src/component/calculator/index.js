import { useState } from "react";
export default function Calci() {
  const [input, setInput] = useState();
  const [result, setResult] = useState(0);
  
  const styling = {
    color: "white",
    backgroundColor: "black",
    margin: "10px 20px 20px 10px",
  };

  function addInput(e) {
    e.preventDefault();
    setResult(result + Number(input));
  }

  function subInput(e) {
    e.preventDefault();
    setResult(result - Number(input));
  }

  function mulInput(e) {
    e.preventDefault();
    setResult(result * Number(input));
  }

  function divInput(e) {
    e.preventDefault();
    Number(input) === 0
      ? window.alert("Division with zero not possible!")
      : setResult(result / Number(input));
  }

  return (
    <>
      <h2>Simple Calculator</h2>
      <input
        type="number"
        value={input}
        placeholder="Type a number"
        pattern="[0-9]"
        onChange={(e) => setInput(e.target.value)}
      />
      <div>
        <button
          onClick={addInput}
          style={styling}
          disabled={input ? (false) : (true)}
        >
          Add
        </button>
        <button
          onClick={subInput}
          style={styling}
          disabled={input ? false : true}
        >
          Subtract
        </button>
        <button
          onClick={mulInput}
          style={styling}
          disabled={input ? false : true}
        >
          Multiply
        </button>
        <button
          onClick={divInput}
          style={styling}
          disabled={input ? false : true}
        >
          Divide
        </button>
      </div>
      <div>
        <button onClick={() => setInput(0)} style={styling}>
          Reset input
        </button>
        <button onClick={() => setResult(0)} style={styling}>
          Reset Result
        </button>
      </div>
      <div>
        <p value={result}>
          <b>Result is </b>
          <span>{result}</span>          
        </p>
      </div>
    </>
  );
}
