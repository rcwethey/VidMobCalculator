# VidMob Engineering Take Home Exercise Evaluation
***
#### We will be reviewing this code as if it were to be added to our production code base. This means that in addition to basic functionality the aspects we will consider include:
- general readability / style
- names
- comments and/or other documentation
- efficiency
- structure / architecture
- testing

If we advance you to the final interview round, part that day will be a meeting to review and discuss this exercise.

### Problem Summary
Write a calculator program. The program should let a user enter a math problem as a string and get an answer.

### Problem Constraints
- functional, runnable code- someone should be able to clone the repository or otherwise copy your source files and run it
- can be command-line or web-based
- do not use eval (or equivalent); you need to parse the string and do the math
- using built-in string-to-number conversion is fine
- use whatever language you like. If you wish, choose a language that you've wanted to learn and use this interview exercise as an excuse to make the time to tackle it. If you're not sure, pick one of scala, groovy, python, or typescript.

### Requirements
- take text or string as input
- support positive, negative, and decimal numbers
- support +, -, *, and / operations
- support parentheses
 -a bit of documentation / help text for how to use your program

### Some Examples
calculate "1 + 2" gives 3
calculate "4*5/2" gives 10
calculate "-5+-8--11*2" gives 9
calculate "-.32       /.5" gives -0.64
calculate "(4-2)*3.5" gives 7
calculate "2+-+-4" gives Syntax Error (or similar)
calculate "19 + cinnamon" gives Invalid Input (or similar)

### Implementation Guide
We generally expect to get the results of this exercise within a week of sending it out, but we do not expect it to take anywhere near a week's worth of work to implement - that timeframe is meant to give you the flexibility to fit this in among whatever other priorities and obligations that you have. If you want longer than that just let us know.

Depending on how familiar you are with your chosen language and how smoothly and quickly things go you may not get a chance to add all the functionality that you want in the time you've allocated. Prioritize
1. A program that runs
2. \+and - for whole numbers
3. \+and - for all integers
4. \*and / for all integers in no particular order
5. Input validation
  
  + decimals
  + parentheses
  + For any parts that you don't get to, stub things out and leave comments with any thoughts you have about implementation of those parts. Document any assumptions that you make and what functionality your program covers.

Use whatever references and resources you'd normally use for a programming project. This is not a closed book exam or anything like that :)

If you have any questions at any point, about the process or to clarify the problem or check assumptions or anything, contact us.

When you are done, let us know and send us a link to your repository or a .zip of your code.
