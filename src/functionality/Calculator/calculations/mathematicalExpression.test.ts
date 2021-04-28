import mathematicalExpression from './mathematicalExpression'

test('Should get 8', () => {
  expect(mathematicalExpression(['*'], ['2', '4']))
    .toStrictEqual('8')
})

test('Should get 6', () => {
  expect(mathematicalExpression(['+'], ['2', '4']))
    .toStrictEqual('6')
})

test('Should get 0.5', () => {
  expect(mathematicalExpression(['/'], ['2', '4']))
    .toStrictEqual('0.5')
})

test('Should get -2', () => {
  expect(mathematicalExpression(['-'], ['2', '4']))
    .toStrictEqual('-2')
})