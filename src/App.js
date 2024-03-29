import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  function handleClick(num) {
    setCount(count + num);
  }
  return (
    <div id="container">
      <div id="navbar">counter.js </div>
      <div id="counter">
        <h1> {count}</h1>
        <button onClick={() => handleClick(1)}> Increment </button>
        <button onClick={() => handleClick(2)}> Increment x2 </button>
      </div>
    </div>
  );
}

export default App;
