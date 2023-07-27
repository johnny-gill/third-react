import { useState } from "react";
// import GitHubUser from "./GitHubUser";
import SearchForm from "./SearchForm";

const App6 = () => {
  console.log("App");
  const [login, setLogin] = useState("moontahoe");
  return (
    <>
      {/* <GitHubUser login={login} /> */}
      <SearchForm onSearch={setLogin} />
    </>
  );
};

export default App6;
