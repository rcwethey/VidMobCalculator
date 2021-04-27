/**
 * Created By: Ryan C. Wethey 
 * Date of Last Edit: 4/26/21
 * Reason For Edit: Refactoring + Optimization
 */

//this function takes an element as a string, newPrecedence as a number and returns a number
const precedenceSwitch = (element: string): number => {
  //sets newPrecedence equal to the precedence of the element given to the function and returning the newPredence through a switch
  let newPrecedence = 0
  switch (element) {
    case '+':
    case '-':
      newPrecedence = 2;
      break;
    case '*':
    case '/':
      newPrecedence = 3;
      break;
  }
  return newPrecedence;
}

export default precedenceSwitch;