import { render, screen } from "@testing-library/react";
import React from "react";
import Application2 from "./Application2";

describe("Test", () => {
  test("Application 2", () => {
    render(<Application2 />);

    // getByRole method
    const testByRole = screen.getByRole("textbox");
    expect(testByRole).toBeInTheDocument();

    // test h1
    const testHeader = screen.getByRole("heading", { level: 1 });
    expect(testHeader).toBeInTheDocument();

    // test h2
    const testHeader2 = screen.getByRole("heading", { level: 2 });
    expect(testHeader2).toBeInTheDocument();

    // getByLabelText method
    // const nameElement2 = screen.getByLabelText("Name", { selector: "input" });
    // expect(nameElement2).toBeInTheDocument();

    // get by test id
    const testByTestid = screen.getByTestId("testid");
    expect(testByTestid).toBeInTheDocument();

    // getby placeholder text
    const testByPlaceHolder = screen.getByPlaceholderText("enter name");
    expect(testByPlaceHolder).toBeInTheDocument();

    // getByText method
    const testByText = screen.getByText("saif ur rahman");
    expect(testByText).toBeInTheDocument();

    const testByText2 = screen.getByText("engineer at navneet");
    expect(testByText2).toBeInTheDocument();

    // getBydisplayvalue
    const testByDisplayValue = screen.getByDisplayValue("sohel");
    expect(testByDisplayValue).toBeInTheDocument();

    // get by alt text
    const testByAltText = screen.getByAltText("user image");
    expect(testByAltText).toBeInTheDocument();

    // get by span
    const testByTitle = screen.getByTitle("spantitle");
    expect(testByTitle).toBeInTheDocument();
  });
});
