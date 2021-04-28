import validate from './validate';

test('This will be an invalid input', () => {
  expect(validate(['*'])).toStrictEqual(['Invalid Input'])
})

test('This will be an invalid input', () => {
  expect(validate(['-'])).toStrictEqual(['Invalid Input'])
})

test('This will be an invalid input', () => {
  expect(validate([])).toStrictEqual(['Invalid Input'])
})

test('This will be an invalid input', () => {
  expect(validate(['('])).toStrictEqual(['Invalid Input'])
})

test('This will be a syntax error', () => {
  expect(validate(['(', '4', '-', '2', '*', '3', '.', '5'])).toStrictEqual(['Syntax Error'])
})

test('This will be a syntax error', () => {
  expect(validate([])).toStrictEqual(['Invalid Input'])
})

test('This will be a syntax error', () => {
  expect(validate(['5', '+', '('])).toStrictEqual(['Syntax Error'])
})

test('This will be a syntax error', () => {
  expect(validate(['/', '+', '5'])).toStrictEqual(['Syntax Error'])
})

test('This will be a syntax error', () => {
  expect(validate(['+', '+', '5'])).toStrictEqual(['Syntax Error'])
})

test('This will be a syntax error', () => {
  expect(validate(['*', '+', '5'])).toStrictEqual(['Syntax Error'])
})

test('This will be a syntax error', () => {
  expect(validate([')', '+', 'c', 'i', 'n', 'n', 'a', 'm', 'o', 'n'])).toStrictEqual(['Syntax Error'])
})

test('This will be an invalid input', () => {
  expect(validate(['1', '9', '+', 'c', 'i', 'n', 'n', 'a', 'm', 'o', 'n'])).toStrictEqual(['Invalid Input'])
})

test('This will be a syntax error', () => {
  expect(validate(['2', '+', '-', '+', '-', '4'])).toStrictEqual(['Syntax Error'])
})

test('This will pass, resulting in just a print out of the original array', () => {
  expect(validate(['2', '(', '1', '0', '+', '3', '(', '4', '/', '2', ')', ')', '+', '3', '/', '6']))
    .toStrictEqual(['2', '(', '1', '0', '+', '3', '(', '4', '/', '2', ')', ')', '+', '3', '/', '6'])
})

test('This will pass, resulting in just a print out of the original array', () => {
  expect(validate(['2', '(', '1', '0', '+', '3', ')'])).toStrictEqual(['2', '(', '1', '0', '+', '3', ')'])
})

test('This will pass, resulting in just a print out of the original array', () => {
  expect(validate(['(', '-', '2', '*', '(', '3', '.', '5', '+', '3', ')', ')', '-', '4', '+', '(', '2', '/', '-', '1', '0', ')']))
    .toStrictEqual(['(', '-', '2', '*', '(', '3', '.', '5', '+', '3', ')', ')', '-', '4', '+', '(', '2', '/', '-', '1', '0', ')'])
})

test('This will pass, resulting in just a print out of the original array', () => {
  expect(validate(['4', '-', '(', '-', '2', '-', '3', '.', '5', ')', '/', '(', '2', '+', '-', '1', '0', ')'])).toStrictEqual(['4', '-', '(', '-', '2', '-', '3', '.', '5', ')', '/', '(', '2', '+', '-', '1', '0', ')'])
})

test('This will pass, resulting in just a print out of the original array', () => {
  expect(validate(['(', '4', '-', '2', ')', '*', '3', '.', '5'])).toStrictEqual(['(', '4', '-', '2', ')', '*', '3', '.', '5'])
})

test('This will pass, resulting in just a print out of the original array', () => {
  expect(validate(['1', '0', '/', '2', '.', '5', '+', '-', '2'])).toStrictEqual(['1', '0', '/', '2', '.', '5', '+', '-', '2'])
})

test('This will pass, resulting in just a print out of the original array', () => {
  expect(validate(['4', '+', '5', '/', '2', '*', '2'])).toStrictEqual(['4', '+', '5', '/', '2', '*', '2'])
})

test('This will pass, resulting in just a print out of the original array', () => {
  expect(validate(['4', '/', '2', '+', '2'])).toStrictEqual(['4', '/', '2', '+', '2'])
})

test('This will pass, resulting in just a print out of the original array', () => {
  expect(validate(['1', '+', '2'])).toStrictEqual(['1', '+', '2'])
})

test('This will pass, resulting in just a print out of the original array', () => {
  expect(validate(['1', '^', '2'])).toStrictEqual(['Invalid Input'])
})


