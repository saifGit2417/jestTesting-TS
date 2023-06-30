// import { render, screen } from "@testing-library/react";
// import React from "react";
// import { Application } from "./Application";

// describe("application testing", () => {
//   test("component render correctly", () => {
//     render(<Application />);
//     // const expectedResult=screen.getByTestId("inputFied")
//     ////we can check presence of react component by passing some test id to it
//     // const expectedResult = screen.getByLabelText("Name");
//     //we can check presence of react component by passing label of the input field

//     //  to test by getByRole()
//     const expectedResult = screen.getByRole("textbox", {
//       name: "Name"
//     });
//     expect(expectedResult).toBeInTheDocument();

//     const jobLocation = screen.getByRole("combobox");
//     expect(jobLocation).toBeInTheDocument();

//     const termsElement = screen.getByRole("checkbox");
//     expect(termsElement).toBeInTheDocument();

//     const submitButton = screen.getByRole("button");
//     //if button is disabled then this test case will fail
//     expect(submitButton).toBeInTheDocument();

//     // if more than one getByRole componnets are there , then we can provide an object with key:value with key of name  and value of label name
//     // below is example for that to test two elements having same getByRole() method
//     const bioRoleButton = screen.getByRole("textbox", {
//       name: "Bio"
//     });
//     expect(bioRoleButton).toBeInTheDocument();

//     // if you want to check h1-h6 then have to specify its level
//     const checkH1 = screen.getByRole("heading", {
//       level: 1,
//       name: "Job Application"
//     });
//     expect(checkH1).toBeInTheDocument();
//     const checkH2 = screen.getByRole("heading", {
//       level: 2,
//       name: "Section 1"
//     });
//     expect(checkH2).toBeInTheDocument();

//     const termsElement2 = screen.getByLabelText(
//       "I agree to terms and conditions"
//     );
//     expect(termsElement2).toBeInTheDocument();

//     // acces test element by placeholder of element
//     const textLabelTest = screen.getByPlaceholderText("placeholderText");
//     expect(textLabelTest).toBeInTheDocument();

//     const textLabelTest1 = screen.getByPlaceholderText("placeholderTextTest");
//     expect(textLabelTest1).toBeInTheDocument();
//   });

//   // const paragraphTest = screen.getByText("formfill");
//   // expect(paragraphTest).toBeInTheDocument();

//   // const getByValueTest = screen.getByDisplayValue(/saif/i);
//   // expect(getByValueTest).toBeInTheDocument();

//   // const testByAltText = screen.getByAltText('ntt image');
//   // expect(testByAltText).toBeInTheDocument();

//   // const testCloseSpan=screen.getByTitle('close')
//   // expect(screen.getByTitle('close')).toBeInTheDocument()

//   const testByTestId = screen.getByTestId("custom-element");
//   expect(testByTestId).toBeInTheDocument();

// const customElement = screen.getByTestId("custom-element");
// expect(customElement).toBeInTheDocument();
// });

// export {};

import { render, screen } from "@testing-library/react";
import { Application } from "./Application";

describe("Application", () => {
  test("renders", () => {
    render(<Application />);

    /** getByRole */

    const pageHeading = screen.getByRole("heading", {
      level: 1
    });
    expect(pageHeading).toBeInTheDocument();

    const sectionHeading = screen.getByRole("heading", {
      level: 2
    });
    expect(sectionHeading).toBeInTheDocument();

    const nameElement = screen.getByRole("textbox", {
      name: "Name"
    });
    expect(nameElement).toBeInTheDocument();

    const bioElement = screen.getByRole("textbox", {
      name: "Bio"
    });
    expect(bioElement).toBeInTheDocument();

    const jobLocationElement = screen.getByRole("combobox");
    expect(jobLocationElement).toBeInTheDocument();

    const termsElement = screen.getByRole("checkbox");
    expect(termsElement).toBeInTheDocument();

    const submitElement = screen.getByRole("button");
    expect(submitElement).toBeInTheDocument();
    expect(submitElement).toBeDisabled();

    /** getByLabelText */

    const nameElement2 = screen.getByLabelText("Name", { selector: "input" });
    expect(nameElement2).toBeInTheDocument();

    const termsElement2 = screen.getByLabelText(
      "I agree to the terms and conditions"
    );
    expect(termsElement2).toBeInTheDocument();

    /** getByPlaceholderText */

    const nameElement3 = screen.getByPlaceholderText("Fullname");
    expect(nameElement3).toBeInTheDocument();

    /** getByText */

    const paragraphElement = screen.getByText("All fields are mandatory");
    expect(paragraphElement).toBeInTheDocument();

    /** getByDisplayValue */

    const nameElement4 = screen.getByDisplayValue("Vishwas");
    expect(nameElement4).toBeInTheDocument();

    /** getByAltText */

    const imageElement = screen.getByAltText("a person with a laptop");
    expect(imageElement).toBeInTheDocument();

    /** getByTitle */

    const closeElement = screen.getByTitle("close");
    expect(closeElement).toBeInTheDocument();

    /** getByTestId */

    const customElement = screen.getByTestId("custom-element");
    expect(customElement).toBeInTheDocument();
  });
});
