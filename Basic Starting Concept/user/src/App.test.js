import { fireEvent, render, screen } from "@testing-library/react";
import App from "./App";
import "@testing-library/jest-dom";

test("This Test is used for testing Methods of Functional Component", () => {
  render(<App />);
  const btn = screen.getByTestId("btn1");
  fireEvent.click(btn);
  expect(screen.getByText("hello")).toBeInTheDocument();
});
