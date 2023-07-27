import { useEffect } from "react";
import { useIterator } from "./hooks";

const RepoMenu = ({ repositories, onSelect }) => {
  const [{ name }, prev, next] = useIterator(repositories);

  useEffect(() => {
    if (!name) return;
    onSelect(name);
  },  [name]);

  return (
    <div>
      <button onClick={prev}>&lt;</button>
      <p>{name}</p>
      <button onClick={next}>&gt;</button>
    </div>
  );
};

export default RepoMenu;
