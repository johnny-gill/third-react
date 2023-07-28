import { Route, Routes } from "react-router";
import { About, Contact, Error, Events, Home, Products } from "./pages";

const App11 = () => (
  <div>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/events" element={<Events />} />
      <Route path="/products" element={<Products />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/*" element={<Error />} />
    </Routes>
  </div>
);

export default App11;
