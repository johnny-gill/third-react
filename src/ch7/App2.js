import { useReducer, useState } from "react";
import Numbers from "./Numbers";

const App2 = () => {
  // const [checked, setChecked] = useState(false);

  // const toggle = () => {
  //   setChecked((checked) => !checked);
  // };

  const [checked, toggle] = useReducer(checked => !checked, false);

  return (
    <>
      <input type="checkbox" value={checked} onChange={toggle} />
      {checked ? "checked" : "not checked"}
      <Numbers />
    </>
  );
};

export default App2;
