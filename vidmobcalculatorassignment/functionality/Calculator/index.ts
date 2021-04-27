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
  console.log(expressionSplitArray)
  //Validatied array 
  const validatedArray: string[] = validateInput(expressionSplitArray);
  //console.log(validatedArray);

  //if the array returned is one element an error occured, return the answer is the error message else calculate!
  answer = (validatedArray[0] !== "Syntax Error" || "Invalid Input") ? calculate(validatedArray) : validatedArray[0]
  return answer
}

export default Index;


