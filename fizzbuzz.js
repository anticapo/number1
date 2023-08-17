/* FizzBuzz rules
1. Count from 1 to 30
2. Print "Fizz" for every number divisible by 3
3. Print "Buzz" for every number divisible by 5
4. If a number is both divisble by 3 and 5, then print "FizzBuzz"
5. For every other number, print the number
6. Print "," or newline (\n) between every step

Example with "," as delimiter:
1, 2, Fizz, 4, Buzz, Fizz, 7, 8, Fizz, Buzz, 11, Fizz, 13, 14, FizzBuzz, 16, 17, Fizz, 19, Buzz, Fizz, 22, 23, Fizz, Buzz, 26, Fizz, 28, 29, FizzBuzz

Source: https://en.wikipedia.org/wiki/Fizz_buzz#Programming
*/

// one line comment

/* multi
    line
    comment
*/

for (let variableName = 1; variableName < 31; variableName++) {
    if (variableName %3 ==0 && variableName % 5 ==0) console.log ("fizzbuzz")
    else {
        if (variableName % 3 ==0) console.log ("fizz") 
        if (variableName % 5 ==0) console.log ("buzz")
        if (variableName % 3 != 0 && variableName % 5 != 0) console.log (variableName)
    }
}