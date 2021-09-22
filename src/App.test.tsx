import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders spacestagram", () => {
  render(<App />);
  const linkElement = screen.getByText(/spacestagram/i);
  expect(linkElement).toBeInTheDocument();
});
