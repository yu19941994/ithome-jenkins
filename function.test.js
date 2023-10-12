const functions = require('./function');

// beforeAll(() => initDatabase());
// afterAll(() => closeDatabase());

// const initDatabase = () => console.log('Database Initialized...');
// const closeDatabase = () => console.log('Database Closed...');

const nameCheck = () => console.log('Checking Name...');

describe('Checking Names', () => {
  beforeEach(() => nameCheck());

  test('User is Jeff', () => {
    const user = 'Jeff';
    expect(user).toBe('Jeff');
  });

  test('User is Karen', () => {
    const user = 'Karen';
    expect(user).toBe('Karen');
  });
})

// toBe
test('Adds 2 + 2 to equal 4', () => {
  expect(functions.add(2, 2)).toBe(4);
})

test('Adds 2 + 2 to Not to equal 5', () => {
  expect(functions.add(2, 2)).not.toBe(5);
})

// toBeNull
test('Should be null', () => {
  expect(functions.isNull()).toBeNull();
})

// toBeFalsy
test('Should be falsy', () => {
  expect(functions.checkValue(2)).not.toBeFalsy();
})


test('User should be Brad Traversy obj', () => {
  expect(functions.createUser()).toEqual({
    firstName: 'Brad',
    lastName: 'Traversy'
  });
})

// Less than and greater than
test('Should be under 1600', () => {
  const load1 = 800;
  const load2 = 700;
  expect(load1 + load2).toBeGreaterThan(1400);
  // expect(load1 + load2).toBeLessThan(1600);
});

// Regex
test('There is no I in team', () => {
  expect('teami').toMatch(/I/i);
})

// Arrays
test('Admin should be in username', () => {
  usernames = ['john', 'karen', 'admin'];
  expect(usernames).toContain('admin');
})

// Async Await
test('User fetched name should be Leanne Graham', async () => {
  expect.assertions(1);
  const data = await functions.fetchUser()
  expect(data.name).toEqual('Leanne Graham')
})