//this function takes in the entire expression array and the index the parent for loop is at and returns and object of the returned number and the new index the parent for loop will continue at 
const entireNumber = (expression: string[], index: number) => {
  //testing if the value is a number
  const number = /[0-9]+/g

  //new holding array of the numbers to be pushed into one number
  let entireNumber: string[] = []

  //!! Include negative numbers in this mix
  //while the index is a number or a dot and it isnt the end of the expression push the number and increment the index
  do {
    entireNumber.push(expression[index])
    index++;
  } while ((number.test(expression[index]) || expression[index] === '.') && index < expression.length)

  //decrement the index in favor of the parent for loop incrementing to next index anyways
  index = index - 1

  //join the enitrNumber array into a string called returnedNumberString
  let returnedNumberString = entireNumber.join('')
  //console.log(returnedNumber, index);
  return { returnedNumberString, index };
}

export default entireNumber;