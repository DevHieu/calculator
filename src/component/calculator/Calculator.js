import React, { useState } from "react";
import "./Calculator.css";

function Calculator() {
  const [result, setResult] = useState("");

  const handleClick = (e) => {
    setResult(result.concat(e.target.name));
  };
  const acClick = () => {
    setResult("");
  };
  const handleDel = () => {
    setResult(result.slice(0, result.length - 1));
  };

  const handleResolve = () => {
    try {
      setResult(eval(result));
    } catch (err) {
      setResult("Error");
    }
  };

  return (
    <div className="App">
      <div className="calc">
        <input className="inputValue" type="text" value={result} />
        <button className="acButton" onClick={acClick}>
          AC
        </button>
        <button className="delButton" onClick={handleDel}>
          DEL
        </button>
        <button className="calcButton" onClick={handleClick} name="+">
          +
        </button>
        <button className="right" onClick={handleClick} name="7">
          7
        </button>
        <button className="right" onClick={handleClick} name="8">
          8
        </button>
        <button className="bottom" onClick={handleClick} name="9">
          9
        </button>
        <button className="calcButton" onClick={handleClick} name="-">
          -
        </button>
        <button className="right bottom" onClick={handleClick} name="4">
          4
        </button>
        <button className="right bottom" onClick={handleClick} name="5">
          5
        </button>
        <button className="bottom" onClick={handleClick} name="6">
          6
        </button>
        <button className="calcButton" onClick={handleClick} name="*">
          *
        </button>
        <button className="right bottom" onClick={handleClick} name="1">
          1
        </button>
        <button className="right bottom" onClick={handleClick} name="2">
          2
        </button>
        <button className="bottom" onClick={handleClick} name="3">
          3
        </button>
        <button className="calcButton" onClick={handleClick} name="/">
          /
        </button>
        <button className="right" onClick={handleClick} name="0">
          0
        </button>
        <button className="right" onClick={handleClick} name=".">
          .
        </button>
        <button onClick={handleClick} name="%">
          %
        </button>
        <button className="equalButton" onClick={handleResolve}>
          =
        </button>
      </div>
    </div>
  );
}

export default Calculator;
