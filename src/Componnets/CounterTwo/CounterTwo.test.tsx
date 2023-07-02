import { render, screen } from "@testing-library/react";
import CounterTwo from "./CounterTwo";
// import { UserEvent } from "@testing-library/user-event/dist/types/setup/setup";
// import { userEvent } from "@testing-library/user-event/dist/types/setup";
import * as userEvent from "@testing-library/user-event";

describe("Test", () => {
  test("renders correctly", () => {
    render(<CounterTwo count={0} />);
    const result = screen.getByText("Counter Two");
    expect(result).toBeInTheDocument();
  });

  test("handlers are called", async () => {
    const eventHandle = userEvent.default.setup();
    const incrementHandler = jest.fn();
    const decrementHandler = jest.fn();
    render(
      <CounterTwo
        count={0}
        handleDecrement={incrementHandler}
        handleIncrement={decrementHandler}
      />
    );
    const incrementButton = screen.getByRole("button", {
      name: "Increment"
    });
    const decrementButton = screen.getByRole("button", {
      name: "Decrement"
    });
    await eventHandle.click(incrementButton);
    await eventHandle.click(decrementButton);

    expect(incrementHandler).toHaveBeenCalledTimes(1)
    expect(decrementHandler).toHaveBeenCalledTimes(1)
  });
});
