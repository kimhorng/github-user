import { render, screen } from "@testing-library/react";
import App from "../App";

test("renders the landing page", () => {
  render(<App />);
  expect(
    screen.findByRole("textbox", {
      name: /Search User Name Or Company Name.../i,
    })
  );
});
