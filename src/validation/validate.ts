const validateInput = (splitExpression: string[]): string[] => {
  /**letter is to test if array containers any letter in the english alphabet, 
   * as well as any general syntax errors due to duplicate operators with some exceptions,
   * and array of all operators to test against beggining element and ending element with 
   * some operators pushed onto the array during actual test
  */
  const letter = /[a-z]+/g,
    generalAlgorithmicSyntaxError = ['++', '+*', '+/', '+)', '-+', '-*', '-/', '-(', '*+', '**', '*/', '*)', '/+', '/*', '//', '/)', '(+', '(*', '(/', '()'],
    AlgorithmicSyntaxError = ['*', '/', '+']

  //to keep track of pairs of parentheses
  let openedParentheses = 0, closedParentheses = 0


  //tests to make sure the expression is not empty
  if (!splitExpression.length) return splitExpression = ['Invalid Input']

  //tests to make sure the 1st element is not any operator besides a negative or an open parentheses
  if ([...AlgorithmicSyntaxError, ')'].indexOf(`${splitExpression[0]}`) >= 0) return splitExpression = ['Syntax Error']

  //tests to make sure the last element is not any operator besides a closed parentheses
  if ([...AlgorithmicSyntaxError, '(', '-'].indexOf(`${splitExpression[splitExpression.length - 1]}`) >= 0) return splitExpression = ['Syntax Error']


  //!! Check is array is length of 1 and only operator return syntax error if so

  //!! What do you do whane the array is not length of 1 but is only numbers or no actual operator to do calculations on?



  /**loops the array to make sure of 3 things 
   * 1. The array does not contain any letters
   * 2. No uneven parentheses pairs
   * 3. No syntaxt errors are occuring with multiple operatots back to back with exception to some circumstances
  */

  for (let index = 0; index < splitExpression.length; index++) {
    let element = splitExpression[index], peakingElement = splitExpression[index + 1]
    //tests array against any letters and throws an error before any furthur operations can occur
    if (letter.test(splitExpression[index])) return splitExpression = ['Invalid Input'];

    //keep track of parentheses pairs
    if (element == "(") openedParentheses++
    if (element == ")") closedParentheses++

    //tests against all syntax error possabilities and throws an error before any further operations can occuer
    if (generalAlgorithmicSyntaxError.indexOf(`${element}${peakingElement}`) >= 0) return splitExpression = ['Syntax Error']
  }

  if (openedParentheses !== closedParentheses) return splitExpression = ['Syntax Error']

  return splitExpression
}

export default validateInput;