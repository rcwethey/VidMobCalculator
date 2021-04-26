//Import functions
import validateInput from './validation/validate';
import calc from './calculations/calc';

const Index = (expression: string): number | Error => {
  let answer: number;

  //Split the expression into an array and remove the white space 
  const expressionSplitArray = expression.split('').filter(nonWhiteSpaceElement => { return nonWhiteSpaceElement != ' ' });

  //Validatied array 
  const validatedArray: string[] = validateInput(expressionSplitArray);

  //if the array returned is one element an error occured, return the first element beign the error
  if (validatedArray.length === 1) {
    console.log(validatedArray[0])
    return new Error(validatedArray[0]);
  };

  //does the actual calculation
  answer = calc(validatedArray);
  console.log(answer);

  return answer;
}

export default Index;


