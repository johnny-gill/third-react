import { useCallback, useEffect, useMemo } from "react";
import { useState } from "react";

const App = () => {
  const [, forceRender] = useState();

  useEffect(() => {
    window.addEventListener("keydown", forceRender);
    return () => window.removeEventListener("keydown", forceRender);
  }, []);

  useEffect(() => {
    console.log("fresh render");
  });

  // ex1
  const word1 = "abc";
  useEffect(() => {
    console.log("ex1");
  }, [word1]);

  // ex2 -> 렌더링할때마다 새로운 instance가 된다
  const word2 = ["abc", "def"];
  useEffect(() => {
    console.log("ex2");
  }, [word2]);

  // ex3
  const word3 = useMemo(() => ["abc", "def"], []);
  useEffect(() => {
    console.log("ex3");
  }, [word3]);

  // ex4 -> 렌더링할때마다 새로운 함수가 된다.
  const fn = () => {
    console.log("hello");
    console.log("world");
  };

  useEffect(() => {
    console.log("ex4");
    fn();
  }, [fn]);

  // ex5
  const fn2 = useCallback(() => {
    console.log("hello");
    console.log("world");
  }, []);

  useEffect(() => {
    console.log("ex5");
    fn2();
  }, [fn2]);

  return <h1>Open the console</h1>;
};

export default App;
