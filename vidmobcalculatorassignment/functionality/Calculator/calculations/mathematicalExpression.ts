/**
 * Created By: Ryan C. Wethey 
 * Date of Last Edit: 4/26/21
 * Reason For Edit: Refactoring + Optimization
 */

//takes in an operator which is a string array and numbers which is also a strign array 
const mathematicalExpression = (operator: string[], numbers: string[]): string => {
  //sets a var to the only value in the operator array
  let operatorValue = operator[0], stringedNumber: number = 0
  //turns the array of numbers into array of numbers/floats
  const nums = numbers.map(number => Number(number))

  switch (operatorValue) {
    case '-': stringedNumber = (nums[0] - nums[1]); break;
    case '+': stringedNumber = (nums[0] + nums[1]); break;
    case '*': stringedNumber = (nums[0] * nums[1]); break;
    case '/': stringedNumber = (nums[0] / nums[1]); break;
  }
  return stringedNumber.toString();
}

export default mathematicalExpression;