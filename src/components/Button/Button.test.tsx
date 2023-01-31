import { screen, render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Button from "./Button";

describe("Given a Button component", () => {
  describe("When rendered", () => {
    test("Then it should show a button with the text 'Select all'", () => {
      render(<Button selectAll={() => {}} />);

      const button = screen.getByRole("button", {
        name: "Select all",
      });

      expect(button).toBeInTheDocument();
    });
  });

  describe("When it receives a function and the user clicks on the button", () => {
    test("Then it should invoke the received function", () => {
      const action = jest.fn();

      render(<Button selectAll={action} />);
      const button = screen.getByRole("button", { name: /select all/i });
      userEvent.click(button);

      expect(action).toHaveBeenCalled();
    });
  });
});
