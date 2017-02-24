import { range } from '../src/';

test('returns an array, which begins from "start" argument, ends with "end" argument. Step = "step"', () => {
  const arr = range(0, 10, 1);

  const length = arr.length;

  expect(arr.length).toBe(10);

  expect(arr[0]).toBe(0);
});

test('some validation tests', () => {
  const arr = range(0, 5, 1);

  expect(() => range())
    .toThrow(new Error("One of the args is not valid"));

  expect(() => range('hello there'))
    .toThrow(new Error("One of the args is not valid"));

  expect(() => range(undefined))
    .toThrow(new Error("One of the args is not valid"));

  expect(() => range(null))
    .toThrow(new Error("One of the args is not valid"));
});
