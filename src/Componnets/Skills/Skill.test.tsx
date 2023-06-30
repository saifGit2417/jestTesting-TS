import { render, screen } from "@testing-library/react";
import React from "react";
import Skills from "./Skills";

describe("Skill", () => {
  const skillArray = ["html", "css", "js", "react"];

  test("renders correctly", () => {
    render(<Skills skills={skillArray} />);
    const testList = screen.getByRole("list");
    expect(testList).toBeInTheDocument();
  });

  test("render a list of skills", () => {
    render(<Skills skills={skillArray} />);
    const testListItems = screen.getAllByRole("listitem");
    expect(testListItems).toHaveLength(skillArray.length);
  });

  test("test get by text methods ", () => {
    render(<Skills skills={skillArray} />);
    const normal = screen.getByText(/All Fields Are Mandatory/i);
    // const normal = screen.getByText(content =>
    //   content.startsWith("All Fields Are")
    // );
    expect(normal).toBeInTheDocument();
  });

  test("render login button", () => {
    render(<Skills skills={skillArray} />);
    const loginButtonTest = screen.getByRole("button", {
      name: "Log in"
    });
    expect(loginButtonTest).toBeInTheDocument();
  });

  test("start learning should not render", () => {
    render(<Skills skills={skillArray} />);
    const startLearningButton = screen.queryByRole("button", {
      name: "Start Learning"
    });
    expect(startLearningButton).not.toBeInTheDocument();
  });

  //   these test cases i have written for my practice to check my level of understanding from tutorial
  {
    test("start learning button should be there", () => {
      render(<Skills skills={skillArray} status={true} />);

      // this will check start learning button should  be there
      const loginPresent = screen.getByRole("button", {
        name: "Start Learning"
      });
      expect(loginPresent).toBeInTheDocument();

      // this will check login button should  not be there
      const loginFalse = screen.queryByRole("button", { name: "Log in" });
      expect(loginFalse).not.toBeInTheDocument();
    });

    test("login button should be there", () => {
      render(<Skills skills={skillArray} status={false} />);

      // this will check login button should be there
      const loginFalse = screen.getByRole("button", {
        name: "Log in"
      });
      expect(loginFalse).toBeInTheDocument();

      // this will check start learning button should not be there
      const loginPresent = screen.queryByRole("button", {
        name: "Start Learning"
      });
      expect(loginPresent).not.toBeInTheDocument();
    });
  }

  // to test async function which are going to be available after some time
  test("start learning button evantually appear", async () => {
    render(<Skills skills={skillArray} />);
    const startLearningDelay = await screen.findByRole(
      "button",
      {
        name: "Start Learning"
      },
      {
        timeout: 2000
      }
    );
    expect(startLearningDelay).toBeInTheDocument();
  });
});


