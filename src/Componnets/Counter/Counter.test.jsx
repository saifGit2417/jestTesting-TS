import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Counter from "./Counter";
// export userevent like this instead of importing user out of /user-event
import * as userEvent from "@testing-library/user-event";

describe("Counter", () => {
  test("renders correctly", () => {
    render(<Counter />);
    const renderCorrectly = screen.getByRole("button", {
      name: /Increment/i
    });
    expect(renderCorrectly).toBeInTheDocument();

    const headingRender = screen.getByRole("heading", {
      level: 1
    });
    expect(headingRender).toBeInTheDocument();
  });

  test("render a count of 0 ", () => {
    render(<Counter />);
    const count0 = screen.getByRole("heading");
    expect(count0).toHaveTextContent("0");
  });

  test("render a count of 1 after clicking the increment button", async () => {
    // use userevent instead of user
    // and extract setup out of userevent like above
    const user = userEvent.default.setup();
    render(<Counter />);
    const incrementButton = screen.getByRole("button", {
      name: /Increment/i
    });
    await user.click(incrementButton);
    const countElement = screen.getByRole("heading");
    expect(countElement).toHaveTextContent("1");
  });

  test("render a count of 2 after clicking the increment button twice", async () => {
    const user = userEvent.default.setup();
    render(<Counter />);
    const incrementButton2 = screen.getByRole("button", {
      name: /Increment/i
    });
    await user.click(incrementButton2);
    await user.click(incrementButton2);
    await user.click(incrementButton2);
    const countElement2 = screen.getByRole("heading");
    expect(countElement2).toHaveTextContent("3");
  });
});
