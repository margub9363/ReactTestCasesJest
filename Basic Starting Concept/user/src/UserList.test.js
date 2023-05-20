import { render, screen } from "@testing-library/react";
import UserList from "./UserList";

test("render one row per user", () => {
  const users = [
    { name: "rahman", email: "rahaman@gmail.com" },
    { name: "Tannu", email: "Tannu@gmail.com" },
  ];
  //   Render the componet
  const { container } = render(<UserList users={users} />);
  // Find all the rows in a table
  const rows = container.querySelectorAll("tbody tr");
  // Assertion: correct number of rows in the table
  expect(rows).toHaveLength(2);
  //   screen.logTestingPlaygroundURL(); //this will generate the link to testing playground
});

test("render the email and name of each user", () => {
  const users = [
    { name: "rahman", email: "rahaman@gmail.com" },
    { name: "Tannu", email: "Tannu@gmail.com" },
  ];
  render(<UserList users={users} />);

  for (let user of users) {
    const name = screen.getByRole("cell", { name: user.name });
    const email = screen.getByRole("cell", { name: user.email });
    expect(name).toBeInTheDocument();
    expect(email).toBeInTheDocument();
  }
});
