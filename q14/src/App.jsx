import { useState } from "react";

function App() {
  const [text, setText] = useState("");

  return (
    <div
      style={{
        textAlign: "center",
        marginTop: "100px",
        fontFamily: "Arial"
      }}
    >
      <h1>Q14 - Controlled Input</h1>

      <input
        type="text"
        placeholder="Type something..."
        value={text}
        onChange={(e) => setText(e.target.value)}
        style={{
          padding: "10px",
          width: "250px",
          fontSize: "16px"
        }}
      />

      <h2>You typed: {text}</h2>
    </div>
  );
}

export default App;