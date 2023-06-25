import { render, screen } from "@testing-library/react";
import Greet from "./Greet";

test("Greet renders correctly", () => {
  render(<Greet name="asif" />);
  const expectedResult = screen.getByText(
    /Hello asif ,have a great React learning curve./i
  );
  expect(expectedResult).toBeInTheDocument();
});

test("when name prop is not passed", () => {
  render(<Greet />);
  const expectedResult = screen.getByText(
    /Hello Guest User ,have a great React learning curve./i
  );
  expect(expectedResult).toBeInTheDocument();
});

export {};
