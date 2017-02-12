import { run } from '../src/';

test('function must throw an error if argument is null/undefined', () => {
  expect(() => run(null).times())
    .toThrow(new Error("Argument is null/undefined"));

  expect(() => run(0).times())
    .toThrow(new Error("Argument is null/undefined"));

  expect(() => run().times())
    .toThrow(new Error("Argument is null/undefined"));
})

test('callback must be called 5 times', () => {
  const mockFunction = jest.fn();

  run(5).times(() => mockFunction());

  expect(mockFunction.mock.calls.length).toBe(5); 
});
