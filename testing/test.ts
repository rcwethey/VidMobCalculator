import Calculate from '..';
// This is a file to be used for Tersting in jest

//Calculate("1 + 2") //gives 3
// Calculate("4*5/2") //gives 10
// Calculate("-5+-8--11*2") //gives 9
// Calculate("-.32       /.5") //gives -0.64
Calculate("(4-2)*3.5") //gives 7
// Calculate("2+-+-4") //gives Syntax Error (or similar)
//Calculate("19 + cinnamon") //gives Invalid Input (or similar)
//Calculate(") + cinnamon") //gives Syntax Error (or similar)
//Calculate("* + cinnamon") //gives Syntax Error (or similar)
//Calculate("+ + cinnamon") //gives Syntax Error (or similar)
//Calculate("/ + cinnamon") //gives Syntax Error (or similar)

//Run by typing ts-node test.ts orr.....
// tsc test.ts || node test.js on Windows and
// tsc test.ts && node test.js on Mac or Linux 