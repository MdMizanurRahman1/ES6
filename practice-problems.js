///problem 1a
const student = (a, b, c) => a * b * c;
const add9 = student(10, 20, 30);

const students = (first, second, third) => first * second * third;
const add5 = students(10, 20, 30);
//console.log(add5);

//practice problem-1b
//Write the following sentence in three lines and print the result:
//I am a web developer. I love to code. I love to eat biryani.
const result = `I am a web developer.
I love to code.
I love to eat biryani.
`;

//console.log(result);

//practice problem-1c
//Write an arrow function that will take 2 parameters: One parameter
//will come from you and the other parameter will be a default
//parameter. Add these two parameters and return the result.

const mathmatics = (a, b = 0) => a + b;
const doMath = mathmatics(30);
//console.log(doMath);

//practice problem 2a.
//const friends=['karim', 'rahim', 'momin', 'sami', 'pico', 'bala','rahman']=>if()

const number = ([a, b, c, d, e]) => Math.sqrt([a, b, c, d, e]);


const numbers = number([2, 3, 4, 5, 6]);
console.log(numbers);
