import { order, sum, timesTwo } from "./functions";

test("Multiplies by two", () => {
  expect(timesTwo(4)).toBe(8);
});

test("Adds two numbers", () => {
  expect(sum(1, 2)).toBe(3);
});

test("Build an order object", () => {
  const items = [
    {
      id: "1",
      name: "삼계탕",
      price: 21000,
    },
    {
      id: "2",
      name: "엽기떡볶이",
      price: 15000,
    },
    {
      id: "3",
      name: "물냉면 만두 세트",
      price: 18000,
    },
  ];

  const result = {
    items,
    total: 54000,
  };

  expect(order(items)).toEqual(result);
});

describe("For Math", () => {
  test("Multiplies by two", () => {
    expect(timesTwo(4)).toBe(8);
  });

  test("Adds two numbers", () => {
    expect(sum(1, 2)).toBe(3);
  });
});