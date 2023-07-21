import { useEffect, useState } from "react";

const loadJSON = (key) => key && JSON.parse(localStorage.getItem(key));
const saveJSON = (key, data) => localStorage.setItem(key, JSON.stringify(data));

const GitHubUser = ({ login }) => {
  const [data, setData] = useState(loadJSON(login));

  useEffect(() => {
    console.log("useEffect1");
    if (!data) return; // 2. 렌더링 완료(1) 후 데이터가 없으니 return
    if (data.login === login) return;
    console.log("useEffect11");
    const { name, avatar_url, location } = data; 
    saveJSON(login, { name, login, avatar_url, location }); // 6. 렌더링 완료(5) 후 저장
  }, [data]);

  useEffect(() => {
    console.log("useEffect2");
    if (!login) return;
    if (data && data.login === login) return;
    console.log("useEffect22");
    fetch(`https://api.github.com/users/${login}`) // 3. 렌더링 완료(1) 후 fetch
      .then((response) => response.json())
      .then(setData) // 4. state가 바뀌었으니 랜더링
      .catch(console.error);
  }, [login]); //7. 렌더링 완료(5) 후 같은 login이니 안탐

  if (data) { // 1. data 없으니 return null, 5. data 뿌려줌
    console.log(data);
    return <pre>{JSON.stringify(data, null, 2)}</pre>;
  }

  return null;
};

const App = () => {
  return (
    <>
      <GitHubUser login="moonhighway" />
    </>
  );
};

export default App;
