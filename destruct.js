const fish = {
    name: 'king Fish',
    address: 'chandpur',
    color: 'silver',
    phone: '0171455555',
    price: 4000
}

const phone = fish.phone;
const color = fish.color;
//console.log(phone, color);

const { address } = fish;
//console.log(address);

const { age, name } = { name: 'Almas', age: 56, profession: 'Make up Aretis' };

//console.log(age);

const [first, another] = [44, 99, 88, 456];
//console.log(first, another);


const nayoks = ['sakib', 'bappi', 'raj']
const [king, lost, notun] = nayoks;
//console.log(notun);

let numbers = [1, 2, 3, 4, 6];
let [, d, , , e] = numbers;

//console.log(d, e);

function getSum(a, b = 9) { return a + b; } console.log(getSum(2, 7));

const y = x => x * x;
const z = y(5);
console.log(z);

const name1 = 'Hero';
const greetings1 = 'Welcome Home!' + ' ' + name;
const greetings = `welcome home!
${name1}
`;
console.log(greetings);

//const division = num1, num2 => console.log(num1 / num2);
//console.log(division(4, 2));

cars = ['toyota', 'honda', 'mercedes']; const newCars = [...cars, 'ferrari'];
console.log(newCars);