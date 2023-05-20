import { render, screen } from "@testing-library/react";
import user from "@testing-library/user-event";
import UserForm from "./UserForm";

test("It shows two input and a button", () => {
  // render the component
  render(<UserForm />);

  //   Manipulate the comnponent or find an element in it
  const inputs = screen.getAllByRole("textbox");
  const button = screen.getByRole("button");

  //   Assertion - make sure the component is doing

  //   What we expect to do
  expect(inputs).toHaveLength(2);
  //   console.log(button);
  expect(button).toBeInTheDocument();
});

test(" it call onUserAdd when the form is submitted", async () => {
  // Not the best implementation
  const argList = [];
  const callback = (...args) => {
    argList.push(args);
  };
  // Try to render my component
  render(<UserForm onUserAdd={callback} />);
  // Find the two inputs
  const [nameInput, emailInput] = screen.getAllByRole("textbox");
  // simulate typing in name
  await user.click(nameInput);
  await user.keyboard("Rahman");
  // simulate typing in email
  await user.click(emailInput);
  await user.keyboard("rahman@gmail.com");
  // Find the button
  const button = screen.getByRole("button");
  // Simulate clicking the button
  await user.click(button);
  // Asserion to make sure 'onUserAdd' is getting callend with email and name
  expect(argList).toHaveLength(1);
  expect(argList[0][0]).toEqual({ name: "Rahman", email: "rahman@gmail.com" });
});
