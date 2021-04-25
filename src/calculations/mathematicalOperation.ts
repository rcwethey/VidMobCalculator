//takes in an operator which is a string array and numbers which is also a strign array 
const mathematicalOperation = (operator: string[], numbers: string[]): string => {
  //sets a var to the only value in the operator array
  let operatorValue = operator[0], stringedNumber: string = ''
  //turns the array of numbers into array of numbers/floats
  const nums = numbers.map(number => Number(number))

  if (operatorValue === '-') { stringedNumber = (nums[0] - nums[1]).toString() }
  if (operatorValue === '*') { stringedNumber = (nums[0] * nums[1]).toString() }
  if (operatorValue === '+') { stringedNumber = (nums[0] + nums[1]).toString() }
  if (operatorValue === '/') { stringedNumber = (nums[0] / nums[1]).toString() }

  return stringedNumber;
}

export default mathematicalOperation;