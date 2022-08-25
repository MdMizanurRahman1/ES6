const max = Math.max(34, 57, 89, 100);
//console.log(max);

//const numbers = [100, 123, 234, 345, 456, 567];
//const largest = Math.max(...numbers);
//console.log(largest);

//const numbers2 = [134, 345, ...numbers, 122, 234, 567, 678];
//console.log(numbers2);

const numbers = [12, 85, 99, 78];


const numbers2 = [...numbers];
numbers.push(55);
numbers2.push(777);
console.log(numbers);
console.log(numbers2);

const numbers3 = [...numbers];  //// agery variable man na rakhtey chailey 
console.log(numbers3);