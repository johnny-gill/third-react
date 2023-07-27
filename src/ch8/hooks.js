import { useState } from "react";

export const useIterator = (items = [], initialValue = 0) => {
  const [i, setIndex] = useState(initialValue);
  const prev = () => (i === 0 ? setIndex(items.length - 1) : setIndex(i - 1));
  const next = () => (i === items.length - 1 ? setIndex(0) : setIndex(i + 1));
  const item = items[i];

  return [item || items[0], prev, next];
};
