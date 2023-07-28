export const timesTwo = (val) => val * 2;
export const sum = (a, b) => a + b;

export const order = (items) => {
  const total = items.reduce((price, item) => price + item.price, 0);
  return { items, total };
};
