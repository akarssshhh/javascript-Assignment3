import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div
      style={{
        textAlign: "center",
        marginTop: "100px",
        fontFamily: "Arial"
      }}
    >
      <h1>Q13 - Counter</h1>

      <h2>Count: {count}</h2>

      <button onClick={() => setCount(count - 1)}>
        −
      </button>

      <button
        onClick={() => setCount(count + 1)}
        style={{ margin: "0 10px" }}
      >
        +
      </button>

      <button onClick={() => setCount(0)}>
        Reset
      </button>
    </div>
  );
}

export default App;
