import { useState } from "react";
import User from "./User";
import "@testing-library/jest-dom";
import handleOtherMethod from "./helper";

// https://www.youtube.com/watch?v=EfdveVHHLnA&list=PL8p2I9GklV47ZpFC9sNHTXwJRgwwzdkNG&index=9
function App() {
  const [data, setData] = useState("");
  function handleData() {
    setData("hello");
  }

  // Now we are going to extract this method in a separate file
  // const handleOtherMethod = () => {
  //   console.log("Hi");
  // };

  return (
    <div className="App">
      <h1>Functional Component Method Testing - Part 1</h1>
      <button data-testid="btn1" onClick={handleData}>
        Update
      </button>
      <h1>{data}</h1>

      <button onClick={handleOtherMethod}>Print</button>
    </div>
  );
}

export default App;

test("Method Testing Case2", () => {
  expect(handleOtherMethod()).toMatch("hi");
});
