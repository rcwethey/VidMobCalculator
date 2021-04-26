/**
 * Created By: Ryan C. Wethey 
 * Date of Last Edit: 4/26/21
 * Reason For Edit: Refactoring + Optimization
 */

//imports
import precedenceSwitch from './precedence';
import mathematicalExpression from './mathematicalExpression';
import createEntireNumber from './createEntireNumber'


const calc = (expression: string[]): number => {
  //array containing all operators involved in this stacking function
  const operators = ['+', '-', '*', '/'], numberOrPeriod = /[0-9\.]+/
  let operationsArray: string[] = [], numbersArray: string[] = [], precedence: number = 0, newPrecedence: number

  //helper functions to help with the DRY pricnciple
  const pushElement = (array: string[], element: string) => array.push(element);
  const doRegualarMathematicalExpression = (opsArray: string[], numsArray: string[]) => { return mathematicalExpression(opsArray.splice(-1), numsArray.splice(-2)) }
  const doImplicitMultiplicationExpression = (numsArray: string[]) => { return mathematicalExpression(['*'], numsArray.splice(-2)) }

  for (let index = 0; index <= expression.length - 1; index++) {
    let element = expression[index], beforeElement = expression[index - 1], lastOperator: string | undefined = operationsArray[operationsArray.length - 1]

    /** if the element is a number or a period pass the number into the wholeNumber function 
     * set items equal to the returned object 
     * set the index of the for loop equal to the items.index
     * push the items.returnedNumber onto the numbers array
     * */
    if (numberOrPeriod.test(element) || index === 0 || (element === '-' && [...operators, '('].includes(beforeElement))) {
      let items = createEntireNumber(expression, index, numberOrPeriod);
      index = items.index;
      numbersArray.push(items.returnedNumberString)
    }

    //if element is an operator
    else if (operators.includes(element)) {
      //if the operators array is not empty then pass the element and newPrecedence value into the precedence switch
      if (operationsArray.length) {
        newPrecedence = precedenceSwitch(element)

        /** if newPrecedence is less than or equal to precedence,
         * take off the last operator and last 2 numbers and pass them into the operation function,
         * push the returned value of number back onto the end of the numbers array,
         * then push the new operator onto the operators array,
         * and set precence equal to the new precedence.
         * */

        if ((newPrecedence <= precedence) && (lastOperator !== '(')) {
          pushElement(numbersArray, doRegualarMathematicalExpression(operationsArray, numbersArray))
          pushElement(operationsArray, element)
          precedence = newPrecedence
        }

        //else push the new operator onto the operator array and continue on with your loop
        else pushElement(operationsArray, element)
      }

      //if the operator array is empty pass the element into the precedence switch and set the precedence value equal to the return value 
      //push the operator onto the operations array
      else {
        precedence = precedenceSwitch(element)
        pushElement(operationsArray, element)
      }
    }

    //if the element is an open parentheses push it onto the operations array
    else if (element === '(') pushElement(operationsArray, element)

    //if the element is a closed parathenses take the last operator and the last two numbers and pass them into the operation function and push the returned value onto the numbers array
    else if (element === ')') {

      //loop through array and perform calculations until the next operator is the open parentheses
      while (operationsArray[operationsArray.length - 1] !== '(') pushElement(numbersArray, doRegualarMathematicalExpression(operationsArray, numbersArray))

      //take off the open parentheses
      operationsArray.splice(-1)

      //if the numbers array is 2 elements longer than the operators array perform implicate multiplication
      if (numbersArray.length === operationsArray.length + 2) pushElement(numbersArray, doImplicitMultiplicationExpression(numbersArray))
    }
  }

  //loop through performing calculations until the operators array is emopty
  while (operationsArray.length) pushElement(numbersArray, doRegualarMathematicalExpression(operationsArray, numbersArray))

  //if the numbers array still has more than one value perform implicit multiplication
  if (numbersArray.length > 1) pushElement(numbersArray, doImplicitMultiplicationExpression(numbersArray))

  return Number(numbersArray[0]);
}

export default calc;