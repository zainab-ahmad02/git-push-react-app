import React from "react";

function App() {
  return (
    <div>
      <h1>Welcome to My React Website</h1>
      <p>This is my first React website.</p>

      <h2>About Me</h2>
      <p>I am learning React using Vite and VS Code.</p>

      <button onClick={() => alert("Hello! You clicked the button.")}>
        Click Me
      </button>
    </div>
  );
}

export default App;