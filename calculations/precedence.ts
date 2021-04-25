//this function takes an element as a string, newPrecedence as a number and returns a number
const precedenceSwitch = (element: string, newPrecedence: number): number => {
  //sets newPrecedence equal to the precedence of the element given to the function and returning the newPredence through a switch
  switch (element) {
    case '+':
    case '-':
      newPrecedence = 2;
      break;
    case '*':
    case '/':
      newPrecedence = 3;
      break;
    default:
      alert('how did you even get here??');
      break;
  }
  return newPrecedence;
}

export default precedenceSwitch;