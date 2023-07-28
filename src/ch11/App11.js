import { Navigate, Route, Routes } from "react-router";
import {
  About,
  Contact,
  Error,
  Events,
  History,
  Home,
  Location,
  Products,
  Services,
} from "./pages";

const App11 = () => (
  <div>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="about" element={<About />}>
        <Route path="services" element={<Services />} />
        <Route path="history" element={<History />} />
        <Route path="location" element={<Location />} />
      </Route>
      <Route path="events" element={<Events />} />
      <Route path="products" element={<Products />} />
      <Route path="contact" element={<Contact />} />
      <Route path="*" element={<Error />} />

      <Route path="services" element={<Navigate to="/about/services" />} />
    </Routes>
  </div>
);

export default App11;
