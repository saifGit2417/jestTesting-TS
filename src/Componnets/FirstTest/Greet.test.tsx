import { render, screen } from "@testing-library/react";
import Greet from "./Greet";

describe("Greet GroupTest", () => {
  test("renders correctly", () => {
    render(<Greet name="asif" />);
    const expectedResult = screen.getByText(
      /Hello asif ,have a great React learning curve./i
    );
    expect(expectedResult).toBeInTheDocument();
  });

  // we can also it instead of test
  it("when name prop is not passed", () => {
    render(<Greet />);
    const expectedResult = screen.getByText(
      /Hello Guest User ,have a great React learning curve./i
    );
    expect(expectedResult).toBeInTheDocument();
  });
});
