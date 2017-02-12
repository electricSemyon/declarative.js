import { humanize } from '../src/';

test('must replace underscores with spaces and capitalize first word', () => {
  const sampleText = 'hello_world';
  const expectedText = 'Hello world';

  const humanizedText = humanize(sampleText);

  return expect(humanizedText).toBe(expectedText); 
});
