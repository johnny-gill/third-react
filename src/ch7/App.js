import { useEffect, useState } from "react";

const App = () => {
  const [val, setVal] = useState("");
  const [phrase, setPhrase] = useState("example phase");

  const createPhrase = () => {
    setPhrase(val);
    setVal("");
  };

  useEffect(() => {
    console.log("initial useEffect");
  }, []);

  useEffect(() => {
    console.log(`val : ${val}`);
  }, [val]);

  useEffect(() => {
    console.log(`phrase : ${phrase}`);
  }, [phrase]);

  useEffect(() => {
    console.log("change val or phrase");
  }, [val, phrase]);

  return (
    <>
      <label>Favorite phrase : </label>
      <input
        value={val}
        placeholder={phrase}
        onChange={(e) => setVal(e.target.value)}
      />
      <button onClick={createPhrase}>send</button>
    </>
  );
};

export default App;
