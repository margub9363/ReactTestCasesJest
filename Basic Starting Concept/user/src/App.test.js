import renderer from "react-test-renderer";
import User from "./User";

// test("renders learn react link", () => {
// render(<App />);
// const linkElement = screen.getByText(/learn react/i);
// expect(linkElement).toBeInTheDocument();
// });

test("It will test for Components Method", () => {
  let componentData = renderer.create(<User />).getInstance();
  console.log("componentData");
  console.log(componentData);
  let name = "Rahman";
  expect(componentData.testFunction(name)).toMatch("Hello! Rahman");
});
