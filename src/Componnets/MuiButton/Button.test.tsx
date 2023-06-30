import { fireEvent, render } from "@testing-library/react";
import React from "react";
import Button from "./Button";

describe("Button group test", () => {
  test("renders correctly with default text", () => {
    const { getByText } = render(
      <Button buttonText="" functionText="" typeOfAction={""} />
    );
    const button = getByText(/default text/i);
    expect(button).toBeInTheDocument();
  });

  test("when all props are passed", () => {
    const { getByText } = render(
      <Button
        buttonText="alert button"
        functionText="alert"
        typeOfAction={alert}
      />
    );
    const button = getByText(/alert button/i);
    expect(button).toBeInTheDocument();
  });

  test("calls the provided function when clicked", () => {
    const mockAction = jest.fn();
    const { getByText } = render(
      <Button
        buttonText="Click me"
        typeOfAction={mockAction}
        functionText="Action performed"
      />
    );
    const button = getByText("Click me");
    fireEvent.click(button);
    expect(mockAction).toHaveBeenCalledWith("Action performed");
  });
});
