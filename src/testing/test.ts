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
//Calculate("4*5/2+2") //gives 12                               DONE
//Calculate("4+5/2*2") //gives 9                                DONE
//Calculate("4/2+2/2") //gives 3                                DONE
//Calculate("10/2.5+2+2") //gives 8                           DONE    

//!! NEGATIVES
//Calculate("-10/2.5+2") //gives -2                             DONE
//Calculate("10/2.5+-2") //gives 2                              DONE
//Calculate("-5+-8--11*2") //gives 9                            DONE
//Calculate("-.32       /.5") //gives -0.64                     DONE

//!! PARENTHESES
//Calculate("(4-2)*3.5") //gives 7                              DONE
//Calculate("4-(2*3.5)") //gives -3                             DONE
//Calculate("4-(2*3.5)-(2+10)") //gives -15                     DONE
//Calculate("4-(-2*3.5)/(2+-10)") //gives 3.125                 DONE
//Calculate("4-(2*3.5)*(2+-10)") //gives 60                     DONE
//Calculate("4-(-2-3.5)/(2+-10)") //gives 3.3125                DONE
//Calculate("(-2*3.5)-4+(2/-10)") //gives -11.2                 DONE

//!! NESTED PARENTHESES
//Calculate("(-2*(3.5+3))-4+(2/-10)") //gives -17.2             DONE
//Calculate("(-2*(3.5+3))-(4+(2/-10))") //gives -16.8           DONE
//Calculate("(-2*(3.5+3))-4+(2/(-10+2))") //gives -17.25        DONE


//!! IMPLICITE MULTIPLICATION
//Calculate("2(10+3)") //gives 26                               DONE
//Calculate("4+2(10+3)") //gives 26                             DONE
//Calculate("4+2(10+3)(8+3)")//gives 290                        DONE

//!! COMPLEX EQUATIONS
Calculate("2(10+3(4/2))+3/6") //gives 32.5                    DONE

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
//Calculate("(") //gives Invalid Input (or Similiar)            DONE
//Calculate("") //gives Invalid Input (or Similiar)             DONE
//Calculate("-") //gives Invalid Input (or Similiar)            DONE
//Calculate("*") //gives Invalid Input (or Similiar)            DONE


//Run by typing ts-node test.ts orr.....
// tsc test.ts || node test.js on Windows and
// tsc test.ts && node test.js on Mac or Linux 