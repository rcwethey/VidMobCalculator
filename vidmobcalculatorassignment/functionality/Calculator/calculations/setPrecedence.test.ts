import setPrecendence from './setPrecedence';

test('Should get 2', () => {
  expect(setPrecendence('+'))
    .toStrictEqual(2)
})

test('Should get 2', () => {
  expect(setPrecendence('-'))
    .toStrictEqual(2)
})

test('Should get 2', () => {
  expect(setPrecendence('-'))
    .toStrictEqual(2)
})
test('Should get 3', () => {
  expect(setPrecendence('*'))
    .toStrictEqual(3)
})

test('Should get 3 ', () => {
  expect(setPrecendence('/'))
    .toStrictEqual(3)
})

test('Should break it!', () => {
  expect(setPrecendence('%'))
    .toStrictEqual(0)
})