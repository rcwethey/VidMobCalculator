import Calculate from './calculate';

test('', () => {
  expect(Calculate(['1', '+', '2'])).toStrictEqual(3)
})

test('', () => {
  expect(Calculate(['4', '*', '5', '/', '2'])).toStrictEqual(4)
})



