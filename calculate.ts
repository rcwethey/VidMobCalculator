//Import functions
import validateInput from './validate';

const Calculate = (expression: string): number => {

  //Split the expression into an array and remove the white space 
  const expressionSplitArray = expression.split('').filter(nonWhiteSpaceElement => { return nonWhiteSpaceElement != ' ' });

  //Validation 
  let validatedArray: string[];
  validatedArray = validateInput(expressionSplitArray);

  //if the array returned is one element an error occured, return the first element beign the error
  //!! Fix this to be an error but allow the other tests to run 
  if (validatedArray.length <= 1) {
    console.log(validatedArray[0])
    return;
  };

  return;
}

export default Calculate;


