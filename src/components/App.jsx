import React, { useState } from "react";

function App() {
  const [input, Setinput] = useState("");
  const [items, setItems] = useState([]);
  function handleChange(e) {
    Setinput(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    setItems((prevItems) => {
      return [...prevItems, input];
    });
    Setinput("");
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input onChange={handleChange} type="text" value={input} />
        <button onClick={handleSubmit}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {items.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
