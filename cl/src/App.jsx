import React, { useState } from "react";

function App() {
  const [sm, sd] = useState();
  async function fu() {
    let re = await fetch("http://localhost:1000/read", {
      headers: {
        "Content-Type": "application/json",
      },
    });
    re = await re.json();

    sd(re);
  }
  return (
    <div>
      <button onClick={fu}>click</button>
      {sm &&
        sm.map((ee) => {
          return <h1>{ee.name}</h1>;
        })}
    </div>
  );
}

export default App;
