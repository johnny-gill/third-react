import ReactDOM from "react-dom/client";
import App from "./ch6/App";
import ColorProvider from "./ch6/ColorProvider";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ColorProvider>
    <App />
  </ColorProvider>
);
