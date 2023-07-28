import { render } from "@testing-library/react";
import Star from "./Star";
import "@testing-library/jest-dom/extend-expect";
import ReactDOM from "react-dom/client";
// import Star from "./Star";

// test("renders a star", async () => {
//   const div = document.createElement("div");
//   ReactDOM.createRoot(div).render(<Star />);
//   expect(div.querySelector("svg")).toHaveAttribute("id", "hotdog");
// });


test("renders an h1", () => {
  const { getByText } = render(<Star />);
  const h1 = getByText(/Great Star/);
  expect(h1).toHaveTextContent("Great Sstar");
});
