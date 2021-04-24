const validateInput = (splitExpression: string[]): string[] => {
  //letter const is to test if array containers any letter in the english alphabet
  const letter = /[a-z]+/g
  const generalAlgorithmicSyntaxError = ['++', '+*', '+/', '+)', '-+', '-*', '-/', '-(', '*+', '**', '*/', '*)', '/+', '/*', '//', '/)', '(+', '(*', '(/', '()']
  const AlgorithmicSyntaxError = ['*', '/', '+']

  //!! Implement feature for checking full sets of parentheses

  for (let index = 0; index < splitExpression.length; index++) {

    if (splitExpression.length != 1) {
      //tests array against any letters and throws an error before any furthur operations can occur
      if (letter.test(splitExpression[index])) splitExpression = ['Invalid Input'];

      //tests against all syntax error possabilities and throws an error before any further operations can occuer
      if (generalAlgorithmicSyntaxError.indexOf(`${splitExpression[index]}${splitExpression[index + 1]}`) >= 0 ||
        [...AlgorithmicSyntaxError, ')'].indexOf(`${splitExpression[0]}`) >= 0 ||
        [...AlgorithmicSyntaxError, '('].indexOf(`${splitExpression[splitExpression.length - 1]}`) >= 0
      ) { splitExpression = ['Syntax Error'] };
    }
  }
  return splitExpression
}

export default validateInput;