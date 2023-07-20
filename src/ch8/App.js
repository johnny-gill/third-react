import { useEffect, useState } from "react";

const GitHubUser = ({ id }) => {
  const [data, setData] = useState();

  useEffect(() => {
    console.log("useEffect");
    fetch(`https://api.github.com/users/${id}`)
      .then((response) => response.json())
      .then(setData)
      .catch(console.error);
  }, [id]);

  if (data) {
    console.log(data);
    return <pre>{JSON.stringify(data, null, 2)}</pre>;
  }
  console.log(data);
  return null;
};

const App = () => {
  return (
    <>
      <GitHubUser id="moonhighway" />
    </>
  );
};

export default App;
