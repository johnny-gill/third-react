import ReactDOM from "react-dom/client";
import Star from "./Star";

test("renders a star", () => {
  const div = document.createElement("div");
  ReactDOM.createRoot(div).render(<Star />);
  expect(div.querySelector("svg")).toHaveAttribute("id", "hotdog");
});
