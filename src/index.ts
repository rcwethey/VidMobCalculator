//Import functions
import validateInput from './validation/validate';
import calc from './calculations/calc';

const Index = (expression: string): number | Error => {
  let answer: number;

  //Split the expression into an array and remove the white space 
  const expressionSplitArray = expression.split('').filter(nonWhiteSpaceElement => { return nonWhiteSpaceElement != ' ' });

  //Validation 
  const validatedArray: string[] = validateInput(expressionSplitArray);

  //if the array returned is one element an error occured, return the first element beign the error
  //!! Fix this to be an error but allow the other tests to run 
  if (validatedArray.length <= 1) {
    console.log(validatedArray[0])
    return new Error(validatedArray[0]);
  };

  //if validatedArray length is 1 return the value!
  //answer = Number(validatedArray[0])


  //does the actual calculation
  answer = calc(validatedArray);
  console.log(answer);

  //!! Not the number this is returning 
  return answer;
}

export default Index;


