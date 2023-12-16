// https://www.youtube.com/watch?v=EfdveVHHLnA&list=PL8p2I9GklV47ZpFC9sNHTXwJRgwwzdkNG&index=9
import { useState } from "react";
function App() {
  const [data, setData] = useState();
  return (
    <div className="App">
      Test On Change Event with Input Text
      <br />
      <input
        type="text"
        value={data}
        onChange={(e) => setData(e.target.value)}
      ></input>
    </div>
  );
}

export default App;
