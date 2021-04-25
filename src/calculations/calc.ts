import precedenceSwitch from './precedence';
import mathematicalOperation from './mathematicalOperation';
import createEntireNumber from './createEntireNumber'

const calc = (expression: string[]): number => {
  //array containing all operators involved in this stacking function
  const operators = ['+', '-', '*', '/']
  const number = /[0-9\.]+/
  let operations = [], numbers: string[] = [], precedence: number = 0, newPrecedence: number

  for (let index = 0; index <= expression.length - 1; index++) {
    let element = expression[index], elementBefore = expression[index - 1]

    //console.log(expression, index, numbers, operations);
    //console.log(expression, element, index);


    //if the element is an open parentheses push it onto the operations array
    if (element === '(') operations.push(element)

    /** if the element is a number or a period pass the number into the wholeNumber function 
     * set items equal to the returned object 
     * set the index of the for loop equal to the items.index
     * push the items.returnedNumber onto the numbers array
     * */

    else if (number.test(element) || index === 0 || (element === '-' && operators.includes(elementBefore))) {
      let items = createEntireNumber(expression, index, number);
      index = items.index;
      numbers.push(items.returnedNumberString)
    }

    //if element is an operator
    else if (operators.includes(element)) {

      //if the operator array is empty pass the element into the precedence switch and set the precedence value equal to the return value 
      //push the operator onto the operations array
      if (!operations.length) {
        precedence = precedenceSwitch(element)
        operations.push(element)
      }

      //if the operators array is not empty then pass the element and newPrecedence value into the precedence switch
      else {
        newPrecedence = precedenceSwitch(element)

        /** if newPrecedence is less than or equal to precedence,
         * take off the last operator and last 2 numbers and pass them into the operation function,
         * push the returned value of number back onto the end of the numbers array,
         * then push the new operator onto the operators array,
         * and set precence equal to the new precedence.
         * */

        if (newPrecedence <= precedence) {
          numbers.push(
            mathematicalOperation(operations.splice(-1), numbers.splice(-2))
          )
          operations.push(element)
          precedence = newPrecedence
        }
        //else push the new operator onto the operator array and continue on with your loop
        else { operations.push(element) }
      }
    }

    //if the element is a closed parathenses take the last operator and the last two numbers and pass them into the operation function and push the returned value onto the numbers array
    //!! DO THIS UNTIL YOU REACH THE OPEN PARENTHESES
    else if (element === ')') {
      numbers.push(mathematicalOperation(operations.splice(-1), numbers.splice(-2)))
    }
  }

  //console.log(numbers, operations);

  while (operators.length && numbers.length > 1) {
    numbers.push(
      mathematicalOperation(operations.splice(-1), numbers.splice(-2))
    )
  }

  //!! This is not what it is returning hahah 
  return Number(numbers[0]);
}

export default calc;