import precedenceSwitch from './precedence';
import mathematicalOperation from './mathematicalOperation';
import entireNumber from './entireNumber'

const calc = (expression: string[]): number => {
  //array containing all operators involved in this stacking function
  const Pemdas = ['+', '-', '*', '/', '(', ')']
  //!! Add dot to this regex
  // /[^0-9\.]+/g
  const number = /[0-9]+/g
  let operations = [], numbers = [], precedence: number, newPrecedence: number

  for (let index = 0; index < expression.length; index++) {
    let element = expression[index]

    //console.log(expression, index, numbers);
    console.log(expression, element);

    //if the element is an open parentheses push it onto the operations array
    if (element === '(') operations.push(element)

    //if element is an operator
    else if (element === ('+' || '-' || '*' || '/')) {

      //if the operators array is not empty then pass the element and newPrecedence value into the precedence switch
      if (operations.length) {
        newPrecedence = precedenceSwitch(element, newPrecedence)

        /**if precedence is less than or equal to newPrecedence,
         take off the last operator and last 2 numbers and pass them into the operation function,
         push the returned value of number back onto the end of the numbers array,
         then push the new operator onto the operators array,
         and set precence equal to the new precedence.
         */
        if (newPrecedence >= precedence) {
          numbers.push(
            mathematicalOperation(operations.splice(-1), numbers.splice(-2))
          )
          operations.push(element)
          precedence = newPrecedence
        }
      }

      //if the operator array is empty pass the element into the precedence switch and set the precedence value equal to the return value 
      //push the operator onto the operations array
      else {
        precedence = precedenceSwitch(element, newPrecedence)
        operations.push(element)
      }
    }

    //if the element is a closed parathenses take the last operator and the last two numbers and pass them into the operation function and push the returned value onto the numbers array
    //!! DO THIS UNTIL YOU REACH THE OPEN PARENTHESES
    else if (element === ')') {
      numbers.push(mathematicalOperation(operations.splice(-1), numbers.splice(-2)))
    }

    //if the element is a number or a period pass the number into the wholeNumber function 
    //set items equal to the returned object 
    //set the index of the for loop equal to the items.index
    //push the items.returnedNumber onto the numbers array
    else if (number.test(element) || element === '.') {
      let items = entireNumber(expression, index);
      index = items.index;
      numbers.push(items.returnedNumberString)
    }

  }

  return;
}




export default calc;