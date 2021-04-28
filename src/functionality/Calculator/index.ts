/**
 * Created By: Ryan C. Wethey 
 * Date of Last Edit: 4/26/21
 * Reason For Edit: Commenting
 */

//Import functions
import validateInput from './validation/validate';
import calculate from './calculations/calculate';


const Index = (expression: string): number | string => {
  let answer: number | string;

  //Split the expression into an array and remove the white space 
  const expressionSplitArray = expression.split('').filter(nonWhiteSpaceElement => { return nonWhiteSpaceElement != ' ' });

  //Validatied array 
  const validatedArray: string[] = validateInput(expressionSplitArray);


  //if the array returned is one element an error occured, return the answer is the error message else calculate!
  if (validatedArray.length === 1 && (validatedArray[0] === "Syntax Error" || "Invalid Input")) { answer = validatedArray[0] }
  else { answer = calculate(validatedArray) }
  return answer
}

export default Index;


