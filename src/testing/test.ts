import Calculate from '../index';
// This is a file to be used for Tersting in jest

//!! ONE TYPE OF OPERATOR
//Calculate("1 + 2") //gives 3                                  DONE

//!! TWO TYPES OF OPERATORS
//Calculate("4*5/2") //gives 10                                 DONE
//Calculate("4+5/2") //gives 6.5                                DONE
//Calculate("4/2+2") //gives 4                                  DONE
//Calculate("10/2.5+2") //gives 6                               DONE    

//!!THREE OPERATORS 
//Calculate("4*5/2+2") //gives                                  DONE
//Calculate("4+5/2*2") //gives                                  DONE
//Calculate("4/2+2/2") //gives                                  DONE
//Calculate("10/2.5+2+2") //gives                               DONE    


//!! NEGATIVES
//Calculate("-10/2.5+2") //gives -2                             DONE
//Calculate("10/2.5+-2") //gives 2                              DONE
//Calculate("-5+-8--11*2") //gives 9                            DONE
//Calculate("-.32       /.5") //gives -0.64                     DONE

//!! PARENTHESES
Calculate("(4-2)*3.5") //gives 7

//!! ERRORS
// Calculate("2+-+-4") //gives Syntax Error (or similar)        DONE
//Calculate("19 + cinnamon") //gives Invalid Input (or similar) DONE
//Calculate(") + cinnamon") //gives Syntax Error (or similar)   DONE
//Calculate("* + 5") //gives Syntax Error (or similar)          DONE
//Calculate("+ + 5") //gives Syntax Error (or similar)          DONE
//Calculate("/ + 5") //gives Syntax Error (or similar)          DONE
//Calculate("5 + (") //gives Syntax Error (or similar)          DONE
//Calculate("") //gives Invalid Input (or similar)              DONE
//Calculate("(4-2*3.5") //gives Syntax Error (or similar)       DONE



//Run by typing ts-node test.ts orr.....
// tsc test.ts || node test.js on Windows and
// tsc test.ts && node test.js on Mac or Linux 