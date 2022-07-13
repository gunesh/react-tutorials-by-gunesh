import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Button from "../../components/button";

test("Test theme button toggle", () => {
  render(<Button />);
  const buttonEl = screen.getByText(/Current theme/i);
  const buttonE2 = screen.getByTestId("my-button");
    
   // userEvent.click(buttonEl);
  // expect(buttonEl).toHaveTextContent(/dark/i);
   // console.log(buttonE2)

  userEvent.click(buttonE2 )
  console.log(expect(buttonE2))
  expect(buttonE2).toHaveTextContent(/dark/i);
});

// toHaveTextContent(/dark/i)