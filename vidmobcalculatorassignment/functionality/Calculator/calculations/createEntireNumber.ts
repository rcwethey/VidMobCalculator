/**
 * Created By: Ryan C. Wethey 
 * Date of Last Edit: 4/26/21
 * Reason For Edit: Refactoring + Optimization
 */

//this function takes in the entire expression array and the index the parent for loop is at and returns and object of the returned number and the new index the parent for loop will continue at 
const createEntireNumber = (expression: string[], index: number, numberOrPeriod: RegExp) => {
  //new holding array of the numbers to be pushed into one number
  let entireNumber: string[] = [], exrpessionLength = expression.length

  //while the index is a number or a dot and it isnt the end of the expression push the number and increment the index
  do {
    entireNumber.push(expression[index])
    index++;
  } while (numberOrPeriod.test(expression[index]) && index < exrpessionLength)

  //decrement the index in favor of the parent for loop incrementing to next index anyways
  index = index - 1

  //join the enitrNumber array into a string called returnedNumberString
  let returnedNumberString = entireNumber.join('')
  return { returnedNumberString, index };
}

export default createEntireNumber;