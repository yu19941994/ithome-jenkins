const reverseString = require('./reversestring');

test('reverseString function existed', () => {
  expect(reverseString).toBeDefined();
})

test('String reverses to lowercase', () => {
//   expect(reverseString('HELLO')).toEqual('olleh');
  expect(reverseString('HELLO')).toEqual('ollaa');
})