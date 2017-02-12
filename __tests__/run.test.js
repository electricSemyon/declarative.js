import run from '../src/run';

test('array length must be 5', () => {
  const arr = [];

  run(5).times((n) => arr.push(n));

  return expect(arr.length).toBe(5); 
});
