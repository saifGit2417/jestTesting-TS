import { render, screen } from "@testing-library/react";
import Users from "./Users";
import { server } from "../../Mocks/Server";
import { rest } from "msw";
describe("Test", () => {
  test("renders correctly", () => {
    render(<Users />);
    const getHeadingToTest = screen.getByRole("heading", {
      name: "Users",
    });
    expect(getHeadingToTest).toBeInTheDocument();
  });

  test("render list of user", async () => {
    render(<Users />);
    const users = await screen.findAllByRole("listitem");
    expect(users).toHaveLength(3);
  });

  test("render error", async () => {
    server.use(
      rest.get(
        "https://jsonplaceholder.typicode.com/users",
        (req, res, ctx) => {
          return res(ctx.status(500));
        }
      )
    );
    render(<Users></Users>);
    const error = await screen.findByText("error occured");
    expect(error).toBeInTheDocument();
  });
});
