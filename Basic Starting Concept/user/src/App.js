import { useState } from "react";
import User from "./User";

// https://www.youtube.com/watch?v=EfdveVHHLnA&list=PL8p2I9GklV47ZpFC9sNHTXwJRgwwzdkNG&index=9
function App() {
  const [data, setData] = useState("");
  function handleData() {
    setData("hello");
  }

  return (
    <div className="App">
      <h1>Functional Component Method Testing - Part 1</h1>
      <button data-testid="btn1" onClick={handleData}>
        Update
      </button>
      <h1>{data}</h1>
    </div>
  );
}

export default App;
