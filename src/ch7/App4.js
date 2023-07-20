import { memo, useCallback, useState } from "react";

const Cat = memo(({ name, meow }) => {
  console.log(`rendering ${name}`);
  meow();
  return <p>{name}</p>;
}, () => true); // true일때 한번만 렌더링

const App4 = () => {
  const [cats, setCats] = useState(["나비", "냥이", "욘"]);
  return (
    <>
      {cats.map((name, i) => (
        <Cat key={i} name={name} meow={() => console.log(`meow ${name}`)}/>
      ))}
      <button onClick={() => setCats([...cats, prompt("name a cat")])}>
        Add a cat
      </button>
    </>
  );
};

export default App4;
