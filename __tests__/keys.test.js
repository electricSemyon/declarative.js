import { keys } from '../src/';

test('returns object keys count', () => {
  const sampleObject = {
    1: 'some text',
    2: 'some text again',
    3: 'and again'
  }

  const keysArray = keys(sampleObject);

  expect(keysArray.length).toBe(Object.keys(sampleObject).length); 
});

test('throws an error, when recieving wrong args', () => {

  expect(() => keys()).toThrow(new Error('Argument is not an object'));

  expect(() => keys(1337)).toThrow(new Error('Argument is not an object'));

  expect(() => keys('hello!')).toThrow(new Error('Argument is not an object'));

});
