import { render, screen } from "../../test-utils";
import { MuiMode } from "./mui-mode";
import { AppProviders } from "../../Providers/app-provider";

describe("muimode", () => {
  test("render text correctly", () => {
    // this component need appprovider wrapper to work correctly hence this is done
    render(<MuiMode />);
    const headingElement = screen.getByRole("heading");
    expect(headingElement).toHaveTextContent("dark mode");
  });
});
