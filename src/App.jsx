import { useState } from "react";
import "./App.css";

function App() {
  const [input, setInput] = useState("");
  const [res, setRes] = useState("");

  const handleClick = (e) => {
    setInput((prevInput) => {
      if (prevInput[0] === "0") return (prevInput = e.target.value);
      return prevInput + e.target.value;
    });
  };

  const handleResult = () => {
    if(input === '')setRes('Error')
    else setRes(eval(input));
  };

  const handleClear = () => {
    setRes("");
    setInput("");
  };

  return (
    <div className="calculator">
      <h1>React calculator</h1>
      <input
        type="text"
        value={input}
        onChange={(e) => {
          if (e.target.value === "") setRes("");
          setInput(e.target.value);
        }}
      />
      {res && (
        <div >{res}</div>
      )}

      <div>
        <button value="7" onClick={(e) => handleClick(e)}>
          7
        </button>
        <button value="8" onClick={(e) => handleClick(e)}>
          8
        </button>
        <button value="9" onClick={(e) => handleClick(e)}>
          9
        </button>
        <button value="+" onClick={(e) => handleClick(e)}>
          +
        </button>
        <br />
        <button value="4" onClick={(e) => handleClick(e)}>
          4
        </button>
        <button value="5" onClick={(e) => handleClick(e)}>
          5
        </button>
        <button value="6" onClick={(e) => handleClick(e)}>
          6
        </button>
        <button value="-" onClick={(e) => handleClick(e)}>
          -
        </button>
        <br />
        <button value="1" onClick={(e) => handleClick(e)}>
          1
        </button>
        <button value="2" onClick={(e) => handleClick(e)}>
          2
        </button>
        <button value="3" onClick={(e) => handleClick(e)}>
          3
        </button>
        <button value="*" onClick={(e) => handleClick(e)}>
          *
        </button>
        <br />
        <button value="clear" onClick={() => handleClear()}>
          C
        </button>
        <button value="0" onClick={(e) => handleClick(e)}>
          0
        </button>
        <button value="=" onClick={handleResult}>
          =
        </button>
        <button value="/" onClick={(e) => handleClick(e)}>
          /
        </button>
      </div>
    </div>
  );
}

export default App;
