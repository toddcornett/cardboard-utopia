import sum from './tests/sum.js';
import callMyFunction from './tests/call-my-function.js';

describe('sum function', () => {
  it('sums up two integers', () => {
    expect(sum(1, 2)).toEqual(3);
  });
});

describe('My Test Suite', () => {
  it('My Test Case', () => {
    expect(true).toEqual(true);
  });
});

console.log(sum(1, 2));

callMyFunction(function() {
  console.log('Hello world');
});
