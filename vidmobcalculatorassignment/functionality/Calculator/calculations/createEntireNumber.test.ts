import createEntireNumber from './createEntireNumber'

test('Should get an object with 3.5 and index of 7', () => {
  expect(createEntireNumber(['(', '-', '2', '*', '(', '3', '.', '5', '+', '3', ')', ')', '-', '4', '+', '(', '2', '/', '-', '1', '0', ')', ')'], 5, /[0-9\.]+/))
    .toStrictEqual({ "returnedNumberString": "3.5", "index": 7 })
})

test('Should get an object with -2 and index of 2', () => {
  expect(createEntireNumber(['(', '-', '2', '*', '(', '3', '.', '5', '+', '3', ')', ')', '-', '4', '+', '(', '2', '/', '-', '1', '0', ')', ')'], 1, /[0-9\.]+/))
    .toStrictEqual({ "returnedNumberString": "-2", "index": 2 })
})

test('Should get an object with 4 and index of 13', () => {
  expect(createEntireNumber(['(', '-', '2', '*', '(', '3', '.', '5', '+', '3', ')', ')', '-', '4', '+', '(', '2', '/', '-', '1', '0', ')', ')'], 13, /[0-9\.]+/))
    .toStrictEqual({ "returnedNumberString": "4", "index": 13 })
})

test('Should get an object with 2 and index of 16', () => {
  expect(createEntireNumber(['(', '-', '2', '*', '(', '3', '.', '5', '+', '3', ')', ')', '-', '4', '+', '(', '2', '/', '-', '1', '0', ')', ')'], 16, /[0-9\.]+/))
    .toStrictEqual({ "returnedNumberString": "2", "index": 16 })
})


test('Should get an object with -10 and index of 20', () => {
  expect(createEntireNumber(['(', '-', '2', '*', '(', '3', '.', '5', '+', '3', ')', ')', '-', '4', '+', '(', '2', '/', '-', '1', '0', ')', ')'], 18, /[0-9\.]+/))
    .toStrictEqual({ "returnedNumberString": "-10", "index": 20 })
})