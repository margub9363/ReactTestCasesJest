import { render, screen } from "@testing-library/react";
import user from "@testing-library/user-event";
import UserForm from "./UserForm";

test("It shows two input and a button", () => {
  // render the component
  render(<UserForm />);

  //   Manipulate the comnponent or find an element in it
  const inputs = screen.getAllByRole("textbox");
  const button = screen.getAllByRole("button");

  //   Assertion - make sure the component is doing

  //   What we expect to do
  expect(inputs).toHaveLength(2);
  //   console.log(button);
  // expect(button).toBeInTheDocument(); this is not passing now  don't know why
  expect(button).toHaveLength(1);
});
