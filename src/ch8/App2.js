import { useEffect, useState } from "react";

const GitHubUser = ({ login }) => {
  const [data, setData] = useState();
  const [error, setError] = useState(); // JSON
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // 2.
    console.log("gkdl");
    if (!login) return;
    setLoading(true);
    fetch(`https://api.github.com/users/${login}`)
      .then((data) => data.json())
      .then(setData)
      .then(() => setLoading(false))
      .catch(setError);
  }, [login]);

  if (loading) return <h1>Loading...</h1>;
  if (error) return <pre>{JSON.stringify(error, null, 2)}</pre>;
  if (!data) return null; // 1. 렌더링

  return (
    // 3. 렌더링
    <div>
      <img src={data.avatar_url} alt={data.login} style={{ width: 200 }} />
      <div>
        <h1>{data.login}</h1>
        {data.name && <p>{data.name}</p>}
        {data.location && <p>{data.location}</p>}
      </div>
    </div>
  );
};

const App2 = () => {
  return (
    <>
      <GitHubUser login="moonhighway" />
    </>
  );
};

export default App2;
