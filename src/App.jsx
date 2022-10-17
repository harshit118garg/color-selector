import React, { useState } from "react";
import "./App.css";
import Values from "values.js";
import SingleColor from "./SingleColor";

function App() {
  const [color, setcolor] = useState("");
  const [error, seterror] = useState(false);
  const [list, setlist] = useState(new Values("#f23456").all(5));

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      let colors = new Values(color).all(5);
      setlist(colors);
      seterror(false);
    } catch (e) {
      seterror(true);
    }
  };

  return (
    <div className="App">
      <header>
        <h1>Color Selector</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={color}
            onChange={(e) => setcolor(e.target.value)}
            placeholder="#f6f6f6"
            className={`${error ? "error" : null}`}
          />
          <button type="submit">Submit</button>
        </form>
      </header>

      <section className="colorSpace">
        <div className="colors">
          {list.map((color, index) => {
            return (
              <SingleColor
                key={index}
                {...color}
                index={index}
                hexColor={color.hex}
              />
            );
          })}
        </div>
      </section>
    </div>
  );
}

export default App;
